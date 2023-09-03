/* 타입 변환 - 개발자의 의해 의도적 변환(명시적) / 자스 엔진에 의해 암묵적 자동 변환(암묵적) */

// 명시적
var x = 10;

var str = x.toString(); // 숫자를 문자열로 타입 캐스팅
console.log(typeof str);    // string
console.log(typeof x);

// 암묵적
var x = 10;
var str = x + '';

console.log(typeof str, str) // string 10

// 변수 x의 값이 변경된 것은 아니다.
console.log(x); // 10

// (10).toString()보다 10 + ''이 더욱 간결하고 이해하기 쉬울 수 있다.



/* ------------------------------------------------------ */
/* 암묵적 타입 변환 - 자스 엔진을 표현식을 평가할 때 문맥, 즉 컨텍스트(context)에 고려하여 암묵적 타입 변환을 실행한다. */


console.log(`1 + 1 = ${1 + 1}`);


/* 문자열 타입으로 변환 */
// 심볼 타입
// (Symbol()) + ''     // TypeError: Cannot convert a Symbol value to a string
// // 객체 타입
// ({}) + ''           // "[object Object]"
// Math + ''           // "[object Math]"
// [] + ''             // ""
// [10, 20] + ''       // "10,20"
// (function(){}) + '' // "function(){}"
// Array + ''          // "function Array() { [native code] }"

/* 숫자 타입으로 변환 */
// 문자열 타입
// +''             // 0
// +'0'            // 0
// +'1'            // 1
// +'string'       // NaN
// 불리언 타입
// +true           // 1
// +false          // 0
// null 타입
//+null           // 0
// undefined 타입
// +undefined      // NaN
// 심볼 타입
// +Symbol()       // TypeError: Cannot convert a Symbol value to a number
// 객체 타입
// +{}             // NaN
// +[]             // 0
// +[10, 20]       // NaN
// +(function(){}) // NaN


  
  /* 불리언 타입으로 변환 */

//   if('') console.log(x);


if ('')    console.log('1'); // falsy
if (true)  console.log('2'); // true
if (0)     console.log('3'); // falsy
if ('str') console.log('4'); // true
if (null)  console.log('5'); // falsy

/* false
   undefined
   null
   0
   -0
   NaN
   ''(빈문자열) 
   
   Falsy로 평가된다.*/

if (!false)     console.log(false + ' is falsy value');
if (!undefined) console.log(undefined + ' is falsy value');
if (!null)      console.log(null + ' is falsy value');
if (!0)         console.log(0 + ' is falsy value');
if (!NaN)       console.log(NaN + ' is falsy value');
if (!'')        console.log('' + ' is falsy value');



// 주어진 인자가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
    return !v;
  }
  
  // 주어진 인자가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
  function isTruthy(v) {
    return !!v;
  }
  
  // 모두 true를 반환한다.
  console.log(isFalsy(false));
  console.log(isFalsy(undefined));
  console.log(isFalsy(null));
  console.log(isFalsy(0));
  console.log(isFalsy(NaN));
  console.log(isFalsy(''));
  
  console.log(isTruthy(true));
  // 빈 문자열이 아닌 문자열은 Truthy 값이다.
  console.log(isTruthy('0'));
  console.log(isTruthy({}));    // *
  console.log(isTruthy([]));    // *



  /* ------------------------------------------------------------ */
  /* 명시적 타입 변환 - 원래는 래퍼 객체를 생성하기 위해 사용하는 래퍼 객체 생성자 함수를 new 연산자 없이 호출하는 방법과 자스에서 제공하는 빌트인 메소드를 사용하는 방법, 그리고 앞에서 살펴본 암묵적 타입 변환을 이용하는 방법이 있다. */


  /* 문자열 타입으로 변환 */
  // 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
  // 숫자 타입 => 문자열 타입
  console.log(String(1));        // "1"
  console.log(String(NaN));      // "NaN"
  console.log(String(Infinity)); // "Infinity"
  // 불리언 타입 => 문자열 타입
  console.log(String(true));     // "true"
  console.log(String(false));    // "false"
  
  // 2. Object.prototype.toString 메소드를 사용하는 방법
  // 숫자 타입 => 문자열 타입
  console.log((1).toString());        // "1"
  console.log((NaN).toString());      // "NaN"
  console.log((Infinity).toString()); // "Infinity"
  // 불리언 타입 => 문자열 타입
  console.log((true).toString());     // "true"
  console.log((false).toString());    // "false"
  
  // 3. 문자열 연결 연산자를 이용하는 방법
  // 숫자 타입 => 문자열 타입
  console.log(1 + '');        // "1"
  console.log(NaN + '');      // "NaN"
  console.log(Infinity + ''); // "Infinity"
  // 불리언 타입 => 문자열 타입
  console.log(true + '');     // "true"
  console.log(false + '');    // "false"


  /* 숫자 타입으로 변환 */
  // 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
console.log(Number('0'));     // 0
console.log(Number('-1'));    // -1
console.log(Number('10.53')); // 10.53
// 불리언 타입 => 숫자 타입
console.log(Number(true));    // 1
console.log(Number(false));   // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
console.log(parseInt('0'));       // 0
console.log(parseInt('-1'));      // -1
console.log(parseFloat('10.53')); // 10.53

// 3. + 단항 연결 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log(+'0');     // 0
console.log(+'-1');    // -1
console.log(+'10.53'); // 10.53
// 불리언 타입 => 숫자 타입
console.log(+true);    // 1
console.log(+false);   // 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log('0' * 1);     // 0
console.log('-1' * 1);    // -1
console.log('10.53' * 1); // 10.53
// 불리언 타입 => 숫자 타입
console.log(true * 1);    // 1
console.log(false * 1);   // 0


/* 불리언 타입으로 변환 */
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
console.log(Boolean('x'));       // true
console.log(Boolean(''));        // false
console.log(Boolean('false'));   // true
// 숫자 타입 => 불리언 타입
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(NaN));       // false
console.log(Boolean(Infinity));  // true
// null 타입 => 불리언 타입
console.log(Boolean(null));      // false
// undefined 타입 => 불리언 타 입
console.log(Boolean(undefined)); // false
// 객체 타입 => 불리언 타입
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 => 불리언 타입
console.log(!!'x');       // true
console.log(!!'');        // false
console.log(!!'false');   // true
// 숫자 타입 => 불리언 타입
console.log(!!0);         // false
console.log(!!1);         // true
console.log(!!NaN);       // false
console.log(!!Infinity);  // true
// null 타입 => 불리언 타입
console.log(!!null);      // false
// undefined 타입 => 불리언 타입
console.log(!!undefined); // false
// 객체 타입 => 불리언 타입
console.log(!!{});        // true
console.log(!![]);        // true

/* 함수를 호출할 때 인수를 전달하지 않으면 매개변수는 undefined를 갖는다. 이때 단축 평가를 사용하여 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다. */