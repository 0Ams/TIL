---
layout: post
title: "arrow function 이란?"
date: 2019-03-04
excerpt: "arrow function과 일반 function에 대해서"
tags: [arrowfunction, es6, javascript]
writer: 10ms
comments: false
---

# Arrow Function

`arrow function`은 es6에서 정의한 나온 문법이다. `arrow function`는 function 을 이용해서 함수를 정의하는 것보다 더 간편하고 간략하게 표현할 수 있도록 해준다.

# Arrow Function 문법

아래와 같은 형태로 사용이 가능하다

```javascript
() => {
    /*함수 정의*/
}; // argument가 없을 경우
(a) => {
    /*함수 정의*/
}; // argument가 한개일 경우
(a, b) => {
    /*함수 정의*/
}; // argument가 2개일 경우
```

```javascript
(a) => {
    return a;
}; // 함수가 한 구문이 아닐 경우 {} 사용하여 함수 정의
(a) => a; // 함수가 한 구문일 경우, 자동 return 위와 같은 기능
(a) => ({ key: a }); // 예외로 객체를 자동 return 하려면 ()가 필요
```

```javascript
(key = defaultValue) => {
    return key;
};
```

# Arrow function 과 기존 function 차이점

1. Naming
   `일반 function`함수는 다음과 같이 이름을 지정하여 정의할 수 있었다.

```javascript
function functionName() {}
```

하지만 `arrow function`는 `일반 function 함수`와 같이 이름을 정의 하여 사용할 수 없다.
만약 함수 명을 정의하여 사용하고 싶다면, 다음과 같이 변수에 담아서 사용 해야 한다.

그러므로 `arrow function`는 함수 자체 [호이스트](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)가 불가능 하다.

```javascript
const functionName = () => {};
```

2. Arguments
   `일반 function`함수는 arguments를 사용하여 받아 오는 인자들을 배열로 다음과 같이 사용할 수 있었다.

```javascript
function testFunction() {
    console.log(arguments); // [1,2,3]
}
testFunction(1, 2, 3);
```

하지만 `arrow function`에는 다음과 같은 오류를 범한다

```javascript
const testFunction = () => {
    console.log(arguments); //arguments is not defined
};
testFunction(1, 2, 3);
```

그래서 es6문법에는 arguments를 대신 하기 위해 `rest parameter`라는 구문을 새롭게 도입 했다.
`arrow function`에서는 아래와 같이 `reset parameter` 구문을 사용하여 정의 해주면 된다.

```javascript
const testFunction = (...arg) => {
    console.log(arg);
}; // [1,2,3]
testFunction(1, 2, 3);
```

3. this
   function 키워드로 생성한 `일반 함수`와 `arrow function`의 가장 큰 차이점은 `this`이다.
   `arrow function`은 자신을 포함하는 외부 scope에서 `this`를 계승 받는다.
   즉, `arrow function`은 자신만의 `this`를 생성하지 않는다. (Lexical this)

객체로 만들어서 `console.log`를 통해서 확인 보자

```javascript
const obj = {
    arrowFunction: () => {
        console.log(this);
    }, // Window
    normalFunction: function () {
        console.log(this);
    }, // { a: ƒ, b: ƒ }
};
```

`arrow function`으로 정의한 함수는 상위 컨텍스트가 전역 컨텍스트이므로 Window를 나타내고, `일반 함수`으로 정의한 함수는 자신을 정의한 객체를 나타낸다.
`this`가 없을 때는 `new`를 통해 객체 생성이 불가능 하다.

```javascript
new obj.arrowFunction(); // obj.arrowFunction is not arrowFunction constructor
new obj.normalFunction(); // normalFunction { }
```

`prototype`으로 함수를 정의해도 마찬가지다.

```javascript
const obj = { a: 1 };
Object.prototype.normalFunction = function () {
    console.log(this);
};
obj.normalFunction(); // { a: 1 }
```

```javascript
const obj = { a: 1 };
Object.prototype.arrowFunction = () => {
    console.log(this);
};
obj.arrowFunction(); // Window
```

`arrow function`를 사용했을때 전역 컨텍스트 스코프의 this객체인 window를 나타낸다.

`arrow function`는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다. 동적으로 결정되는 일반 함수와는 달리 `arrow function`의 `this`는 언제나 상위 스코프의 `this`를 가리킨다.

# 주의 해야 할 때 arrow function 사용

1. 객체의 메소드를 정의할 때는 사용 하면 안된다.

```javascript
const obj = {
    name: "functionTest",
    test: () => {
        console.log(`test ${this.name}`);
    },
};
obj.test(); // test undefined
```

`arrow function`에서는 위와 같이 객체의 `this`를 바인딩하지 않고, `전역 객체`가 바인딩 된다.

그렇기 때문에 이때는, `일반 함수`를 사용하도록 해야 한다

```javascript
const obj = {
    name: "functionTest",
    test() {
        console.log(`test ${this.name}`);
    },
};
obj.test(); // test functioTest
```

위 처럼 ES6에서 사용하는 객체의 메소드 정의 방법으로 정의하는 것이 옳다.
마찬가지로 `prototype`에 메소드를 할당할 때도 똑같이 `arrow function`을 사용 하면 안 된다.
`일반 함수` function(){ } 을 사용 해야 한다.

2. `arrow function`을 생성자 함수로 사용할 수 는 없다
   생성자 생성자 함수는 prototype 프로퍼티를 갖지만 `arrow function`은 prototype 프로퍼티를 갖지 않는다. `고로 사용할 수 없다`

3. `addEventListener` 이 경우, callback의 `this`가 상위 컨택스트를 가리 킨다. 고로 이전처럼 `일반 함수`function(){}으로 사용하는 것이 바람직하다

```javascript
button.addEventListener("click", () => {
    console.log(this === window); // => true
    console.log(this === button); // => false
});

button.addEventListener("click", function () {
    console.log(this === window); // => false
    console.log(this === button); // => true
});
```
