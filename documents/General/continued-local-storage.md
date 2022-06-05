---
layout: post
title: 'continuation-local-storage(CLS) Information'
date: 2022-06-04 16:22:13
writer: 10ms
tags: [nodejs, lib]
comments: false
category: 'general'
draft: false
---

# [continuation-local-storage](https://www.npmjs.com/package/continuation-local-storage)
> - `Continuous-Local-Storage`는 스레드 프로그래밍에서 thread-local-storage 처럼 작동하지만, 스레드 대신 노드 스타일의 `콜백 체인`을 기반으로 동작됨. 
> (Continuation-local storage works like thread-local-storage in threaded programming, but is based on chains of Node-style callbacks instead of threads.)
> - Java의 TLS(thread-local-storage)와 같은 기능과 유사하다.
> - Context 객체를 일련의 체인에 연결하여 나중에 접근할 수 있게 하는 기능.
* CLS는 Node.js >= 8.2.1부터는 node 내장 API인 async_hooks를 사용.

# Sample
```typescript
var createNamespace = require('continuation-local-storage').createNamespace;
 
var writer = createNamespace('writer');
writer.run(function () {
  writer.set('value', 0);
 
  requestHandler();
});
 
function requestHandler() {
  writer.run(function(outer) {
    // writer.get('value') returns 0
    // outer.value is 0
    writer.set('value', 1);
    // writer.get('value') returns 1
    // outer.value is 1
    process.nextTick(function() {
      // writer.get('value') returns 1
      // outer.value is 1
      writer.run(function(inner) {
        // writer.get('value') returns 1
        // outer.value is 1
        // inner.value is 1
        writer.set('value', 2);
        // writer.get('value') returns 2
        // outer.value is 1
        // inner.value is 2
      });
    });
  });
 
  setTimeout(function() {
    // runs with the default context, because nested contexts have ended
    console.log(writer.get('value')); // prints 0
  }, 1000);
}
```

> [!NOTE]
> 
> [continuation-local-storage](https://www.npmjs.com/package/continuation-local-storage)가 탄생되고 사용되는 시점에는 Nodejs에서 이런 기능이 없었지만 세상이 변하며, 비동기 리소스 추적을 위한 기능을 만들기 시작한 것으로 보인다.

# Nodejs의 `async_hooks`
[`async_hooks`](https://nodejs.org/api/async_hooks.html#async_hooks_overview) 모듈은 비동기 리소스를 추적하는 API를 제공.(Nodejs version >= 8.2.1)
async_hooks을 사용해서 만든 [cls-hooks](https://github.com/Jeff-Lewis/cls-hooked)도 생겨났다.

이것은 `async-listener` 대신 `asyncWrap` OR `async_hooks`를 사용하는 CLS 버전으로 생각하면 된다.

> - [cls-hook](https://github1s.com/Jeff-Lewis/cls-hooked/blob/HEAD/context.js) vs [continue-local-storage](https://github1s.com/othiym23/node-continuation-local-storage/blob/HEAD/context.js)

# async_hooks의 `AsyncLocalStorage`
Nodejs 자체에서도 CLS역할을 하는 Class를 만들어 제공 하기 시작함. [`AsyncLocalStorage`](https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage)
`Added in: v13.10.0, v12.17.0` 되어서 이후 버전에서만 사용 할 수 있다.

> 최신 버전의 Nodejs를 사용 한다면 이제는 `AsyncLocalStorage`를 사용하자.

# 참고
* [Request Id Tracing in Node.js Applications](https://itnext.io/request-id-tracing-in-node-js-applications-c517c7dab62d)