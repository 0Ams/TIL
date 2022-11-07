---
title: 'gRPC with nodejs'
date: 2020-02-08
excerpt: 'gRPC with nodejs'
writer: 10ms
tags: [nodejs, gRPC, typescript]
comments: true
---

# nodejs에서 사용하는 gRPC 관련 모듈

nodejs에서 gRPC 사용시 함께 사용하면 좋은 모듈 모음. 각 사용은 github 참고
![View](https://miro.medium.com/max/1400/1*p_QcseGcBr2uScOsRxlEag.png)

[protoc](https://github.com/protocolbuffers/protobuf)

- protobuf 형식으로 데이터를 빌드하고 구문 분석하는 코드를 생성

[protobuf](https://github.com/protobufjs/protobuf.js)

[grpc](https://www.npmjs.com/package/grpc) (npm package)

- 네이티브 grpc에 대한 JavaScript 바인딩을 제공하는 라이브러리.
- Node-gyp를 사용하여 Node.js API에 네이티브 런타임 라이브러리를 통합.
- Node.js gRPC 서버에서 유일하게 널리 사용되는 런타임입니다.
- grpc package에서도 grpc/node-js package 사용하라고 명시해둠.

[@grpc/node-js](https://www.npmjs.com/package/@grpc/grpc-js)

- C++ 추가 기능 없이 순수하게 자바스크립트에서 gRPC의 핵심 기능을 구현

[grpc-tool](https://github.com/grpc/grpc-node/tree/master/packages/grpc-tools)

- Nodejs gRPC 라이브러리와 함께 사용할 클라이언트 및 서비스 객체를 생성하기위한 플러그인과 함께 프로토콜 버퍼 컴파일러 protoc 제공.

[@grpc/proto-loader](https://www.npmjs.com/package/@grpc/proto-loader)

- .proto 파일의 gRPC 구조에 대한 구체적인 코드 생성을 제공하는 protobuf에 대한 래퍼.
- Dynamic 코드 생성에만 적용되며 Static 코드 생성에는 X.

# gRPC 사용 두 가지 방법 with nodejs

## Static generation

grpc-tools를 및 protoc를 사용하고, 런타임에 grpc를 사용

## Dynamic generation

@grpc/proto-loader 및 protobufjs를 사용하고 런타임에 grpc를 사용

# 각 단점

## Static Gen

- 패키지를 처리할 수 없음
- 수동 쓰기, 의도하지 않은 마샬링 코드 필요
- 개발 스크립트를 복잡.
- 잘못 이해한 경우 런타임에 실패할 수 있음

## Dynamic Gen

- 스키마를 애플리케이션과 함께 배포하고, 최신 상태로 유지 또는 스키마 레지스트리와 통합해야함.
- 소스 생성 없이 참조할 수 있는 초기 bootstraping이 까다롭다

# 사용 Example

별도로 적어두지 않음

- @grpc/grpc-loader 사용(example grpc-loader with nodejs) 또는 protoc(grpc-tool example with nodejs) 사용해서 sourcefile 뽑아내는 형태로 구분해서 검색시 많이 나온다

# 참고

- [The Weird World of gRPC Tooling for Node.js, Part 1](https://medium.com/expedia-group-tech/the-weird-world-of-grpc-tooling-for-node-js-part-1-40a442966876)

<!-- <body oncontextmenu="return false" onselectstart="return false" ondragstart="return false" onkeydown="return false"> -->
