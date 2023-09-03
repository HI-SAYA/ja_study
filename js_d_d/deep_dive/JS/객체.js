/* 객체 - 키, 값으로 구성된 프로퍼티
함수 = 일급 객체이므로 값으로 취급할 수 있다.
따라서 프로퍼티 값으로 함수를 사용할 수도 있으며 프로퍼티 값이 함수 일 경우,
일반 함수와 구분하기 위해 메소드라 부른다.
데이터를 의미하는 프로퍼티 +
데이터를 참조하고 조작할 수 있는 동작을 의미하는 메소드로 구성된 집합 = 객체
데이터와 동작을 하나의 단위로 구조화 할 수 이어 유용
자스의 객체는 객체지향의 상속을 구현하기 위해 프로토타입이라고 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있다. 이 프로토타입은 타 언어와 구별되는 중요한 개념이다. */

/* 프로퍼티 1. 키 2. 값
프로퍼티는 키로 유일하게 식별 가능. 키는 식별자이다.
프로퍼티 키의 명명 규칙과 프로퍼티 값으로 사용할 수 있는 값은 아래와 같다. 

프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 symbol 값
프로퍼티 값 : 모든 값

1. 프로퍼티 키에 문자열이나 symbol 값 이외의 값을 지정하면 암묵적으로 타입이 변환되어 문자열이 된다.
2. 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 덮어쓴다.
3. 배열과는 달리 객체는 프로퍼티를 열거할 때 순서를 보장하지 않는다. */

/* 메소드 - 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라고 부른다. 즉, 메소드는 객체에 제한되어 있는 함수를 의미 */


/* 자스는 프로토타입 기반 객체 지향 언니로서 클래스라는 개념 x, 별도의 객체 생성 방법 존재 
=> ECMA6에서 새롭게 클래스 도입 */



/* 1. 객체 리터럴
가장 일반적인 객체 생성 방식 중괄호 {} 사용하여 객체 생성
{} 내에 1개 이상의 프로퍼티를 기술하면 해당 프로퍼티가 추가된 객체를 생성할 수 있다. {} 내에 아무것도 기술하지 않으면 빈 객체가 생성된다. */

var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function() {
        console.log('Hi! My name is ' + this.name);
    }
};

console.log(typeof person); // object
console.log(person);

person.sayHello();


/* 2. Object 생성자 함수 
new 연산자와 Object 생성자 함수를 호출하여 빈 객체 생성 -> 이후 프로퍼티 또는 메소드 추가하여 객체 완성

생성자 함수 (constructor) 란 new 키워드와 함께 객체를 생성하고 초기화하는 함수를 말한다. 생성자 함수를 통해 생성된 객체를 인스턴스 라고 한다.
자스는 object 생성자 함수 외에도 String, Number, Boolean, Array, Date, RegExp 등의 빌트인 생성자 함수를 제공.
일반 함수 / 생성자 함수 구분 -> 생성자 함수 이름을 파스칼 케이스 사용

객체가 소유하고 있지 않은 프로퍼티 키에 값을 할당하면 해당 객체가 프로퍼티를 추가하고 값을 할당한다.
이미 존재하는 프로퍼티 키에 새로운 값을 할당하면 프로퍼티 값은 할당한 값으로 변경된다. */

var person = new Object();

person.name = 'Lee';
person.gender = 'male';
person.sayHello = function() {
    console.log('Hi My name is ' + this.name);
};

console.log(typeof person);
console.log(person);

person.sayHello();

/* 객체 리터럴 방식 객체 = 빌트인 함수인 Object 생성자 함수로 객체를 생성하는 것을 단순화시킨 축약 표현 */

// ********** 개발자가 일부러 Object 생성자 함수를 사용해 객체를 생성해야 할 일은 거의 없다.


/* 3. 생성자 함수 */
// 리터럴 방식
var person1 = {
    name : 'Lee',
    gender: 'male',
    sayHello: function() {
        console.log('Hi! My name is ' + this. name);
    }
};

var person2 = {
    name: 'Kim',
    gender: 'female',
    sayHello: function() {
        console.log('Hi! My name is ' + this.name);
    }
};


// => 생성자 함수 사용 
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function() {
        console.log('Hi! My name is ' + this.name);
    };
}

// 인스턴스의 생성

// 1. 인스턴스 만들고
var person1 = new Person('Son', 'male');
var person2 = new Person('Park', 'female');
var person3 = new Person('Kim', 'male');

console.log('person1: ', typeof person1);
console.log('person2: ', typeof person2);
console.log('person3: ', typeof person3);

// 2. console.log로 호출
console.log('person1: ', person1);
console.log('person2: ', person2);
console.log('person3: ', person3);

// 3. 생성자 함수 Person 내부에 sayHello() 호출
person1.sayHello();



/* 생성자 함수 이름은 일반적으로 대문자로 시작
프로퍼티 또는 메소드명 앞에 기술한 this는 생성자 함수가 생성할 인스턴스를 가리킴
this에 바인딩되어있는 프로퍼티와 메소드는 public(외부 참조 가능)
생성자 함수 내에서 선언된 일반 변수는 private(외부 참조 불가능)
즉, 생성자 함수 내부에서는 자유롭게 접근 o, 외부 접근 x */
function Person(name, gender) {
    var married = true;         // private
    this.name = name;           // public
    this.gender = gender;       // public
    this.sayHello = function(){ // public
      console.log('Hi! My name is ' + this.name);
    };
  }
  
  var person = new Person('Lee', 'male');
  
  console.log(typeof person); // object
  console.log(person); // Person { name: 'Lee', gender: 'male', sayHello: [Function] }
  
  console.log(person.gender);  // 'male'
  console.log(person.married); // undefined 지역변수



  /* 프로퍼티 키 */
  var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
    1: 10,
    function: 1 // OK. 하지만 예약어는 사용하지 말아야 한다.
  };
  
  console.log(person);




//   var person = {
//     first-name: 'Ung-mo', // SyntaxError: Unexpected token -
//   };


  // ->


  // var person = {
  //  [first-name]: 'Ung-mo', // ReferenceError: first is not defined
  // };


  /* 프로퍼티 값 - 에 접근하는 방법 마침표 . 표기법 / 대괄호 [] 표기법 */
  var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
    1: 10
  };
  
  console.log(person);
  
  // console.log(person.first-name);    // NaN: undefined-undefined
  // console.log(person[first-name]);   // ReferenceError: first is not defined
  console.log(person['first-name']); // 'Ung-mo'
  
  console.log(person.gender);    // 'male'
  // console.log(person[gender]);   // ReferenceError: gender is not defined
  console.log(person['gender']); // 'male'
  
  console.log(person['1']); // 10
  console.log(person[1]);   // 10 : person[1] -> person['1']
  // console.log(person.1);    // SyntaxError


  var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
  };
  
  console.log(person.age); // undefined 객체에 존재하지 않는 프로퍼티


  /* 프로퍼티 값 갱신 - 객체가 소유하고 있는 프로퍼티에 새로운 값을 할당, 프로퍼티 값 갱신*/
  var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
  };
  
  person['first-name'] = 'Kim';
  console.log(person['first-name'] ); // 'Kim'


  /* 프로퍼티 동적 생성 - 객체가 소유하고 있지 않은 프로퍼티 키에 값을 할당하면 주어진 키와 값으로 프로퍼티를 생성하여 객체에 추가 */
  var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
  };
  
  person.age = 20;
  console.log(person.age); // 20


  /* 프로퍼티 삭제 - delete 연산자 사용, 객체의 프로퍼티 삭제.
  이때 피연산자는 프로퍼티 키여야 한다.*/
  var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
  };
  
  delete person.gender;
  console.log(person.gender); // undefined
  
  delete person;
  console.log(person); // Object {first-name: 'Ung-mo', last-name: 'Lee'}
  // 피연산자가 프로퍼티 키가 아니라 함수 객체이기 때문에 삭제되지 않는다.

  console.log('===============================');

  /* for-in 문 - 객체(배열 포함)에 포함된 모든 프로퍼티에 대해 루프 수행 */
  var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male'
  };
  
  // prop에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않는다.
  for (var prop in person) {
    console.log(prop + ': ' + person[prop]);
  }
  
  /*
  first-name: Ung-mo
  last-name: Lee
  gender: male
  */
  
  var array = ['one', 'two'];
  
  // index에 배열의 경우 인덱스가 반환된다
  for (var index in array) {
    console.log(index + ': ' + array[index]);
  }
  
  /*
  0: one
  1: two
  */

  // 배열 요소들만을 순회하지 않는다.
var array = ['one', 'two'];
array.name = 'my array';

for (var index in array) {
  console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
name: my array
*/


/* for-of문 (for-in문 단점 극복) 배열만 순회, 순서 보장 */
const array = [1, 2, 3];
array.name = 'my array';

for (const value of array) {
  console.log(value);
}

/*
1
2
3
*/

for (const [index, value] of array.entries()) {
  console.log(index, value);
}

/*
0 1
1 2
2 3
*/


/* for-in 객체의 프로퍼티 순회용
   for-of 배열의 요소 순회용 */



/* Pass-by-reference 
object type을 객체 타입 또는 참조 타입이라 한다.
참조 타입이란? 객체의 모든 연산이 실제값이 아닌 참조값으로 처리됨을 의미
원시 타입은 불변성! but, 객체는 프로퍼티를 변경, 추가, 삭제 가능 -> 변경 가능한 값

따라서 객체 타입은 동적으로 변화 o -> 어느 정도의 메모리 공간 확보해야하는지 미지수 -> 런타임에 메모리 공간 확보, 메모리의 힙heap 영역에 저장

반면 원시 타입은 값(value)로 전달. 즉 복사->전달 체계. 이를 pass-by-value라고 한다.*/
// Pass-by-reference
var foo = {
    val: 10
  }
  
  var bar = foo;
  console.log(foo.val, bar.val); // 10 10
  console.log(foo === bar);      // true
  
  bar.val = 20;
  console.log(foo.val, bar.val); // 20 20
  console.log(foo === bar);      // true

  // 복사되어 전달 되었으므로 값이 같다.



  /* Pass-by-value 
  원시 타입은 값(value)으로 전달된다. 즉, 값이 복사되어 전달된다. 이를 pass-by-value(값에 의한 전달)라 한다. 원시 타입은 값이 한번 정해지면 변경할 수 없다.(immutable) 또한 이들 값은 런타임(변수 할당 시점)에 메모리의 스택 영역(Stack Segment)에 고정된 메모리 영역을 점유하고 저장된다.*/

var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b);    // 1  10
console.log(a === b); // false