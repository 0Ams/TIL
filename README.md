# Today I Learned
[0ams.github.io/TIL](https://0ams.github.io/TIL)

## Required
```
  node >= v16.16.4
```

## 작성 구조
```
  DIR - images
      |
      - Documents 1
      - Documents 2
```
나중에 다른 `Design Theme`으로 변경 가능하도록 해당 포맷을 유지함.

## 로컬에서 띄우기
```bash
$ yarn
$ yarn dev
```

### 빌드 및 배포

1. GitHub Actions로 자동화
[main.yaml](https://github.com/0ams/TIL/blob/master/.github/workflows/main.yml) 참고

2. 직접 배포
```bash
$ NODE_ENV=production
$ yarn build
$ yarn deploy
```

## ETC
* ps. [thoughtbot TIL](https://github.com/thoughtbot/til)
* 별도 blog에서 작성했던 post copy up
