package com.ohgiraffers.section02.service.model.service;

import com.ohgiraffers.section02.service.model.dao.MenuDAO;
import com.ohgiraffers.section02.service.model.dto.CategoryDTO;
import com.ohgiraffers.section02.service.model.dto.MenuDTO;

import java.sql.Connection;

import static com.ohgiraffers.common.JDBCTemplate.*;

public class MenuService {
    /* 신규 카테고리 등록 후 신규 카테고리 코드로 신규 메뉴를 등록하는 기능 */
    public void registNewMenu() {

        /* 1. Connection 생성 */
        Connection con = getConnection();       // * 순서.2

        /* 2. DAO 메소드 호출 */
        MenuDAO menuDAO = new MenuDAO();        // * 순서.3

        /* 2-1. 카테고리 등록 */
        CategoryDTO newCategory = new CategoryDTO();        // * 순서.4
        newCategory.setName("기타");                         // * 순서.7
        newCategory.setRefCategoryCode(null);

        int result1 = menuDAO.insertNewCategory(con, newCategory);      // * 순서.8

        /* 2-2. 방금 입력 된 카테고리의 코드 조회 */
        // * 순서.13
        int newCategoryCode = menuDAO.selectLastCategoryCode(con); // * 순서.14 메소드 만들기

        /* 2-3. 메뉴 등록 */
        // * 순서.20 DTO 만들기
        MenuDTO newMenu = new MenuDTO();
        // * 순서.22
        newMenu.setName("메롱메롱스튜");
        newMenu.setPrice(40000);
        newMenu.setCategoryCode(newCategoryCode);   // 순서.13에 있는 newCategoryCode에서 가져옴
        newMenu.setOrderableStatus("Y");

        // * 순서.23 insertNewMenu 클래스 만들기
        int result2 = menuDAO.insertNewMenu(con, newMenu);

        // * 순서.25
        /* 3. 트랜잭션 제어 */
        if(result1 > 0 && result2 > 0) {
            commit(con);
            System.out.println("신규 카테고리 등록과 신규 메뉴 등록이 완료 되었습니다.");
        } else {
            rollback(con);
            System.out.println("신규 카테고리 등록과 신규 메뉴 등록이 실패 하였습니다.");
        }

        // * 순서.26
        /* 4. Connection 반납 */
        close(con);
    }
}
