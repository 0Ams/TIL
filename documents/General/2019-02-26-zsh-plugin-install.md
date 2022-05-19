---
layout: post
title: "zsh plguin 설치 및 적용 방법 설명"
date: 2019-02-26
excerpt: "zsh plugin 설치 및 적용 방법을 간략하게만 설명"
writer: 10ms
tags: [terminal, zsh, plugins]
comments: false
---

# zsh plugin 설치

1 # Add your own custom plugins in the custom/plugins directory. Plugins placed
2 # here will override ones with the same name in the main plugins directory.

# example

```
$ cd ${ZSH_CUSTOM1:-$ZSH/custom}/plugins            # 플러그인 폴더로 이동
$ git clone https://github.com/djui/alias-tips.git  # 저장소를 로컬disk로 복사
$ source zshrc.sh                                   # 플러그인 마다의 설치 필요 요소 수행 zsh-gitprompt의 경우, `source zshrc.sh`
$ vi ~/.zshrc                                       # 에디터로 파일을 에디터로 해당 플러그인 추가
```
