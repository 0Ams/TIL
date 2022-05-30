---
layout: post
title: "mongoose lean에 대한 이야기"
date: 2022-05-31
excerpt: "lean을 어떨때 사용 하는지"
writer: 10ms
tags: [db, nosql, mongo]
comments: false
---

# Mongoose lean 이야기

mongoose를 이용해서 데이터를 조회한 후 해당 데이터를 json 형태로 변환해서 바로 response를 보낼 때에는 별 문제가 없지만, 해당 데이터를 spread opreator로 분해를 하거나 unit 테스트 할 때 종종 원치 않는 데이터가 포함 된 것을 확인할 수 있습니다.

예상 했던 데이터와 실제 데이터에는 차이가 있습니다.

예상 했던 것
```javascript
{
    "name": "0ams",
    "position": "SE",
    "roles": [
      "ADMIN"
    ]
}
```

실제로 담겨 있는 것
```javascript
{
  "$__": {
    "$options": {
      "defaults": true
    },
    "$setCalled": {},

    // ... (중략)

    "backup": {
      "activePaths": {
        "default": {
          "_id": true
        },
        "modify": {
          "name": true,
          "position": true,
          "roles": true
        }
      }
    },
    "cachedRequired": {},

    // ... (중략)

    "getters": {},
    "inserting": true,
    "pathsToScopes": {
      "roles": "000000000000000000000000"
    },
    "session": null,
    "strictMode": true,
    "validating": null,
    "wasPopulated": false
  },
  "$locals": {},
  "$op": null,
  "_doc": {
    "__v": 0,
    "_id": "000000000000000000000000",
    "name": "0ams",
    "position": "SE",
    "roles": [
      "ADMIN"
    ]
  },
  "isNew": false
}
```

# Mongoose Document
그 이유는 mongoose Query를 통해서 조회 된 데이터는 단순한 Plain Old JavaScript Objects(POJO)가 아닌 Moogoose Document형태이기 때문.

Mongoose Document는 아래와 같은 것들을 포함하게 된다.

* Change tracking
* Casting and validation
* Getters and setters
* Virtuals
* save()

이런 식의 추가 정보와 메서드들을 포함하고 있기 때문에 Query 결과 값을 가지고 수정한 후 save() 메서드를 통해서 수정 된 내용을 DB에 반영할 수 도 있는 것이다
```javascript
const findAndUpdateName = async (oldName, newName) => {
  const user = await User.findOne({ name: oldName });
	user.name = newName;
	const savedUser = await user.save();

  return savedUser;
};
```

# Plain Old Javascript Object (POJO)

그런데 만약 mongoose에서 붙여주는 다른 정보나 메서드를 사용하지 않는다면 굳이 Mongoose Document를 사용 할 필요가 없다. 이럴때 사용 하는 것이 바로 `lean()`이다. lean의 경우는 `mongoose 3.0.0`에서 처음 도입된 method로 바로 POJO를 반환 하는 메소드이다.

## `toObejct()`와 비교, 

toObject() 메서드를 이용하는 경우 Query 결과를 Mongoose Document로 만들기 위한 과정을 거쳤다가 다시 POJO로 변환되는 반면, lean() 메서드를 이용할 경우 중간 과정 없이 바로 POJO를 반환하게 된다.

### toObject() 메서드 이용

```javascript
const findByName = async (name) => {
  const user = await User.findOne({ name });
	return user.toObejct();
};
```

### lean() 메서드 이용

```javascript
const findByName = async (name) => {
  const user = await User.findOne({ name }).lean();
	return user;
};
```


## Mongoose Document와 POJO의 용량 비교
10배 이상의 차이를 가지게 된다.
```javascript
const schema = new mongoose.Schema({ name: String });
const Model = mongoose.model('Test', schema);

await Model.create({ name: 'test' });

// Module that estimates the size of an object in memory
const sizeof = require('object-sizeof');

const normalDoc = await Model.findOne();
// To enable the `lean` option for a query, use the `lean()` function.
const leanDoc = await Model.findOne().lean();

sizeof(normalDoc); // >= 1000
sizeof(leanDoc); // 86, 10x smaller!

// In case you were wondering, the JSON form of a Mongoose doc is the same
// as the POJO. This additional memory only affects how much memory your
// Node.js process uses, not how much data is sent over the network.
JSON.stringify(normalDoc).length === JSON.stringify(leanDoc.length); // true
```

## lean() 메서드의 사용
물론 lean() 메서드를 이용해서 얻은 데이터는 Mongoose Document가 아니기 때문에 추가 정보나 save()와 같은 메서드들은 사용이 불가능하다. 그래서 아래와 같은 경우 케이스에서 이용하면 좋다.

* 단순 데이터 조회
* 다른 Document를 수정 또는 변경 하기 위해 사용 되는 metadata로 사용 되는 경우

추가로, 기존에 toObject() 메서드를 사용했던 코드들을 lean() 메서드로 수정한다면 효율 개선에 도움될 수 있다

# Add Info
lean의 경우, toObject()와 같은 mongoose 동작이 제외 되기 때문에, id: string의 값을 못얻는다. 이런 부분을 해소 하기 위해
여러 플러그인을 제공하고 있어 아래를 참고 하여 설정하면 된다.

* [mongoose-lean-virtuals](https://plugins.mongoosejs.io/plugins/lean-virtuals)
* [mongoose-lean-getters](https://plugins.mongoosejs.io/plugins/lean-getters)
* [mongoose-lean-defaults](https://www.npmjs.com/package/mongoose-lean-defaults)

# 참고
* [Faster Mongoose Queries With Lean](https://mongoosejs.com/docs/tutorials/lean.html)
