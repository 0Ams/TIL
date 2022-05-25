---
layout: post
title: "vim에서 여러줄에 주석 설정 및 해제"
date: 2022-05-26
excerpt: ""
writer: 10ms
tags: [vim, linux]
comments: false
---

# vim에서 여러줄에 주석 설정 및 해제

## 여러줄 주석처리 하는 방법
1. v를 눌러 visual 모드로 들어가, 주석처리를 원하는 부분 선택
2. : 키 누르기
3. norm i<<원하는 문자>> 타이핑

```bash
norm i#
norm i//
```

## 여러줄 주석 해제하는 방법
1. v를 눌러 visual 모드로 들어가, 주석 해제를 원하는 부분 선택
2. : 누르기
3. norm 1x 타이핑
```bash
norm 1x : 가장 앞 문자 1개 없애기
norm 2x : 가장 앞 문자 2개 없애기
```