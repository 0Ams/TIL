---
layout: post
title: "URI 와 URL 차이"
date: 2019-02-21
excerpt: "URI와 URL 용어에 대한 설명"
writer: 10ms
tags: [uri, url, docs]
comments: true
---

# URI

: Uniform Resource Identifier
URI의 존재는 인터넷에서 요구되는 기본조건으로서 인터넷 프로토콜에 항상 붙어 다닌다 (http://ko.wikipedia.org/wiki/URI)
통합 자원 식별자(Uniform Resource Identifier, URI)는 인터넷에 있는 자원을 나타내는 유일한 주소

# URL

: Uniform Resource Locator
URL(Uniform Resource Locator, 문화어: 파일식별자, 유일자원지시기)은 네트워크 상에서 자원이 어디 있는지를 알려주기 위한 규약이다.

# 설명

* `URI`는 자원을 식별할 수 있는 문자열.
* `URI`가 가장 큰 개념이고 이것의 하위 개념으로 `URL`이다

예를 들어 http://ko.wikipedia.org/ 라는 주소는 http://ko.wikipedia.org/라는 서버를 나타내기 때문에 `URL`이면서 `URI`이다.

http://0Ams.github.io/home/aboutme 라는 주소는 0Ams.github.io 호스트 주소 하위에 home라는 디렉토리아래 aboutme이라는 위치를 가리키고 있는 것으로 `URL`이면서 `URI`이다.

# `URL`이 아닌 `URI`는 무었이 있을까?

https://0Ams.github.io/query?key=1234&name=0ams 이와같은 주소가 있다고 하면, https프로토콜을 가지고 있고 호스트 이름을 가지고 있다.

하지만 그 뒤에 'query?key=1234&name=0ams'와 같은 query String이 붙은걸 볼 수 있는데, 이것은 query String 인 `key=1234&name=0ams` 에 따라 여러 가지 결과 값을 가져올 수 있다.

위 주소에서 `URL`은 https://0Ams.github.io/query 이다.

원하는 정보를 얻기위해서는 q=uri라는 querystring이 필요하므로, https://0Ams.github.io/query?key=1234&name=0ams 는 주소는 `URI`이지만 `URL`은 아니다.


다시 표현하면,
* https://0Ams.github.io/query => `URL`
* https://0Ams.github.io/query?key=1234&name=0ams => `URI`

이다.

# 참고

[Stackoverflow](https://stackoverflow.com/questions/176264/what-is-the-difference-between-a-uri-a-url-and-a-urn)
<img src="https://i.stack.imgur.com/FbaKm.png">
