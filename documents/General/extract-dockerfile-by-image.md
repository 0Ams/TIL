---
title: 'Extract Dockerfile By DockerImage'
date: 2022-06-06 00:00:00
category: 'general'
writer: '10ms'
draft: false
---

# Extract Dockerfile By DockerImage
> * 때때로 이미지는 있으나, Dockerfile이 없어서 어떤 동작을 하는지 어떤 Base 로 제작되었는지를 모를때 사용하면 좋을 방법을 소개.
> * 여러 가지 방법이 있었는데 해당 방법이 제일 좋았던 느낌.

# Setting
.bashrc와 같은 곳에 등록 해서 사용.
```sh
function dfimage () {
    target=$1
    id=$(docker images -q $target)
    echo "$id, $1"
    docker run -v /var/run/docker.sock:/var/run/docker.sock --rm laniksj/dfimage $id
}
```

# 사용
```
  dfimage image이름
```

# Summary: How Does It Work?
```sh
$ docker images --tree
Warning: '--tree' is deprecated, it will be removed soon. See usage.
└─511136ea3c5a Virtual Size: 0 B Tags: scratch:latest
  └─1e8abad02296 Virtual Size: 121.8 MB
    └─f106b5d7508a Virtual Size: 121.8 MB
      └─0ae4b97648db Virtual Size: 690.2 MB
        └─a2df34bb17f4 Virtual Size: 808.3 MB Tags: buildpack-deps:latest
          └─86258af941f7 Virtual Size: 808.6 MB
            └─1dc22fbdefef Virtual Size: 846.7 MB
              └─00227c86ea87 Virtual Size: 863.7 MB
                └─564e6df9f1e2 Virtual Size: 1.009 GB
                ...

$ docker inspect 011aa33ba92b
[{
  . . .
  "ContainerConfig": {
    "Cmd": [
        "/bin/sh",
        "-c",
        "#(nop) ONBUILD RUN [ ! -e Gemfile ] || bundle install --system"
    ],
    . . .
}]
```
`docker image --tree`와 docker inspect를 이용 하여 각 레이어를 확인하여  사용자가 보기 편한 상태의 Dockerfile을 만들어 주도록 `lanikSJ/dfimage`통해 제공 해주고 있습니다.

# 유의사항
* 실제 Dockerfile을 꺼내는 것이 아닌, tree를 통한 유추되는 형태로 만들어 지는 것이므로 완벽한 `Dockerfile`은 아닙니다.
* COPY의 경우 COPY되는 파일명을 정확히 모를 수 있습니다.

> ps. 자세한 설명은 아래 `참고 사이트`에 잘 설명 되어있습니다.

# 참고사이트
* [LanikSJ/dfimage](https://github.com/LanikSJ/dfimage)