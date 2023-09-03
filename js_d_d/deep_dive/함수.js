/* 함수란 어떤 작업을 수행하기 위해 필요한 문들의 집합을 정의한 코드 블록
함수는 이름, 매개변수를 가진다.
필요한 때에 호출하여 코드 블록에 담긴 문들을 일괄적으로 실행할 수 있다. */

// 함수의 정의(함수 선언문)
function square(number) {
    return number * number;
  }

  // 함수의 정의(함수 선언문)
function square(number) {
    return number * number;
  }
  
  // 함수의 호출
  square(2); // 4

  // 동일한 작업 반복적 수행 -> 중복 코드 작성 x / 미리 정의된 함수를 재사용, 효율적 o => 코드의 재사용


  /* 함수의 일반적 기능
  1. 코드의 재사용
  2. 객체 생성
  3. 객체의 행위 정의(메소드)
  4. 정보 은닉
  5. 클로저
  6. 모듈화 등의 기능 */


  /* 함수 정의 방식 3가지
  1. 함수 선언문
  2. 함수 표현식
  3. Function 생성자 함수 */

  
  // 1. 함수 선언문
  // 함수명 + 매개변수 목록(0개 이상의 목록으로 괄호 감싸고 콤마 분리) + 함수 몸체(함수 호출 시 실행되는 문들의 집합 {}로 문들을 감싸고 return 문으로 결과값 반환 -> 반환값)
  function square(number) {
    return number * number;
  }


  // 2. 함수 표현식
  // 자스 함수는 일급 객체, 일급 객체의 특징
  // 1. 무명의 리터럴로 표현이 가능
  // 2. 변수나 자료 구조(객체, 배열)에 저장 가능
  // 3. 함수의 파라미터로 전달
  // 5. 반환값으로 사용 가능

  // => 함수의 일급 객체 특성 이용
  // => 함수 리터럴 방식으로 정의 + 변수 할당
  // => 함수 표현식
  // 함수 표현식
var square = function(number) {
    return number * number;
  };

// 함수 표현법 정의한 함수 함수명 생략 가능 - 익명 함수 (일반적)// 기명 함수 표현식(named function expression)
var foo = function multiply(a, b) {
    return a * b;
  };
  
  // 익명 함수 표현식(anonymous function expression)
  var bar = function(a, b) {
    return a * b;
  };
  
  console.log(foo(10, 5)); // 50
  console.log(multiply(10, 5)); // Uncaught ReferenceError: multiply is not defined
  // 함수는 일급객체이기 때문에 변수에 할당할 수 있는데 이 변수는 함수명이 아니라 할당된 함수를 가리키는 참조값을 저장하게 된다. 함수 호출시 함수명이 아니라 함수를 가리키는 변수명을 사용하여야 한다.
  var foo = function(a, b) {
    return a * b;
  };
  
  var bar = foo;
  
  console.log(foo(10, 10)); // 100
  console.log(bar(10, 10)); // 100

  /* 함수 표현식과 함수 선언문에서 사용한 함수명은 함수 몸체에서 자신을 재귀적 호출(Recursive function call)하거나 자바스크립트 디버거가 해당 함수를 구분할 수 있는 식별자의 역할을 한다. 
  함수 선언문으로 정의한 함수 square의 경우, 함수명으로 호출할 수 있었는데 이는 자바스크립트 엔진에 의해 아래와 같은 함수 표현식으로 형태가 변경되었기 때문이다. */
  var square = function square(number) {
    return number * number;
  };
  // 함수명, 함수 참조값을 가진 변수명 일치 => 함수명으로 호출된 것 처럼 보이지만 변수명으로 호출
  // 결국 함수 선언문도 함수 표현식과 동일하게 함수 리터럴 방식으로 정의


  /* Function 생성자 함수
  함수 선언문 ->
  함수 표현문 -> 모두 리터럴 방식 -> 결국 내장 함수 Function 생성자 함수로 함수 생성 -> 단순화 시킨 short-hand(축약법)
  
  Function 생성자 함수는 Function.prototype.constructor 프로퍼티로 접근 */
  new Function(arg1, arg2, ... argN, functionBody)

  var square = new Function('number', 'return number * number');
  console.log(square(10));

  // -> 일반적으로 사용 x


  // 익명함수 가장 사용 많이 함

  var son = function(a, b){
    return a * b;
  };



/* 함수 호이스팅
함수 선언문
=> 함수 선언의 위치와는 상관없이 코드 어느 곳에서든지 호출이 가능, 이것을 함수 호이스팅이라고 한다.
=> 함수 선언, 초기화, 할당이 한번에 이루어진다.
  -> 함수 선언 위치 상관x 소스 내 어느 곳에서든지 호출 가능

 자스는 let, const, var, function, function*, class 를 호이스팅한다. */
 var res = square(5);

 function square(number) {
   return number * number;
 }

 /* 호이스팅?
 => var 선언문, function 선언문 등 모든 선언문이 해당 스코프의 선두로 옮겨진 것처럼 동작하는 특성 */

 /* 변수 호이스팅 
 => 변수 생성 및 초기화와 할당이 분리되어 진행, 호이스팅 된 변수는 undefined로 초기화. 실제값의 할당은 할당문에서 이루어진다.
 함수 표현식
 => 선언문과 다르게 스크립트 로딩 시점에 변수 객체에 함수를 할당하지 않고 runtime에 해석되고 실행되므로 이 두가리를 구분하는 것은 중요하다. */
 var res = square(5); // TypeError: square is not a function

var square = function(number) {
  return number * number;
}

// -------- 변수 호이스팅 / 함수 표현식 권고


/* first-class object */