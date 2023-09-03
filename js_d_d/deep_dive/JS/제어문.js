/* 블록문 - 0개 이상의 문들을 중괄호 {}로 묶은 것
단독으로 사용 가능, but 일반적으로 제어문이나 함수 선언문 등에서 사용한다.
세미콜론(;) 붙이는 것이 일반적, but 블록문은 세미콜론을 붙이지 않는다. */

// 블록문
{
    var foo = 10;
    console.log(foo);
}

// 제어문
var x = 0;
while (x < 10) {
    x++;
}

console.log(x);

// 함수 선언문
function sum(x, y) {
    return x + y;
}

console.log(sum(1, 2));


/* 조건문 - 주어진 조건식의 평가 결과에 따라 코드 블럭의 실행을 결정한다.
조건식은 불리언 값으로 평가될 수 있는 표현식이다. */
/* if..else */

var num = 2;
var kind;

// if 문
if (num > 0) {
    kind = '양수';
}
console.log(kind);

// if...else 문
if (num > 0) {
    kind = '양수';
} else {
    kind = '음수';
}
console.log(kind);

// if..else if 문
if(num > 0) {
    kind = '양수';
} else if(num < 0) {
    kinf = '음수';
} else {
    kind = '영';
}

console.log(kind);

// 코드 블록 내의 문이 하나뿐이라면 중괄호 생략 가능 
var num = 2;
var kind;

if(num > 0)     kind = '양수';
else if(num < 0) kind = '음수';
else    kind = '영';

console.log(kind);


var x = 2;
var result;

if(x%2) {
    result = '홀수';
} else {
    result = '짝수';
}

console.log(result);

var x = 2;

var result = x % 2 ? '홀수' : '짝수';
console.log(result);



var year = 2023;
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
    case 2:
        days =((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalid month');
}

console.log(days);


for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
      if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
  }


  // continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for (var i = 0; i < string.length; i++) {
    // 'l'이면 카운트를 증가시킨다.
    if (string[i] === 'l') {
      count++;
      // code
      // code
      // code
    }
  }
  
  // continue 문을 사용면 if 문 밖에 코드를 작성할 수 있다.
  for (var i = 0; i < string.length; i++) {
    // 'l'이 아니면 카운트를 증가시키지 않는다.
    if (string[i] !== 'l') continue;
  
    count++;
    // code
    // code
    // code
  }
