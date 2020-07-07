Sample 3 SPA
=====

[Vuetify](https://vuetifyjs.com/ja/)
による SPA ( Single Page Application ) のサンプル。

[Quasar](https://quasar.dev/)
で作成した
[Sample 2 SPA](https://github.com/MichinobuMaeda/sample2spa)
を Vuetify に置き換えた。
Quasar の方が高機能だと思って使い始めたが、
Vuetify の方が UI パーツの開発が早いようだ。
ドキュメントも日本語訳されている。

## 開発環境

```shell script
$ node --version
  v14.2.0
$ npm i -g n
$ n 10
$ node --version
  v10.20.1
$ npm --version
  6.14.5
$ npm i -g npm yarn eslint @vue/cli
 ... ... ...
+ yarn@1.22.4
+ @vue/cli@4.4.6
+ eslint@7.4.0
+ npm@6.14.5
```

[Sample 1 API](https://github.com/MichinobuMaeda/sample1api)
の「プロジェクトの利用」の手順で HTTP API を起動しておく。

このプロジェクトのソースを入手して UI を起動する。

```shell script
$ git clone git@github.com:MichinobuMaeda/sample3spa.git
$ cd sample3spa
$ yarn serve
```

### プロジェクトの初期構築

```shell script
$ vue create sample3spa
$ cd sample3spa
$ vue add router
 ? Use history mode for router? (Requires proper server setup
   for index fallback in production) No

$ vue add vuetify
 WARN  There are uncommited changes in the current repository,
 it's recommended to commit or stash them first.
 ? Still proceed? Yes

$ vue add eslint
 WARN  There are uncommited changes in the current repository,
 it's recommended to commit or stash them first.
 ? Still proceed? Yes
 ? Pick an ESLint config: Standardy
 ? Pick additional lint features: Lint on save

$ yarn add @vue/composition-api axios
$ git init
$ git add .
$ git commit -m "first commit"
$ git remote add origin git@github.com:MichinobuMaeda/sample3spa.git
$ git push -u origin master
```
