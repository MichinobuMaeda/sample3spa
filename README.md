Sample 3 SPA
=====

[Vuetify](https://vuetifyjs.com/ja/)
による SPA ( Single Page Application ) のサンプル。

[Quasar](https://quasar.dev/)
で作成した
[Sample 2 SPA](https://github.com/MichinobuMaeda/sample2spa)
を Vuetify に置き換えた。

## 開発環境

### Node.js とグローバル・パッケージ

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

$ yarn add @vue/composition-api axios
$ git init
$ git add .
$ git commit -m "first commit"
$ git remote add origin git@github.com:MichinobuMaeda/sample3spa.git
$ git push -u origin master
```

[Sample 1 API](https://github.com/MichinobuMaeda/sample1api)
を起動しておく。

```shell script
$ git clone git@github.com:MichinobuMaeda/sample1api.git
$ cd sample1api
$ php -S 0.0.0.0:8000 -t public
```

Sample 2 SPA を起動する。

```shell script
$ git clone git@github.com:MichinobuMaeda/sample2spa.git
$ cd sample2spa
$ quasar dev
```

## プロジェクトの作成手順

``quasar create`` のオプションはすべてデフォルトを選択する。

```
$ quasar create sample2spa
$ cd sample2spa
$ git init
$ git add .
$ git commit -m "First commit"
$ git remote add origin git@github.com:MichinobuMaeda/sample2spa.git
$ git push -u origin master
$ yarn add @vue/composition-api
$ yarn add axios
```
