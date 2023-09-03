var str = 'string';
// 문자열은 유사배열이다.
for(var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

str[0] = 'S'; // 인덱스를 설정해 S로 바꿔도 s로 나온다.
console.log(str); // string


var str = 'string'; // string
str = "String";
str += ' test';
console.log(str); //String test 

str = str.substring(0, 3);
console.log(str); // Str

str = str.toUpperCase();
console.log(str); // STR


// var foo = true;
var bar = false;

// typeof 연산자는 타입을 나타내는 문자열을 반환한다.
// console.log(typeof foo);  // boolean
console.log(typeof bar);  // boolean


// null, undefined, 숫자 0은 false로 간주된다.


/* 1.1.4 undefined - 선언 이후 값을 할당하지 않은 변수는 undefined 값을 가진다. 변수 선언에 의해 확보된 메모리 공간을 처음 할당이 이루어질 때까지 빈 상태(대부분 비어있지 않고 쓰레기 값(Garbage value)이 들어 있다)로 내버려두지 않고 자바스크립트 엔진이 undefined로 초기화하기 때문 */


var foo;
console.log(foo);


// 변수의 값이 없다는 것을 명시하고 싶은 경우 어떻게 하면 좋을까? 그런 경우는 
// undefined를 할당하는 것이 아니라 null을 할당. (undefined 의도적 사용
// 권장x) 


/* 1.1.5 null - js는 대소문자 구별, null은 Null, NULL과 다르다.
의도적으로 변수에 값이 없다는 것을 명시할 때 사용 - 변수가 기억하는 메모리 어드레스의 참조 정보를 제거하는 것을 의미. 자스엔진은 누구도 참조하지 않는 메모리 영역에 대해 GC 수행 */

var foo = 'Lee';
foo = null; // 참조 정보 제거

/* 또는 함수가 호출되었으나 유효한 값을 반환할 수 없는 경우, 명시적으로 null을 반환하기도 한다. 예를 들어, 조건에 부합하는 HTML 요소를 검색해 반환하는 Document.querySelector()는 조건에 부합하는 HTML 요소를 검색할 수 없는 경우, null을 반환한다. */

// var element = document.querySelector('.myElem');
// HTML 문서에 myElem 클래스를 갖는 요소가 없다면 null을 반환한다.
// console.log(element);

var foo = null;
console.log(typeof foo); // object - 자스 설계상의 오류 (null이 아닌 object) 

console.log(typeof foo === null); // x typeof 사용 x
console.log(foo === null);        // o === 연산자를 사용해야한다.


/* 1.1.6 symbol - ES6에서 새롭게 추가. 변경 불가능한 원시타입의 값 
주로 이름 충돌 위험이 없는 유일한 객체의 프로퍼티 키를 만들기 위해 사용
Symbol 함수 호출해 생성*/

var key = Symbol('key');
console.log(typeof key);

var obj = {};
obj[key] = 'value';
console.log(obj[key]);