# Today I Learned
[thoughtbot til 참고](https://github.com/thoughtbot/til)

## 로컬에서 띄우기
```bash
$ yarn
$ yarn dev
```

### 빌드 및 배포

Option1. GitHub Actions로 자동화
[main.yaml](https://github.com/0ams/TIL/blob/master/.github/workflows/main.yml) 참고

Option2. 직접 배포
```bash
$ NODE_ENV=production
$ yarn build
$ yarn deploy
```
