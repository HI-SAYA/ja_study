var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
      console.log('Hi! My name is ' + this.name);
    }
  };
  
  console.log(typeof person); // object
  console.log(person); // { name: 'Lee', gender: 'male', sayHello: [Function: sayHello] }
  
  person.sayHello(); // Hi! My name is Lee

