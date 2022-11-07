---
layout: post
title: 'kubernetes words'
date: 2019-08-20
excerpt: 'kubernetes 단어집'
tags: [MSA, K8s, pod, service, operation, kubernetes, cluster]
comments: true
---

# Kubernetes 단어집

## kubeadm

## kubelet

- kubelet은 클러스터내의 모든 모드에서 실행되는 Agent
- Node내의 컨테이너들이 실행되는걸 직접적으로 관리하는 역할

## kube-apiserver

- `kubectl` 의 명령어를 받아 주는 API server
- `kube-apiserver`는 쿠버네티스 클러스터의 api를 사용할수 있게 해주는 프로세스

## ETCD

- key-value 저장소
- kubernetes 의 모든 데이터를 이곳에 저장한다.
- `필수요소`.

## kube-proxy

- 쿠버네티스는 클러스터 내부에 별도의 가상 네트워크를 설정하고 관리
- `kube-proxy`는 이런 가상 네트워크가 동작할 수 있게 하는 실질적인 역할을 하는 프로세스
- 호스트의 네트워크 규칙을 관리하거나 커넥션 포워딩을 하기도 함
- kubelet은 PodSpecs라는 설정을 받아서 그 조건에 맞게 컨테이너를 실행하고 컨테이너가 정상정으로 실행되고 있는지 상태 체크 기능포함

## kube-dns

- 서비스들에 DNS 레코드를 제공하는 역할
- 쿠버네티스 내부에서 실행된 컨테이너들은 자동으로 DNS서버에 등록됩니다. dns 서비스로는 kube-dns와 core-dns가 있음.

## Network addon

- 클러스터 내부에 가상네트워크를 구성해서 사용하는데, 이때 kuby-proxy이외에 네트워킹 관련한 애드온을 사용
- ACI, Calico, Canal, Cilium, CNI-Genie, Contiv, Falannel, Multus, NSX-T, Nuage, Romana, Weave Net등이 있고, OCI의 CNI(Container Network, Interface) 를 구현하고 있다면 다른 애드온들도 사용할 수 있음

### kube-fannel

- kubernates CNI(Controll Network Interface)중 하나
- 다른 Interface로 변경이 가능하다

## kube-scheduler

- 특정 `pod`을 어디에 배치 할지 선택해주는 역할
- 리소스를 확인 하여, `kube-scheduler`가 그 조건에 맞는 Node를 찾아주는 역할을 함.

## Namespace

- 네임스페이스는 한 쿠버네티스 클러스터내의 논리적인 분리단위.

## kube-controller-manager

- 각각의 `Controller`들이 POD들을 관리하는 역할 `kube-controller-manager`는 이런 각각의 컨트롤러들을 실행하는 역할
- 각 `Controller` 논 구조체 형식으로 클러스터 내에서 새로운 `Controller`가 필요할때마다 만들어지며, 그걸 `kube-controller-manager`가 관리 하는 큐에 넣어서 실행 하는 방식으로 작동하도록 설계 되어있다.

### Replication Controller

- `Pod를 관리해주는 역할`
- Replica의 수, Pod Selector, Pod Template 3가지로 구성
  - Selector : Label을 기반으로 하여, `Replication Controller`가 관리한 Pod를 가지고 오는데 사용한다.
  - Replica 수 : `Replication Controller`에 의해서 관리되는 Pod의 수. 지정된 pod수를 유지 할 수 있도록 해줌
  - Pod template: pod에 대한 정보 (도커 이미지, 포트,라벨등)에 대한 정보를 기입하는 곳을 `template`이라 표현.

### ReplicaSet

- ReplicaSet은 Replication Controller 의 새버전으로 생각하면 된다.큰 차이는 없고 Replication Controller 는 Equality 기반 Selector를 이용하는데 반해, Replica Set은 Set 기반의 Selector를 이용

### Deployment

- 쿠버네티스에서 일반적인 상태가 없는(stateless)앱을 배포할때 사용하는 가장 기본적인 컨트롤러

### DaemonSet

- DaemonSet (이하 DS) 은 Pod가 각각의 노드에서 하나씩만 돌게 하는 형태로 Pod를 관리하는 컨트롤러이다.
- 각 노드에 하나의 pod을 띄울수 있도록 하는 것이다. ex) 노드 모니터링용 툴

### Job

- 워크로드 모델중에서 배치나 한번 실행되고 끝나는 형태의 작업이 있을 수 있다.
- ex) 한번 실행 하거나, 또는 주기적으로 작업을 하는 경우에는 작업을 할때만 Pod을 한번 띄워 실행 하는 형태를 이야기 한다.
- 이러한 형태의 워크로드 모델을 지원하는 컨트롤러를 Job이라고 한다.

### StatefulSet

- 단어의 의미 그대로 상태를 가지고 있는 포드들을 관리하는 컨트롤러
- 스테이트풀셋을 사용하면 볼륨을 사용해서 특정 데이터를 기록해두고 그걸 포드가 재시작했을때도 유지

## Ingress

- Kubernetes에서 HTTP(S)기반의 L7 로드밸런싱 기능을 제공하는 컴포넌트
- 여러 구현체가 존재(search about google)
- 클러스터 외부에서 내부로 접근하는 요청들을 어떻게 처리할지 정의해둔 규칙들의 모음.
- 외부에서 접근가능한 URL을 사용할 수 있게 하고, 트래픽 로드밸런싱, SSL 인증서 처리, 도메인 기반으로 가상 호스팅을 제공

## Check Status

- pod의 헬스체크를 확인하기 위해서 2가지 상태체크 옵션이 존재
- `livenessProbe`와 `readinessProbe`
  - `livenessProbe`는 컨테이너가 살아 있는지 확인하는 역할을 하고 이 헬스체크가 실패하면 kubelet이 컨테이너를 죽이게 됩니다. 컨테이너의 restart policy에 따라 컨테이너가 재시작됩니다.
  - 무중단 배포에서 신경써서 봐야할 설정은 `readinessProbe`이다. `readinessProbe`는 실제로 컨테이너가 서비스 요청을 처리할 준비가 되었는지를 확인하는데 사용
