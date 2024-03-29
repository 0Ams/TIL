---
title: 'ulimit for socket'
date: 2022-06-06 00:00:00
category: 'theory'
writer: '10ms'
draft: false
---

# ulimit 이란?

- ulimit는 프로세스의 자원 한도를 설정하는 명령, soft한도,hard한도 두가지로 나뉨
  - soft : 새로운 프로그램을 생성하면 기본으로 적용되는 한도
  - hard : 소프트한도에서 최대로 늘릴 수 있는 한도
- 프로세스(서비스)에 연결되는 유저가 많을 수록 증가됨

# ulimit [옵션] 값 ( Centos , RHEL 기준)

-a : 모든 제한 사항을 보여줌.
-c : 최대 코어 파일 사이즈
-d : 프로세스 데이터 세그먼트의 최대 크기
-f : shell에 의해 만들어질 수 있는 파일의 최대 크기
-s : 최대 스택 크기
-p : 파이프 크기
-n : 오픈 파일의 최대수
-u : 오픈파일의 최대수
-v : 최대 가상메모리의 양
-S : soft 한도
-H : hard 한도

- 각 항목의 설명

```sh
$ ulimit -a         // Soft 설정 보기
$ ulimit -aH        // Hard 설정 보기
```

```sh
core file size          (blocks, -c) 0                             : 코어파일의 최대크기
data seg size           (kbytes, -d) unlimited               : 프로세스의 데이터 세그먼트 최대크기
scheduling priority             (-e) 0
file size               (blocks, -f) unlimited                    :쉘에서 생성되는 파일일 최대크기
pending signals                 (-i) 14943
max locked memory       (kbytes, -l) 64
max memory size         (kbytes, -m) unlimited           : resident set size의 최대 크기(메모리 최대크기)
open files                      (-n) 1024                         : 한 프로세스에서 열 수 있는 open file descriptor의 최대 숫자(열수 있는 최대 파일 수)  ,Too many open files error 발생시 해당값 조절해주면됨
pipe size            (512 bytes, -p) 8                         : 512-바이트 블럭의 파이프 크기
POSIX message queues     (bytes, -q) 819200
real-time priority              (-r) 0
stack size              (kbytes, -s) 10240
cpu time               (seconds, -t) unlimited            : 총 누적된 CPU 시간(초)
max user processes              (-u) 1024                 : 단일 유저가 사용가능한 프로세스의 최대 갯수
virtual memory          (kbytes, -v) unlimited            : 쉘에서 사용가능 한 가상 메모리의 최대 용량
file locks                      (-x) unlimited
```

# 설정방법

## 1. ulimit 명령을 통한 변경

- -n –u 를 사용하여 max user process 와 open files 개수를 수정 합니다.

```sh
$ ulimit -n 2048
$ ulimit -u 4096
$ ulimit -a
...중략
open files                      (-n) 2048
max user processes              (-u) 4096
...중략
```

## 2. /etc/security/limits.conf 설정 파일 수정

```sh
$ vi /etc/security/limits.conf
...중략
*           soft    nproc          4096
*           hard    nproc          4096
```

## 참고 user별로 설정 가능

```sh
$ source /etc/profile
```

## 3. 확인

- 재 로그인 or 리부팅할 경우 기본 설정으로 적용됨

```sh
# ulimit -aH
core file size          (blocks, -c) unlimited
data seg size           (kbytes, -d) unlimited
scheduling priority             (-e) 0
file size               (blocks, -f) unlimited
pending signals                 (-i) 14943
max locked memory       (kbytes, -l) 64
max memory size         (kbytes, -m) unlimited
open files                      (-n) 2048
pipe size            (512 bytes, -p) 8
POSIX message queues     (bytes, -q) 819200
real-time priority              (-r) 0
stack size              (kbytes, -s) unlimited
cpu time               (seconds, -t) unlimited
max user processes              (-u) 4096
virtual memory          (kbytes, -v) unlimited
file locks                      (-x) unlimited
```
