---
title: WfMusic v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.17"

---

# WfMusic

> v1.0.0

Base URLs:

* <a href="http://dev-cn.your-api-server.com">开发环境: http://dev-cn.your-api-server.com</a>

# Authentication

# Default

## GET 轮播图

GET /banner

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|type|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "banners": [
    {
      "imageUrl": "string",
      "targetId": 0,
      "adid": null,
      "targetType": 0,
      "titleColor": "string",
      "typeTitle": "string",
      "url": "string",
      "exclusive": true,
      "monitorImpress": null,
      "monitorClick": null,
      "monitorType": null,
      "monitorImpressList": null,
      "monitorClickList": null,
      "monitorBlackList": null,
      "extMonitor": null,
      "extMonitorInfo": null,
      "adSource": null,
      "adLocation": null,
      "adDispatchJson": null,
      "encodeId": "string",
      "program": null,
      "event": null,
      "video": null,
      "song": null,
      "scm": "string",
      "bannerBizType": "string"
    }
  ],
  "code": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» banners|[object]|true|none||none|
|»» imageUrl|string|true|none||none|
|»» targetId|integer|true|none||none|
|»» adid|null|true|none||none|
|»» targetType|integer|true|none||none|
|»» titleColor|string|true|none||none|
|»» typeTitle|string|true|none||none|
|»» url|string¦null|true|none||none|
|»» exclusive|boolean|true|none||none|
|»» monitorImpress|null|true|none||none|
|»» monitorClick|null|true|none||none|
|»» monitorType|null|true|none||none|
|»» monitorImpressList|null|true|none||none|
|»» monitorClickList|null|true|none||none|
|»» monitorBlackList|null|true|none||none|
|»» extMonitor|null|true|none||none|
|»» extMonitorInfo|null|true|none||none|
|»» adSource|null|true|none||none|
|»» adLocation|null|true|none||none|
|»» adDispatchJson|null|true|none||none|
|»» encodeId|string|true|none||none|
|»» program|null|true|none||none|
|»» event|null|true|none||none|
|»» video|null|true|none||none|
|»» song|null|true|none||none|
|»» scm|string|true|none||none|
|»» bannerBizType|string|true|none||none|
|» code|integer|true|none||none|

## GET 登录

GET /login/cellphone

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|phone|query|string| 否 |none|
|password|query|string| 否 |none|

> 返回示例

> 400 Response

```json
{
  "loginType": 0,
  "code": 0,
  "message": "string",
  "redirectUrl": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|请求有误|Inline|

### 返回数据结构

状态码 **400**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» loginType|integer|true|none||none|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» redirectUrl|string|true|none||none|

## GET 歌单以及分类

GET /top/playlist

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|cat|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "playlists": [
    {
      "name": "string",
      "id": 0,
      "trackNumberUpdateTime": 0,
      "status": 0,
      "userId": 0,
      "createTime": 0,
      "updateTime": 0,
      "subscribedCount": 0,
      "trackCount": 0,
      "cloudTrackCount": 0,
      "coverImgUrl": "string",
      "iconImgUrl": null,
      "coverImgId": 0,
      "description": "string",
      "tags": [
        "string"
      ],
      "playCount": 0,
      "trackUpdateTime": 0,
      "specialType": 0,
      "totalDuration": 0,
      "creator": {
        "defaultAvatar": true,
        "province": 0,
        "authStatus": 0,
        "followed": true,
        "avatarUrl": "string",
        "accountStatus": 0,
        "gender": 0,
        "city": 0,
        "birthday": 0,
        "userId": 0,
        "userType": 0,
        "nickname": "string",
        "signature": "string",
        "description": "string",
        "detailDescription": "string",
        "avatarImgId": 0,
        "backgroundImgId": 0,
        "backgroundUrl": "string",
        "authority": 0,
        "mutual": true,
        "expertTags": null,
        "experts": null,
        "djStatus": 0,
        "vipType": 0,
        "remarkName": null,
        "authenticationTypes": 0,
        "avatarDetail": {
          "userType": 0,
          "identityLevel": 0,
          "identityIconUrl": "string"
        },
        "anchor": true,
        "avatarImgIdStr": "string",
        "backgroundImgIdStr": "string"
      },
      "tracks": null,
      "subscribers": [
        {
          "defaultAvatar": true,
          "province": 0,
          "authStatus": 0,
          "followed": true,
          "avatarUrl": "string",
          "accountStatus": 0,
          "gender": 0,
          "city": 0,
          "birthday": 0,
          "userId": 0,
          "userType": 0,
          "nickname": "string",
          "signature": "string",
          "description": "string",
          "detailDescription": "string",
          "avatarImgId": 0,
          "backgroundImgId": 0,
          "backgroundUrl": "string",
          "authority": 0,
          "mutual": true,
          "expertTags": null,
          "experts": null,
          "djStatus": 0,
          "vipType": 0,
          "remarkName": null,
          "authenticationTypes": 0,
          "avatarDetail": null,
          "anchor": true,
          "avatarImgIdStr": "string",
          "backgroundImgIdStr": "string"
        }
      ],
      "subscribed": true,
      "commentThreadId": "string",
      "newImported": true,
      "adType": 0,
      "highQuality": true,
      "privacy": 0,
      "ordered": true,
      "anonimous": true,
      "coverStatus": 0,
      "recommendInfo": {
        "alg": "string",
        "logInfo": "string"
      },
      "socialPlaylistCover": null,
      "recommendText": null,
      "coverText": [
        "string"
      ],
      "relateResType": "string",
      "relateResId": "string",
      "shareCount": 0,
      "coverImgId_str": "string",
      "alg": "string",
      "commentCount": 0
    }
  ],
  "total": 0,
  "code": 0,
  "more": true,
  "cat": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» playlists|[object]|true|none||none|
|»» name|string|true|none||none|
|»» id|integer|true|none||none|
|»» trackNumberUpdateTime|integer|true|none||none|
|»» status|integer|true|none||none|
|»» userId|integer|true|none||none|
|»» createTime|integer|true|none||none|
|»» updateTime|integer|true|none||none|
|»» subscribedCount|integer|true|none||none|
|»» trackCount|integer|true|none||none|
|»» cloudTrackCount|integer|true|none||none|
|»» coverImgUrl|string|true|none||none|
|»» iconImgUrl|null|true|none||none|
|»» coverImgId|integer|true|none||none|
|»» description|string|true|none||none|
|»» tags|[string]|true|none||none|
|»» playCount|integer|true|none||none|
|»» trackUpdateTime|integer|true|none||none|
|»» specialType|integer|true|none||none|
|»» totalDuration|integer|true|none||none|
|»» creator|object|true|none||none|
|»»» defaultAvatar|boolean|true|none||none|
|»»» province|integer|true|none||none|
|»»» authStatus|integer|true|none||none|
|»»» followed|boolean|true|none||none|
|»»» avatarUrl|string|true|none||none|
|»»» accountStatus|integer|true|none||none|
|»»» gender|integer|true|none||none|
|»»» city|integer|true|none||none|
|»»» birthday|integer|true|none||none|
|»»» userId|integer|true|none||none|
|»»» userType|integer|true|none||none|
|»»» nickname|string|true|none||none|
|»»» signature|string|true|none||none|
|»»» description|string|true|none||none|
|»»» detailDescription|string|true|none||none|
|»»» avatarImgId|integer|true|none||none|
|»»» backgroundImgId|integer|true|none||none|
|»»» backgroundUrl|string|true|none||none|
|»»» authority|integer|true|none||none|
|»»» mutual|boolean|true|none||none|
|»»» expertTags|null|true|none||none|
|»»» experts|null|true|none||none|
|»»» djStatus|integer|true|none||none|
|»»» vipType|integer|true|none||none|
|»»» remarkName|null|true|none||none|
|»»» authenticationTypes|integer|true|none||none|
|»»» avatarDetail|object|true|none||none|
|»»»» userType|integer|true|none||none|
|»»»» identityLevel|integer|true|none||none|
|»»»» identityIconUrl|string|true|none||none|
|»»» anchor|boolean|true|none||none|
|»»» avatarImgIdStr|string|true|none||none|
|»»» backgroundImgIdStr|string|true|none||none|
|»» tracks|null|true|none||none|
|»» subscribers|[object]|true|none||none|
|»»» defaultAvatar|boolean|true|none||none|
|»»» province|integer|true|none||none|
|»»» authStatus|integer|true|none||none|
|»»» followed|boolean|true|none||none|
|»»» avatarUrl|string|true|none||none|
|»»» accountStatus|integer|true|none||none|
|»»» gender|integer|true|none||none|
|»»» city|integer|true|none||none|
|»»» birthday|integer|true|none||none|
|»»» userId|integer|true|none||none|
|»»» userType|integer|true|none||none|
|»»» nickname|string|true|none||none|
|»»» signature|string|true|none||none|
|»»» description|string|true|none||none|
|»»» detailDescription|string|true|none||none|
|»»» avatarImgId|integer|true|none||none|
|»»» backgroundImgId|integer|true|none||none|
|»»» backgroundUrl|string|true|none||none|
|»»» authority|integer|true|none||none|
|»»» mutual|boolean|true|none||none|
|»»» expertTags|null|true|none||none|
|»»» experts|null|true|none||none|
|»»» djStatus|integer|true|none||none|
|»»» vipType|integer|true|none||none|
|»»» remarkName|null|true|none||none|
|»»» authenticationTypes|integer|true|none||none|
|»»» avatarDetail|null|true|none||none|
|»»» anchor|boolean|true|none||none|
|»»» avatarImgIdStr|string|true|none||none|
|»»» backgroundImgIdStr|string|true|none||none|
|»» subscribed|boolean|true|none||none|
|»» commentThreadId|string|true|none||none|
|»» newImported|boolean|true|none||none|
|»» adType|integer|true|none||none|
|»» highQuality|boolean|true|none||none|
|»» privacy|integer|true|none||none|
|»» ordered|boolean|true|none||none|
|»» anonimous|boolean|true|none||none|
|»» coverStatus|integer|true|none||none|
|»» recommendInfo|object¦null|true|none||none|
|»»» alg|string|true|none||none|
|»»» logInfo|string|true|none||none|
|»» socialPlaylistCover|null|true|none||none|
|»» recommendText|null|true|none||none|
|»» coverText|[string]|true|none||none|
|»» relateResType|string|true|none||none|
|»» relateResId|string¦null|true|none||none|
|»» shareCount|integer|true|none||none|
|»» coverImgId_str|string|true|none||none|
|»» alg|string|true|none||none|
|»» commentCount|integer|true|none||none|
|» total|integer|true|none||none|
|» code|integer|true|none||none|
|» more|boolean|true|none||none|
|» cat|string|true|none||none|

## GET 新碟上架

GET /top/album

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|area|query|string| 否 |none|
|type|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "weekData": [
    {
      "songs": [
        "string"
      ],
      "paid": true,
      "onSale": true,
      "tags": "string",
      "copyrightId": 0,
      "artists": [
        {
          "img1v1Id": 0,
          "topicPerson": 0,
          "picId": 0,
          "musicSize": 0,
          "followed": true,
          "trans": "string",
          "albumSize": 0,
          "img1v1Url": "string",
          "picUrl": "string",
          "briefDesc": "string",
          "alias": [
            "string"
          ],
          "name": "string",
          "id": 0,
          "img1v1Id_str": "string"
        }
      ],
      "artist": {
        "img1v1Id": 0,
        "topicPerson": 0,
        "picId": 0,
        "musicSize": 0,
        "followed": true,
        "trans": "string",
        "albumSize": 0,
        "img1v1Url": "string",
        "picUrl": "string",
        "briefDesc": "string",
        "alias": [
          "string"
        ],
        "name": "string",
        "id": 0,
        "picId_str": "string",
        "img1v1Id_str": "string",
        "transNames": [
          "string"
        ]
      },
      "picId": 0,
      "company": "string",
      "status": 0,
      "pic": 0,
      "commentThreadId": "string",
      "publishTime": 0,
      "picUrl": "string",
      "briefDesc": "string",
      "companyId": 0,
      "blurPicUrl": "string",
      "subType": "string",
      "description": "string",
      "alias": [
        "string"
      ],
      "name": "string",
      "id": 0,
      "type": "string",
      "size": 0,
      "picId_str": "string",
      "areaId": 0,
      "exclusive": true,
      "isSub": true,
      "transNames": [
        "string"
      ]
    }
  ],
  "hasMore": true,
  "monthData": [
    {
      "songs": [
        "string"
      ],
      "paid": true,
      "onSale": true,
      "tags": "string",
      "copyrightId": 0,
      "artists": [
        {
          "img1v1Id": 0,
          "topicPerson": 0,
          "picId": 0,
          "musicSize": 0,
          "followed": true,
          "trans": "string",
          "albumSize": 0,
          "img1v1Url": "string",
          "picUrl": "string",
          "briefDesc": "string",
          "alias": [
            "string"
          ],
          "name": "string",
          "id": 0,
          "img1v1Id_str": "string"
        }
      ],
      "artist": {
        "img1v1Id": 0,
        "topicPerson": 0,
        "picId": 0,
        "musicSize": 0,
        "followed": true,
        "trans": "string",
        "albumSize": 0,
        "img1v1Url": "string",
        "picUrl": "string",
        "briefDesc": "string",
        "alias": [
          "string"
        ],
        "name": "string",
        "id": 0,
        "picId_str": "string",
        "img1v1Id_str": "string",
        "transNames": [
          "string"
        ]
      },
      "picId": 0,
      "company": "string",
      "status": 0,
      "pic": 0,
      "commentThreadId": "string",
      "publishTime": 0,
      "picUrl": "string",
      "briefDesc": "string",
      "companyId": 0,
      "blurPicUrl": "string",
      "subType": "string",
      "description": "string",
      "alias": [
        "string"
      ],
      "name": "string",
      "id": 0,
      "type": "string",
      "size": 0,
      "picId_str": "string",
      "areaId": 0,
      "exclusive": true,
      "isSub": true,
      "transNames": [
        "string"
      ]
    }
  ],
  "code": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» weekData|[object]|true|none||none|
|»» songs|[string]|true|none||none|
|»» paid|boolean|true|none||none|
|»» onSale|boolean|true|none||none|
|»» tags|string|true|none||none|
|»» copyrightId|integer|true|none||none|
|»» artists|[object]|true|none||none|
|»»» img1v1Id|integer|true|none||none|
|»»» topicPerson|integer|true|none||none|
|»»» picId|integer|true|none||none|
|»»» musicSize|integer|true|none||none|
|»»» followed|boolean|true|none||none|
|»»» trans|string|true|none||none|
|»»» albumSize|integer|true|none||none|
|»»» img1v1Url|string|true|none||none|
|»»» picUrl|string|true|none||none|
|»»» briefDesc|string|true|none||none|
|»»» alias|[string]|true|none||none|
|»»» name|string|true|none||none|
|»»» id|integer|true|none||none|
|»»» img1v1Id_str|string|true|none||none|
|»» artist|object|true|none||none|
|»»» img1v1Id|integer|true|none||none|
|»»» topicPerson|integer|true|none||none|
|»»» picId|integer|true|none||none|
|»»» musicSize|integer|true|none||none|
|»»» followed|boolean|true|none||none|
|»»» trans|string|true|none||none|
|»»» albumSize|integer|true|none||none|
|»»» img1v1Url|string|true|none||none|
|»»» picUrl|string|true|none||none|
|»»» briefDesc|string|true|none||none|
|»»» alias|[string]|true|none||none|
|»»» name|string|true|none||none|
|»»» id|integer|true|none||none|
|»»» picId_str|string|true|none||none|
|»»» img1v1Id_str|string|true|none||none|
|»»» transNames|[string]|false|none||none|
|»» picId|integer|true|none||none|
|»» company|string|true|none||none|
|»» status|integer|true|none||none|
|»» pic|integer|true|none||none|
|»» commentThreadId|string|true|none||none|
|»» publishTime|integer|true|none||none|
|»» picUrl|string|true|none||none|
|»» briefDesc|string|true|none||none|
|»» companyId|integer|true|none||none|
|»» blurPicUrl|string|true|none||none|
|»» subType|string|true|none||none|
|»» description|string|true|none||none|
|»» alias|[string]|true|none||none|
|»» name|string|true|none||none|
|»» id|integer|true|none||none|
|»» type|string|true|none||none|
|»» size|integer|true|none||none|
|»» picId_str|string|true|none||none|
|»» areaId|integer|true|none||none|
|»» exclusive|boolean|true|none||none|
|»» isSub|boolean|true|none||none|
|»» transNames|[string]|true|none||none|
|» hasMore|boolean|true|none||none|
|» monthData|[object]|true|none||none|
|»» songs|[string]|true|none||none|
|»» paid|boolean|true|none||none|
|»» onSale|boolean|true|none||none|
|»» tags|string|true|none||none|
|»» copyrightId|integer|true|none||none|
|»» artists|[object]|true|none||none|
|»»» img1v1Id|integer|true|none||none|
|»»» topicPerson|integer|true|none||none|
|»»» picId|integer|true|none||none|
|»»» musicSize|integer|true|none||none|
|»»» followed|boolean|true|none||none|
|»»» trans|string|true|none||none|
|»»» albumSize|integer|true|none||none|
|»»» img1v1Url|string|true|none||none|
|»»» picUrl|string|true|none||none|
|»»» briefDesc|string|true|none||none|
|»»» alias|[string]|true|none||none|
|»»» name|string|true|none||none|
|»»» id|integer|true|none||none|
|»»» img1v1Id_str|string|true|none||none|
|»» artist|object|true|none||none|
|»»» img1v1Id|integer|true|none||none|
|»»» topicPerson|integer|true|none||none|
|»»» picId|integer|true|none||none|
|»»» musicSize|integer|true|none||none|
|»»» followed|boolean|true|none||none|
|»»» trans|string|true|none||none|
|»»» albumSize|integer|true|none||none|
|»»» img1v1Url|string|true|none||none|
|»»» picUrl|string|true|none||none|
|»»» briefDesc|string|true|none||none|
|»»» alias|[string]|true|none||none|
|»»» name|string|true|none||none|
|»»» id|integer|true|none||none|
|»»» picId_str|string|false|none||none|
|»»» img1v1Id_str|string|true|none||none|
|»»» transNames|[string]|false|none||none|
|»» picId|integer|true|none||none|
|»» company|string|true|none||none|
|»» status|integer|true|none||none|
|»» pic|integer|true|none||none|
|»» commentThreadId|string|true|none||none|
|»» publishTime|integer|true|none||none|
|»» picUrl|string|true|none||none|
|»» briefDesc|string|true|none||none|
|»» companyId|integer|true|none||none|
|»» blurPicUrl|string|true|none||none|
|»» subType|string|true|none||none|
|»» description|string|true|none||none|
|»» alias|[string]|true|none||none|
|»» name|string|true|none||none|
|»» id|integer|true|none||none|
|»» type|string|true|none||none|
|»» size|integer|true|none||none|
|»» picId_str|string|true|none||none|
|»» areaId|integer|true|none||none|
|»» exclusive|boolean|true|none||none|
|»» isSub|boolean|true|none||none|
|»» transNames|[string]|true|none||none|
|» code|integer|true|none||none|

## GET 榜单数据

GET /toplist

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 各个榜单歌曲内容

GET /playlist/detail

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 播放歌曲

GET /song/media/outer/url

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取歌词

GET /lyric

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "sgc": true,
  "sfy": true,
  "qfy": true,
  "lyricUser": {
    "id": 0,
    "status": 0,
    "demand": 0,
    "userid": 0,
    "nickname": "string",
    "uptime": 0
  },
  "lrc": {
    "version": 0,
    "lyric": "string"
  },
  "klyric": {
    "version": 0,
    "lyric": "string"
  },
  "tlyric": {
    "version": 0,
    "lyric": "string"
  },
  "romalrc": {
    "version": 0,
    "lyric": "string"
  },
  "code": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» sgc|boolean|true|none||none|
|» sfy|boolean|true|none||none|
|» qfy|boolean|true|none||none|
|» lyricUser|object|true|none||none|
|»» id|integer|true|none||none|
|»» status|integer|true|none||none|
|»» demand|integer|true|none||none|
|»» userid|integer|true|none||none|
|»» nickname|string|true|none||none|
|»» uptime|integer|true|none||none|
|» lrc|object|true|none||none|
|»» version|integer|true|none||none|
|»» lyric|string|true|none||none|
|» klyric|object|true|none||none|
|»» version|integer|true|none||none|
|»» lyric|string|true|none||none|
|» tlyric|object|true|none||none|
|»» version|integer|true|none||none|
|»» lyric|string|true|none||none|
|» romalrc|object|true|none||none|
|»» version|integer|true|none||none|
|»» lyric|string|true|none||none|
|» code|integer|true|none||none|

## GET 获取Mv数据

GET /mv/all

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|area|query|string| 否 |none|
|order|query|string| 否 |none|
|limit|query|string| 否 |none|
|offset|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "count": 0,
  "hasMore": true,
  "data": [
    {
      "id": 0,
      "cover": "string",
      "name": "string",
      "playCount": 0,
      "briefDesc": "string",
      "desc": null,
      "artistName": "string",
      "artistId": 0,
      "duration": 0,
      "mark": 0,
      "subed": true,
      "artists": [
        {
          "id": 0,
          "name": "string",
          "alias": [
            "string"
          ],
          "transNames": [
            "string"
          ]
        }
      ]
    }
  ],
  "code": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» count|integer|true|none||none|
|» hasMore|boolean|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» cover|string|true|none||none|
|»» name|string|true|none||none|
|»» playCount|integer|true|none||none|
|»» briefDesc|string¦null|true|none||none|
|»» desc|null|true|none||none|
|»» artistName|string|true|none||none|
|»» artistId|integer|true|none||none|
|»» duration|integer|true|none||none|
|»» mark|integer|true|none||none|
|»» subed|boolean|true|none||none|
|»» artists|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» alias|[string]|true|none||none|
|»»» transNames|[string]|true|none||none|
|» code|integer|true|none||none|

## GET 热门电台

GET /dj/hot

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|limit|query|string| 否 |none|
|offset|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "djRadios": [
    {
      "id": 0,
      "name": "string",
      "picUrl": "string",
      "programCount": 0,
      "subCount": 0,
      "createTime": 0,
      "categoryId": 0,
      "category": "string",
      "rcmdtext": "string",
      "radioFeeType": 0,
      "feeScope": 0,
      "playCount": 0,
      "subed": true,
      "dj": {
        "defaultAvatar": true,
        "province": 0,
        "authStatus": 0,
        "followed": true,
        "avatarUrl": "string",
        "accountStatus": 0,
        "gender": 0,
        "city": 0,
        "birthday": 0,
        "userId": 0,
        "userType": 0,
        "nickname": "string",
        "signature": "string",
        "description": "string",
        "detailDescription": "string",
        "avatarImgId": 0,
        "backgroundImgId": 0,
        "backgroundUrl": "string",
        "authority": 0,
        "mutual": true,
        "expertTags": null,
        "experts": {
          "1": "string"
        },
        "djStatus": 0,
        "vipType": 0,
        "remarkName": null,
        "authenticationTypes": 0,
        "avatarDetail": null,
        "avatarImgIdStr": "string",
        "backgroundImgIdStr": "string",
        "anchor": true,
        "avatarImgId_str": "string"
      },
      "copywriter": "string",
      "buyed": true
    }
  ],
  "hasMore": true,
  "code": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» djRadios|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» picUrl|string|true|none||none|
|»» programCount|integer|true|none||none|
|»» subCount|integer|true|none||none|
|»» createTime|integer|true|none||none|
|»» categoryId|integer|true|none||none|
|»» category|string|true|none||none|
|»» rcmdtext|string|true|none||none|
|»» radioFeeType|integer|true|none||none|
|»» feeScope|integer|true|none||none|
|»» playCount|integer|true|none||none|
|»» subed|boolean|true|none||none|
|»» dj|object|true|none||none|
|»»» defaultAvatar|boolean|true|none||none|
|»»» province|integer|true|none||none|
|»»» authStatus|integer|true|none||none|
|»»» followed|boolean|true|none||none|
|»»» avatarUrl|string|true|none||none|
|»»» accountStatus|integer|true|none||none|
|»»» gender|integer|true|none||none|
|»»» city|integer|true|none||none|
|»»» birthday|integer|true|none||none|
|»»» userId|integer|true|none||none|
|»»» userType|integer|true|none||none|
|»»» nickname|string|true|none||none|
|»»» signature|string|true|none||none|
|»»» description|string|true|none||none|
|»»» detailDescription|string|true|none||none|
|»»» avatarImgId|integer|true|none||none|
|»»» backgroundImgId|integer|true|none||none|
|»»» backgroundUrl|string|true|none||none|
|»»» authority|integer|true|none||none|
|»»» mutual|boolean|true|none||none|
|»»» expertTags|null|true|none||none|
|»»» experts|object|true|none||none|
|»»»» 1|string|true|none||none|
|»»» djStatus|integer|true|none||none|
|»»» vipType|integer|true|none||none|
|»»» remarkName|null|true|none||none|
|»»» authenticationTypes|integer|true|none||none|
|»»» avatarDetail|null|true|none||none|
|»»» avatarImgIdStr|string|true|none||none|
|»»» backgroundImgIdStr|string|true|none||none|
|»»» anchor|boolean|true|none||none|
|»»» avatarImgId_str|string|true|none||none|
|»» copywriter|string|true|none||none|
|»» buyed|boolean|true|none||none|
|» hasMore|boolean|true|none||none|
|» code|integer|true|none||none|

## GET 分类歌手

GET /top/artists

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 歌单分类数据

GET /playlist/catlist

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取歌单内容

GET /playlist/track/all

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取新碟歌曲内容

GET /album

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "resourceState": true,
  "songs": [
    {
      "rtUrls": [
        "string"
      ],
      "ar": [
        {
          "id": 0,
          "name": "string",
          "alia": [
            "string"
          ]
        }
      ],
      "al": {
        "id": 0,
        "name": "string",
        "pic_str": "string",
        "pic": 0
      },
      "st": 0,
      "noCopyrightRcmd": null,
      "songJumpInfo": null,
      "rtype": 0,
      "rurl": null,
      "pst": 0,
      "alia": [
        "string"
      ],
      "pop": 0,
      "rt": "string",
      "mst": 0,
      "cp": 0,
      "crbt": null,
      "cf": "string",
      "dt": 0,
      "h": {
        "br": 0,
        "fid": 0,
        "size": 0,
        "vd": 0,
        "sr": 0
      },
      "sq": {
        "br": 0,
        "fid": 0,
        "size": 0,
        "vd": 0,
        "sr": 0
      },
      "hr": null,
      "l": {
        "br": 0,
        "fid": 0,
        "size": 0,
        "vd": 0,
        "sr": 0
      },
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 0,
      "fee": 0,
      "mv": 0,
      "t": 0,
      "v": 0,
      "cd": "string",
      "a": null,
      "m": {
        "br": 0,
        "fid": 0,
        "size": 0,
        "vd": 0,
        "sr": 0
      },
      "name": "string",
      "id": 0,
      "videoInfo": {
        "moreThanOne": true,
        "video": {
          "vid": "string",
          "type": 0,
          "title": "string",
          "playTime": 0,
          "coverUrl": "string",
          "publishTime": 0,
          "artists": null
        }
      },
      "privilege": {
        "id": 0,
        "fee": 0,
        "payed": 0,
        "st": 0,
        "pl": 0,
        "dl": 0,
        "sp": 0,
        "cp": 0,
        "subp": 0,
        "cs": true,
        "maxbr": 0,
        "fl": 0,
        "toast": true,
        "flag": 0,
        "preSell": true,
        "playMaxbr": 0,
        "downloadMaxbr": 0,
        "maxBrLevel": "string",
        "playMaxBrLevel": "string",
        "downloadMaxBrLevel": "string",
        "plLevel": "string",
        "dlLevel": "string",
        "flLevel": "string",
        "rscl": null,
        "freeTrialPrivilege": {
          "resConsumable": true,
          "userConsumable": true,
          "listenType": 0
        },
        "chargeInfoList": [
          {
            "rate": null,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": null
          }
        ]
      },
      "tns": [
        "string"
      ]
    }
  ],
  "code": 0,
  "album": {
    "songs": [
      "string"
    ],
    "paid": true,
    "onSale": true,
    "mark": 0,
    "awardTags": null,
    "blurPicUrl": "string",
    "companyId": 0,
    "company": "string",
    "alias": [
      "string"
    ],
    "artists": [
      {
        "img1v1Id": 0,
        "topicPerson": 0,
        "alias": [
          "string"
        ],
        "picId": 0,
        "briefDesc": "string",
        "musicSize": 0,
        "albumSize": 0,
        "picUrl": "string",
        "img1v1Url": "string",
        "followed": true,
        "trans": "string",
        "name": "string",
        "id": 0,
        "img1v1Id_str": "string"
      }
    ],
    "copyrightId": 0,
    "picId": 0,
    "artist": {
      "img1v1Id": 0,
      "topicPerson": 0,
      "alias": [
        "string"
      ],
      "picId": 0,
      "briefDesc": "string",
      "musicSize": 0,
      "albumSize": 0,
      "picUrl": "string",
      "img1v1Url": "string",
      "followed": true,
      "trans": "string",
      "name": "string",
      "id": 0,
      "picId_str": "string",
      "img1v1Id_str": "string"
    },
    "publishTime": 0,
    "briefDesc": "string",
    "picUrl": "string",
    "commentThreadId": "string",
    "pic": 0,
    "tags": "string",
    "description": "string",
    "status": 0,
    "subType": "string",
    "name": "string",
    "id": 0,
    "type": "string",
    "size": 0,
    "picId_str": "string",
    "info": {
      "commentThread": {
        "id": "string",
        "resourceInfo": {
          "id": null,
          "userId": null,
          "name": null,
          "imgUrl": null,
          "creator": null,
          "encodedId": null,
          "subTitle": null,
          "webUrl": null
        },
        "resourceType": 0,
        "commentCount": 0,
        "likedCount": 0,
        "shareCount": 0,
        "hotCount": 0,
        "latestLikedUsers": null,
        "resourceOwnerId": 0,
        "resourceTitle": "string",
        "resourceId": 0
      },
      "latestLikedUsers": null,
      "liked": true,
      "comments": null,
      "resourceType": 0,
      "resourceId": 0,
      "commentCount": 0,
      "likedCount": 0,
      "shareCount": 0,
      "threadId": "string"
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» resourceState|boolean|true|none||none|
|» songs|[object]|true|none||none|
|»» rtUrls|[string]|true|none||none|
|»» ar|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» alia|[string]|true|none||none|
|»» al|object|true|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» pic_str|string|true|none||none|
|»»» pic|integer|true|none||none|
|»» st|integer|true|none||none|
|»» noCopyrightRcmd|null|true|none||none|
|»» songJumpInfo|null|true|none||none|
|»» rtype|integer|true|none||none|
|»» rurl|null|true|none||none|
|»» pst|integer|true|none||none|
|»» alia|[string]|true|none||none|
|»» pop|integer|true|none||none|
|»» rt|string|true|none||none|
|»» mst|integer|true|none||none|
|»» cp|integer|true|none||none|
|»» crbt|null|true|none||none|
|»» cf|string|true|none||none|
|»» dt|integer|true|none||none|
|»» h|object|true|none||none|
|»»» br|integer|true|none||none|
|»»» fid|integer|true|none||none|
|»»» size|integer|true|none||none|
|»»» vd|integer|true|none||none|
|»»» sr|integer|true|none||none|
|»» sq|object|true|none||none|
|»»» br|integer|true|none||none|
|»»» fid|integer|true|none||none|
|»»» size|integer|true|none||none|
|»»» vd|integer|true|none||none|
|»»» sr|integer|true|none||none|
|»» hr|null|true|none||none|
|»» l|object|true|none||none|
|»»» br|integer|true|none||none|
|»»» fid|integer|true|none||none|
|»»» size|integer|true|none||none|
|»»» vd|integer|true|none||none|
|»»» sr|integer|true|none||none|
|»» rtUrl|null|true|none||none|
|»» ftype|integer|true|none||none|
|»» djId|integer|true|none||none|
|»» no|integer|true|none||none|
|»» fee|integer|true|none||none|
|»» mv|integer|true|none||none|
|»» t|integer|true|none||none|
|»» v|integer|true|none||none|
|»» cd|string|true|none||none|
|»» a|null|true|none||none|
|»» m|object|true|none||none|
|»»» br|integer|true|none||none|
|»»» fid|integer|true|none||none|
|»»» size|integer|true|none||none|
|»»» vd|integer|true|none||none|
|»»» sr|integer|true|none||none|
|»» name|string|true|none||none|
|»» id|integer|true|none||none|
|»» videoInfo|object|true|none||none|
|»»» moreThanOne|boolean|true|none||none|
|»»» video|object¦null|true|none||none|
|»»»» vid|string|true|none||none|
|»»»» type|integer|true|none||none|
|»»»» title|string|true|none||none|
|»»»» playTime|integer|true|none||none|
|»»»» coverUrl|string|true|none||none|
|»»»» publishTime|integer|true|none||none|
|»»»» artists|null|true|none||none|
|»» privilege|object|true|none||none|
|»»» id|integer|true|none||none|
|»»» fee|integer|true|none||none|
|»»» payed|integer|true|none||none|
|»»» st|integer|true|none||none|
|»»» pl|integer|true|none||none|
|»»» dl|integer|true|none||none|
|»»» sp|integer|true|none||none|
|»»» cp|integer|true|none||none|
|»»» subp|integer|true|none||none|
|»»» cs|boolean|true|none||none|
|»»» maxbr|integer|true|none||none|
|»»» fl|integer|true|none||none|
|»»» toast|boolean|true|none||none|
|»»» flag|integer|true|none||none|
|»»» preSell|boolean|true|none||none|
|»»» playMaxbr|integer|true|none||none|
|»»» downloadMaxbr|integer|true|none||none|
|»»» maxBrLevel|string|true|none||none|
|»»» playMaxBrLevel|string|true|none||none|
|»»» downloadMaxBrLevel|string|true|none||none|
|»»» plLevel|string|true|none||none|
|»»» dlLevel|string|true|none||none|
|»»» flLevel|string|true|none||none|
|»»» rscl|null|true|none||none|
|»»» freeTrialPrivilege|object|true|none||none|
|»»»» resConsumable|boolean|true|none||none|
|»»»» userConsumable|boolean|true|none||none|
|»»»» listenType|integer|true|none||none|
|»»» chargeInfoList|[object]|true|none||none|
|»»»» rate|integer|true|none||none|
|»»»» chargeUrl|null|true|none||none|
|»»»» chargeMessage|null|true|none||none|
|»»»» chargeType|integer|true|none||none|
|»» tns|[string]|true|none||none|
|» code|integer|true|none||none|
|» album|object|true|none||none|
|»» songs|[string]|true|none||none|
|»» paid|boolean|true|none||none|
|»» onSale|boolean|true|none||none|
|»» mark|integer|true|none||none|
|»» awardTags|null|true|none||none|
|»» blurPicUrl|string|true|none||none|
|»» companyId|integer|true|none||none|
|»» company|string|true|none||none|
|»» alias|[string]|true|none||none|
|»» artists|[object]|true|none||none|
|»»» img1v1Id|integer|false|none||none|
|»»» topicPerson|integer|false|none||none|
|»»» alias|[string]|false|none||none|
|»»» picId|integer|false|none||none|
|»»» briefDesc|string|false|none||none|
|»»» musicSize|integer|false|none||none|
|»»» albumSize|integer|false|none||none|
|»»» picUrl|string|false|none||none|
|»»» img1v1Url|string|false|none||none|
|»»» followed|boolean|false|none||none|
|»»» trans|string|false|none||none|
|»»» name|string|false|none||none|
|»»» id|integer|false|none||none|
|»»» img1v1Id_str|string|false|none||none|
|»» copyrightId|integer|true|none||none|
|»» picId|integer|true|none||none|
|»» artist|object|true|none||none|
|»»» img1v1Id|integer|true|none||none|
|»»» topicPerson|integer|true|none||none|
|»»» alias|[string]|true|none||none|
|»»» picId|integer|true|none||none|
|»»» briefDesc|string|true|none||none|
|»»» musicSize|integer|true|none||none|
|»»» albumSize|integer|true|none||none|
|»»» picUrl|string|true|none||none|
|»»» img1v1Url|string|true|none||none|
|»»» followed|boolean|true|none||none|
|»»» trans|string|true|none||none|
|»»» name|string|true|none||none|
|»»» id|integer|true|none||none|
|»»» picId_str|string|true|none||none|
|»»» img1v1Id_str|string|true|none||none|
|»» publishTime|integer|true|none||none|
|»» briefDesc|string|true|none||none|
|»» picUrl|string|true|none||none|
|»» commentThreadId|string|true|none||none|
|»» pic|integer|true|none||none|
|»» tags|string|true|none||none|
|»» description|string|true|none||none|
|»» status|integer|true|none||none|
|»» subType|string|true|none||none|
|»» name|string|true|none||none|
|»» id|integer|true|none||none|
|»» type|string|true|none||none|
|»» size|integer|true|none||none|
|»» picId_str|string|true|none||none|
|»» info|object|true|none||none|
|»»» commentThread|object|true|none||none|
|»»»» id|string|true|none||none|
|»»»» resourceInfo|object|true|none||none|
|»»»»» id|integer|true|none||none|
|»»»»» userId|integer|true|none||none|
|»»»»» name|string|true|none||none|
|»»»»» imgUrl|string|true|none||none|
|»»»»» creator|null|true|none||none|
|»»»»» encodedId|null|true|none||none|
|»»»»» subTitle|null|true|none||none|
|»»»»» webUrl|null|true|none||none|
|»»»» resourceType|integer|true|none||none|
|»»»» commentCount|integer|true|none||none|
|»»»» likedCount|integer|true|none||none|
|»»»» shareCount|integer|true|none||none|
|»»»» hotCount|integer|true|none||none|
|»»»» latestLikedUsers|null|true|none||none|
|»»»» resourceOwnerId|integer|true|none||none|
|»»»» resourceTitle|string|true|none||none|
|»»»» resourceId|integer|true|none||none|
|»»» latestLikedUsers|null|true|none||none|
|»»» liked|boolean|true|none||none|
|»»» comments|null|true|none||none|
|»»» resourceType|integer|true|none||none|
|»»» resourceId|integer|true|none||none|
|»»» commentCount|integer|true|none||none|
|»»» likedCount|integer|true|none||none|
|»»» shareCount|integer|true|none||none|
|»»» threadId|string|true|none||none|

## GET 获取歌手 mv

GET /artist/mv

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 相似歌曲

GET /simi/song

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 相似歌单

GET /simi/playlist

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 相似Mv

GET /simi/mv

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|mvid|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "mvs": [
    {
      "id": 0,
      "cover": "string",
      "name": "string",
      "playCount": 0,
      "briefDesc": "string",
      "desc": null,
      "artistName": "string",
      "artistId": 0,
      "duration": 0,
      "mark": 0,
      "artists": [
        {
          "id": 0,
          "name": "string",
          "alias": [
            "string"
          ],
          "transNames": null
        }
      ],
      "alg": "string"
    }
  ],
  "code": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» mvs|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» cover|string|true|none||none|
|»» name|string|true|none||none|
|»» playCount|integer|true|none||none|
|»» briefDesc|string|true|none||none|
|»» desc|null|true|none||none|
|»» artistName|string|true|none||none|
|»» artistId|integer|true|none||none|
|»» duration|integer|true|none||none|
|»» mark|integer|true|none||none|
|»» artists|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» alias|[string]|true|none||none|
|»»» transNames|null|true|none||none|
|»» alg|string|true|none||none|
|» code|integer|true|none||none|

## GET MvUrl

GET /mv/url

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {
    "id": 0,
    "url": "string",
    "r": 0,
    "size": 0,
    "md5": "string",
    "code": 0,
    "expi": 0,
    "fee": 0,
    "mvFee": 0,
    "st": 0,
    "promotionVo": null,
    "msg": "string"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||none|
|»» url|string|true|none||none|
|»» r|integer|true|none||none|
|»» size|integer|true|none||none|
|»» md5|string|true|none||none|
|»» code|integer|true|none||none|
|»» expi|integer|true|none||none|
|»» fee|integer|true|none||none|
|»» mvFee|integer|true|none||none|
|»» st|integer|true|none||none|
|»» promotionVo|null|true|none||none|
|»» msg|string|true|none||none|

## GET Mv详情

GET /mv/detail

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|mvid|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "loadingPic": "string",
  "bufferPic": "string",
  "loadingPicFS": "string",
  "bufferPicFS": "string",
  "subed": true,
  "mp": {
    "id": 0,
    "fee": 0,
    "mvFee": 0,
    "payed": 0,
    "pl": 0,
    "dl": 0,
    "cp": 0,
    "sid": 0,
    "st": 0,
    "normal": true,
    "unauthorized": true,
    "msg": null
  },
  "data": {
    "id": 0,
    "name": "string",
    "artistId": 0,
    "artistName": "string",
    "briefDesc": "string",
    "desc": null,
    "cover": "string",
    "coverId_str": "string",
    "coverId": 0,
    "playCount": 0,
    "subCount": 0,
    "shareCount": 0,
    "commentCount": 0,
    "duration": 0,
    "nType": 0,
    "publishTime": "string",
    "price": null,
    "brs": [
      {
        "size": 0,
        "br": 0,
        "point": 0
      }
    ],
    "artists": [
      {
        "id": 0,
        "name": "string",
        "img1v1Url": "string",
        "followed": true
      }
    ],
    "commentThreadId": "string",
    "videoGroup": [
      {
        "id": 0,
        "name": "string",
        "type": 0
      }
    ]
  },
  "code": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» loadingPic|string|true|none||none|
|» bufferPic|string|true|none||none|
|» loadingPicFS|string|true|none||none|
|» bufferPicFS|string|true|none||none|
|» subed|boolean|true|none||none|
|» mp|object|true|none||none|
|»» id|integer|true|none||none|
|»» fee|integer|true|none||none|
|»» mvFee|integer|true|none||none|
|»» payed|integer|true|none||none|
|»» pl|integer|true|none||none|
|»» dl|integer|true|none||none|
|»» cp|integer|true|none||none|
|»» sid|integer|true|none||none|
|»» st|integer|true|none||none|
|»» normal|boolean|true|none||none|
|»» unauthorized|boolean|true|none||none|
|»» msg|null|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» artistId|integer|true|none||none|
|»» artistName|string|true|none||none|
|»» briefDesc|string|true|none||none|
|»» desc|null|true|none||none|
|»» cover|string|true|none||none|
|»» coverId_str|string|true|none||none|
|»» coverId|integer|true|none||none|
|»» playCount|integer|true|none||none|
|»» subCount|integer|true|none||none|
|»» shareCount|integer|true|none||none|
|»» commentCount|integer|true|none||none|
|»» duration|integer|true|none||none|
|»» nType|integer|true|none||none|
|»» publishTime|string|true|none||none|
|»» price|null|true|none||none|
|»» brs|[object]|true|none||none|
|»»» size|integer|true|none||none|
|»»» br|integer|true|none||none|
|»»» point|integer|true|none||none|
|»» artists|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» img1v1Url|string|true|none||none|
|»»» followed|boolean|true|none||none|
|»» commentThreadId|string|true|none||none|
|»» videoGroup|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» type|integer|true|none||none|
|» code|integer|true|none||none|

## GET Mv评论

GET /comment/new

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|array[string]| 否 |none|
|type|query|string| 否 |none|
|pageNo|query|string| 否 |none|
|pageSize|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "isMusician": true,
  "cnum": 0,
  "userId": 0,
  "topComments": [
    "string"
  ],
  "moreHot": true,
  "hotComments": [
    {
      "user": {
        "locationInfo": null,
        "liveInfo": null,
        "anonym": 0,
        "commonIdentity": null,
        "avatarUrl": "string",
        "avatarDetail": {
          "userType": 0,
          "identityLevel": 0,
          "identityIconUrl": "string"
        },
        "userType": 0,
        "followed": true,
        "mutual": true,
        "remarkName": null,
        "socialUserId": null,
        "vipRights": {
          "associator": {},
          "musicPackage": {},
          "redplus": null,
          "redVipAnnualCount": 0,
          "redVipLevel": 0
        },
        "nickname": "string",
        "authStatus": 0,
        "expertTags": [
          "string"
        ],
        "experts": null,
        "vipType": 0,
        "userId": 0,
        "target": null
      },
      "beReplied": [
        "string"
      ],
      "pendantData": {
        "id": 0,
        "imageUrl": "string"
      },
      "showFloorComment": null,
      "status": 0,
      "commentId": 0,
      "content": "string",
      "richContent": null,
      "contentResource": null,
      "time": 0,
      "timeStr": "string",
      "needDisplayTime": true,
      "likedCount": 0,
      "expressionUrl": null,
      "commentLocationType": 0,
      "parentCommentId": 0,
      "decoration": null,
      "repliedMark": null,
      "grade": null,
      "userBizLevels": null,
      "ipLocation": {
        "ip": null,
        "location": "string",
        "userId": null
      },
      "owner": true,
      "liked": true
    }
  ],
  "commentBanner": null,
  "code": 0,
  "comments": [
    {
      "user": {
        "locationInfo": null,
        "liveInfo": null,
        "anonym": 0,
        "commonIdentity": null,
        "avatarUrl": "string",
        "avatarDetail": null,
        "userType": 0,
        "followed": true,
        "mutual": true,
        "remarkName": null,
        "socialUserId": null,
        "vipRights": {
          "associator": {},
          "musicPackage": {},
          "redplus": null,
          "redVipAnnualCount": 0,
          "redVipLevel": 0
        },
        "nickname": "string",
        "authStatus": 0,
        "expertTags": null,
        "experts": null,
        "vipType": 0,
        "userId": 0,
        "target": null
      },
      "beReplied": [
        {
          "user": {
            "locationInfo": null,
            "liveInfo": null,
            "anonym": null,
            "commonIdentity": null,
            "avatarUrl": null,
            "avatarDetail": null,
            "userType": null,
            "followed": null,
            "mutual": null,
            "remarkName": null,
            "socialUserId": null,
            "vipRights": null,
            "nickname": null,
            "authStatus": null,
            "expertTags": null,
            "experts": null,
            "vipType": null,
            "userId": null,
            "target": null
          },
          "beRepliedCommentId": 0,
          "content": "string",
          "richContent": null,
          "status": 0,
          "expressionUrl": null,
          "ipLocation": {
            "ip": null,
            "location": null,
            "userId": null
          }
        }
      ],
      "pendantData": {
        "id": 0,
        "imageUrl": "string"
      },
      "showFloorComment": null,
      "status": 0,
      "commentId": 0,
      "content": "string",
      "richContent": "string",
      "contentResource": null,
      "time": 0,
      "timeStr": "string",
      "needDisplayTime": true,
      "likedCount": 0,
      "expressionUrl": null,
      "commentLocationType": 0,
      "parentCommentId": 0,
      "decoration": {},
      "repliedMark": null,
      "grade": null,
      "userBizLevels": null,
      "ipLocation": {
        "ip": null,
        "location": "string",
        "userId": 0
      },
      "owner": true,
      "liked": true
    }
  ],
  "total": 0,
  "more": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» isMusician|boolean|true|none||none|
|» cnum|integer|true|none||none|
|» userId|integer|true|none||none|
|» topComments|[string]|true|none||none|
|» moreHot|boolean|true|none||none|
|» hotComments|[object]|true|none||none|
|»» user|object|true|none||none|
|»»» locationInfo|null|true|none||none|
|»»» liveInfo|null|true|none||none|
|»»» anonym|integer|true|none||none|
|»»» commonIdentity|null|true|none||none|
|»»» avatarUrl|string|true|none||none|
|»»» avatarDetail|object¦null|true|none||none|
|»»»» userType|integer|true|none||none|
|»»»» identityLevel|integer|true|none||none|
|»»»» identityIconUrl|string|true|none||none|
|»»» userType|integer|true|none||none|
|»»» followed|boolean|true|none||none|
|»»» mutual|boolean|true|none||none|
|»»» remarkName|null|true|none||none|
|»»» socialUserId|null|true|none||none|
|»»» vipRights|object¦null|true|none||none|
|»»»» associator|object|true|none||none|
|»»»»» vipCode|integer|true|none||none|
|»»»»» rights|boolean|true|none||none|
|»»»»» iconUrl|string|true|none||none|
|»»»» musicPackage|object|true|none||none|
|»»»»» vipCode|integer|true|none||none|
|»»»»» rights|boolean|true|none||none|
|»»»»» iconUrl|string|true|none||none|
|»»»» redplus|null|true|none||none|
|»»»» redVipAnnualCount|integer|true|none||none|
|»»»» redVipLevel|integer|true|none||none|
|»»» nickname|string|true|none||none|
|»»» authStatus|integer|true|none||none|
|»»» expertTags|[string]¦null|true|none||none|
|»»» experts|null|true|none||none|
|»»» vipType|integer|true|none||none|
|»»» userId|integer|true|none||none|
|»»» target|null|true|none||none|
|»» beReplied|[string]|true|none||none|
|»» pendantData|object¦null|true|none||none|
|»»» id|integer|true|none||none|
|»»» imageUrl|string|true|none||none|
|»» showFloorComment|null|true|none||none|
|»» status|integer|true|none||none|
|»» commentId|integer|true|none||none|
|»» content|string|true|none||none|
|»» richContent|null|true|none||none|
|»» contentResource|null|true|none||none|
|»» time|integer|true|none||none|
|»» timeStr|string|true|none||none|
|»» needDisplayTime|boolean|true|none||none|
|»» likedCount|integer|true|none||none|
|»» expressionUrl|null|true|none||none|
|»» commentLocationType|integer|true|none||none|
|»» parentCommentId|integer|true|none||none|
|»» decoration|null|true|none||none|
|»» repliedMark|null|true|none||none|
|»» grade|null|true|none||none|
|»» userBizLevels|null|true|none||none|
|»» ipLocation|object|true|none||none|
|»»» ip|null|true|none||none|
|»»» location|string|true|none||none|
|»»» userId|null|true|none||none|
|»» owner|boolean|true|none||none|
|»» liked|boolean|true|none||none|
|» commentBanner|null|true|none||none|
|» code|integer|true|none||none|
|» comments|[object]|true|none||none|
|»» user|object|true|none||none|
|»»» locationInfo|null|true|none||none|
|»»» liveInfo|null|true|none||none|
|»»» anonym|integer|true|none||none|
|»»» commonIdentity|null|true|none||none|
|»»» avatarUrl|string|true|none||none|
|»»» avatarDetail|null|true|none||none|
|»»» userType|integer|true|none||none|
|»»» followed|boolean|true|none||none|
|»»» mutual|boolean|true|none||none|
|»»» remarkName|null|true|none||none|
|»»» socialUserId|null|true|none||none|
|»»» vipRights|object|true|none||none|
|»»»» associator|object¦null|true|none||none|
|»»»»» vipCode|integer|true|none||none|
|»»»»» rights|boolean|true|none||none|
|»»»»» iconUrl|string|true|none||none|
|»»»» musicPackage|object¦null|true|none||none|
|»»»»» vipCode|integer|true|none||none|
|»»»»» rights|boolean|true|none||none|
|»»»»» iconUrl|string|true|none||none|
|»»»» redplus|null|true|none||none|
|»»»» redVipAnnualCount|integer|true|none||none|
|»»»» redVipLevel|integer|true|none||none|
|»»» nickname|string|true|none||none|
|»»» authStatus|integer|true|none||none|
|»»» expertTags|null|true|none||none|
|»»» experts|null|true|none||none|
|»»» vipType|integer|true|none||none|
|»»» userId|integer|true|none||none|
|»»» target|null|true|none||none|
|»» beReplied|[object]|true|none||none|
|»»» user|object|true|none||none|
|»»»» locationInfo|null|true|none||none|
|»»»» liveInfo|null|true|none||none|
|»»»» anonym|integer|true|none||none|
|»»»» commonIdentity|null|true|none||none|
|»»»» avatarUrl|string|true|none||none|
|»»»» avatarDetail|null|true|none||none|
|»»»» userType|integer|true|none||none|
|»»»» followed|boolean|true|none||none|
|»»»» mutual|boolean|true|none||none|
|»»»» remarkName|null|true|none||none|
|»»»» socialUserId|null|true|none||none|
|»»»» vipRights|null|true|none||none|
|»»»» nickname|string|true|none||none|
|»»»» authStatus|integer|true|none||none|
|»»»» expertTags|null|true|none||none|
|»»»» experts|null|true|none||none|
|»»»» vipType|integer|true|none||none|
|»»»» userId|integer|true|none||none|
|»»»» target|null|true|none||none|
|»»» beRepliedCommentId|integer|true|none||none|
|»»» content|string|true|none||none|
|»»» richContent|null|true|none||none|
|»»» status|integer|true|none||none|
|»»» expressionUrl|null|true|none||none|
|»»» ipLocation|object|true|none||none|
|»»»» ip|null|true|none||none|
|»»»» location|string|true|none||none|
|»»»» userId|integer¦null|true|none||none|
|»» pendantData|object¦null|true|none||none|
|»»» id|integer|true|none||none|
|»»» imageUrl|string|true|none||none|
|»» showFloorComment|null|true|none||none|
|»» status|integer|true|none||none|
|»» commentId|integer|true|none||none|
|»» content|string|true|none||none|
|»» richContent|string¦null|true|none||none|
|»» contentResource|null|true|none||none|
|»» time|integer|true|none||none|
|»» timeStr|string|true|none||none|
|»» needDisplayTime|boolean|true|none||none|
|»» likedCount|integer|true|none||none|
|»» expressionUrl|null|true|none||none|
|»» commentLocationType|integer|true|none||none|
|»» parentCommentId|integer|true|none||none|
|»» decoration|object|true|none||none|
|»» repliedMark|null|true|none||none|
|»» grade|null|true|none||none|
|»» userBizLevels|null|true|none||none|
|»» ipLocation|object|true|none||none|
|»»» ip|null|true|none||none|
|»»» location|string|true|none||none|
|»»» userId|integer|true|none||none|
|»» owner|boolean|true|none||none|
|»» liked|boolean|true|none||none|
|» total|integer|true|none||none|
|» more|boolean|true|none||none|

## GET 发表评论

GET /comment

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|t|query|string| 否 |none|
|type|query|string| 否 |none|
|id|query|string| 否 |none|
|content|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": null,
  "debugInfo": null,
  "data": null,
  "failData": null,
  "msg": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|null|true|none||none|
|» debugInfo|null|true|none||none|
|» data|null|true|none||none|
|» failData|null|true|none||none|
|» msg|null|true|none||none|

## GET 音乐Src

GET /song/url/v1

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |none|
|level|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 歌曲详情

GET /song/detail

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|ids|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "songs": [
    {
      "name": "string",
      "id": 0,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 0,
          "name": "string",
          "tns": [
            "string"
          ],
          "alias": [
            "string"
          ]
        }
      ],
      "alia": [
        "string"
      ],
      "pop": 0,
      "st": 0,
      "rt": "string",
      "fee": 0,
      "v": 0,
      "crbt": null,
      "cf": "string",
      "al": {
        "id": 0,
        "name": "string",
        "picUrl": "string",
        "tns": [
          "string"
        ],
        "pic_str": "string",
        "pic": 0
      },
      "dt": 0,
      "h": {
        "br": 0,
        "fid": 0,
        "size": 0,
        "vd": 0,
        "sr": 0
      },
      "m": {
        "br": 0,
        "fid": 0,
        "size": 0,
        "vd": 0,
        "sr": 0
      },
      "l": {
        "br": 0,
        "fid": 0,
        "size": 0,
        "vd": 0,
        "sr": 0
      },
      "sq": {
        "br": 0,
        "fid": 0,
        "size": 0,
        "vd": 0,
        "sr": 0
      },
      "hr": {
        "br": 0,
        "fid": 0,
        "size": 0,
        "vd": 0,
        "sr": 0
      },
      "a": null,
      "cd": "string",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [
        "string"
      ],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 0,
      "songJumpInfo": null,
      "entertainmentTags": null,
      "awardTags": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mv": 0,
      "mst": 0,
      "cp": 0,
      "publishTime": 0
    }
  ],
  "privileges": [
    {
      "id": 0,
      "fee": 0,
      "payed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": true,
      "maxbr": 0,
      "fl": 0,
      "toast": true,
      "flag": 0,
      "preSell": true,
      "playMaxbr": 0,
      "downloadMaxbr": 0,
      "maxBrLevel": "string",
      "playMaxBrLevel": "string",
      "downloadMaxBrLevel": "string",
      "plLevel": "string",
      "dlLevel": "string",
      "flLevel": "string",
      "rscl": null,
      "freeTrialPrivilege": {
        "resConsumable": true,
        "userConsumable": true,
        "listenType": null
      },
      "chargeInfoList": [
        {
          "rate": 0,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 0
        }
      ]
    }
  ],
  "code": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» songs|[object]|true|none||none|
|»» name|string|false|none||none|
|»» id|integer|false|none||none|
|»» pst|integer|false|none||none|
|»» t|integer|false|none||none|
|»» ar|[object]|false|none||none|
|»»» id|integer|false|none||none|
|»»» name|string|false|none||none|
|»»» tns|[string]|false|none||none|
|»»» alias|[string]|false|none||none|
|»» alia|[string]|false|none||none|
|»» pop|integer|false|none||none|
|»» st|integer|false|none||none|
|»» rt|string|false|none||none|
|»» fee|integer|false|none||none|
|»» v|integer|false|none||none|
|»» crbt|null|false|none||none|
|»» cf|string|false|none||none|
|»» al|object|false|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» picUrl|string|true|none||none|
|»»» tns|[string]|true|none||none|
|»»» pic_str|string|true|none||none|
|»»» pic|integer|true|none||none|
|»» dt|integer|false|none||none|
|»» h|object|false|none||none|
|»»» br|integer|true|none||none|
|»»» fid|integer|true|none||none|
|»»» size|integer|true|none||none|
|»»» vd|integer|true|none||none|
|»»» sr|integer|true|none||none|
|»» m|object|false|none||none|
|»»» br|integer|true|none||none|
|»»» fid|integer|true|none||none|
|»»» size|integer|true|none||none|
|»»» vd|integer|true|none||none|
|»»» sr|integer|true|none||none|
|»» l|object|false|none||none|
|»»» br|integer|true|none||none|
|»»» fid|integer|true|none||none|
|»»» size|integer|true|none||none|
|»»» vd|integer|true|none||none|
|»»» sr|integer|true|none||none|
|»» sq|object|false|none||none|
|»»» br|integer|true|none||none|
|»»» fid|integer|true|none||none|
|»»» size|integer|true|none||none|
|»»» vd|integer|true|none||none|
|»»» sr|integer|true|none||none|
|»» hr|object|false|none||none|
|»»» br|integer|true|none||none|
|»»» fid|integer|true|none||none|
|»»» size|integer|true|none||none|
|»»» vd|integer|true|none||none|
|»»» sr|integer|true|none||none|
|»» a|null|false|none||none|
|»» cd|string|false|none||none|
|»» no|integer|false|none||none|
|»» rtUrl|null|false|none||none|
|»» ftype|integer|false|none||none|
|»» rtUrls|[string]|false|none||none|
|»» djId|integer|false|none||none|
|»» copyright|integer|false|none||none|
|»» s_id|integer|false|none||none|
|»» mark|integer|false|none||none|
|»» originCoverType|integer|false|none||none|
|»» originSongSimpleData|null|false|none||none|
|»» tagPicList|null|false|none||none|
|»» resourceState|boolean|false|none||none|
|»» version|integer|false|none||none|
|»» songJumpInfo|null|false|none||none|
|»» entertainmentTags|null|false|none||none|
|»» awardTags|null|false|none||none|
|»» single|integer|false|none||none|
|»» noCopyrightRcmd|null|false|none||none|
|»» rtype|integer|false|none||none|
|»» rurl|null|false|none||none|
|»» mv|integer|false|none||none|
|»» mst|integer|false|none||none|
|»» cp|integer|false|none||none|
|»» publishTime|integer|false|none||none|
|» privileges|[object]|true|none||none|
|»» id|integer|false|none||none|
|»» fee|integer|false|none||none|
|»» payed|integer|false|none||none|
|»» st|integer|false|none||none|
|»» pl|integer|false|none||none|
|»» dl|integer|false|none||none|
|»» sp|integer|false|none||none|
|»» cp|integer|false|none||none|
|»» subp|integer|false|none||none|
|»» cs|boolean|false|none||none|
|»» maxbr|integer|false|none||none|
|»» fl|integer|false|none||none|
|»» toast|boolean|false|none||none|
|»» flag|integer|false|none||none|
|»» preSell|boolean|false|none||none|
|»» playMaxbr|integer|false|none||none|
|»» downloadMaxbr|integer|false|none||none|
|»» maxBrLevel|string|false|none||none|
|»» playMaxBrLevel|string|false|none||none|
|»» downloadMaxBrLevel|string|false|none||none|
|»» plLevel|string|false|none||none|
|»» dlLevel|string|false|none||none|
|»» flLevel|string|false|none||none|
|»» rscl|null|false|none||none|
|»» freeTrialPrivilege|object|false|none||none|
|»»» resConsumable|boolean|true|none||none|
|»»» userConsumable|boolean|true|none||none|
|»»» listenType|null|true|none||none|
|»» chargeInfoList|[object]|false|none||none|
|»»» rate|integer|true|none||none|
|»»» chargeUrl|null|true|none||none|
|»»» chargeMessage|null|true|none||none|
|»»» chargeType|integer|true|none||none|
|» code|integer|true|none||none|

# 数据模型

