/* 의도하지 않은 객체의 변경이 발생하는 원인 대다수 - 레퍼런스 참조한 다른 객체에서 객체를 변경

=> 객체를 불변객체로 만들어 프로퍼티의 변경을 방지.
=> 객체의 변경이 필요한 경우에는 참조가 아닌 객체의 방어적 복사를 통해 새 객체 생성한 후 변경 */

// 객체의 방어적 복사 defensive copy
// 불변객체화를 통한 객체 변경 방지
Object.freeze


/* Object.assign
=> 타겟 객체로 소스 객체의 프로퍼티를 복사.
이때 소스 객체의 프로퍼티와 동일한 프로퍼티를 가진 타켓 객체의 프로퍼티들은 소스 객체의 프로퍼티로 덮어쓰기 된다.
=> 리턴값으로 타깃 객체를 첫번째 인수로 반환한다.
=> ES6에서 추가된 메소드 EX 지원 X 


Object.assign(target, source1, source2, ...
*/

// Syntax
// Object.assign(target, ...sources)

// Copy
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
console.log(obj == copy); // false
// 복사하였으나 참조가 아닌 객체의 방어적 복사를 통해 새로운 객체 생성 후 변경 ->  false로 반환

// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1); // { a: 1, b: 2, c: 3 }
console.log(o1);     // { a: 1, b: 2, c: 3 }, 
// 타겟 객체가 변경된다! 첫번째 인수라서!
// 깊은 복사 x

// Merge
const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // { a: 1, b: 2, c: 3 }
console.log(o4);     // { a: 1 }


console.log('=============================================');

const user1 = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };
  
  // 새로운 빈 객체에 user1을 copy한다.
  const user2 = Object.assign({}, user1);
  // user1과 user2는 참조값이 다르다.
  console.log(user1 === user2); // false
  
  user2.name = 'Kim';
  console.log(user1.name); // Lee
  console.log(user2.name); // Kim
  
  // 객체 내부의 객체(Nested Object)는 Shallow copy된다.
  console.log(user1.address === user2.address); // true
  
  user1.address.city = 'Busan';
  console.log(user1.address.city); // Busan
  console.log(user2.address.city); // Busan


  
console.log('=============================================');


/* Object.freeze - 불변 객체 만들기 */
const user1 = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };
  
  // Object.assign은 완전한 deep copy를 지원하지 않는다.
  const user2 = Object.assign({}, user1, {name: 'Kim'});
  
  console.log(user1.name); // Lee
  console.log(user2.name); // Kim
  
  Object.freeze(user1);
  
  user1.name = 'Kim'; // 무시된다!
  
  console.log(user1); // { name: 'Lee', address: { city: 'Seoul' } }
  
  console.log(Object.isFrozen(user1)); // true

  // isFrozen으로 Object.freeze 여부 확인


// -------- 하지만 객체 내부의 객체Nested Object 는 변경 가능하다.
const user = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };
  
  Object.freeze(user);
  
  user.address.city = 'Busan'; // 변경된다!
  console.log(user); // { name: 'Lee', address: { city: 'Busan' } }


// -------- 내부 객체까지 변경 불가능하게 만들려면 Deepp freeze 해야 한다.
function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj);
  
    props.forEach((name) => {
      const prop = obj[name];
      if(typeof prop === 'object' && prop !== null) {
        deepFreeze(prop);
      }
    });
    return Object.freeze(obj);
  }
  
  const user = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };
  
  deepFreeze(user);
  
  user.name = 'Kim';           // 무시된다
  user.address.city = 'Busan'; // 무시된다 - 객체 내부의 객체
  
  console.log(user); // { name: 'Lee', address: { city: 'Seoul' } }


  
  /* Immutable.js
  Object.assign과 Object.freeze을 사용하여 불변 객체 만드는 방법, 번거롭고 성능상 이슈 -> 큰 객체는 사용 x
   */

 // $ npm install immutable

 