#gulpを使ってsassをcssにコンパイルするための手順
gulpはタスクランナーであり、様々な処理を自動化してくれます。今回はsassを自動的にcssにコンパイルするような環境を作成していきます。

##まずnode-sassを動作させるために必要なNode.jsをインストールする
今回は最新版をインストールします。
[Node.jsのインストールリンク](https://nodejs.org/)

インストールが完了したらコマンドをターミナルで入力してNode.jsがインストールされているかを確認する。
```
$ node -v
```

##セットアップ済みのファイルをインストールする
githubにあげているgulpfile.jsとpackage.jsonをインストールしてください。
インストールできたら3つのファイルを自分の好きなディレクトリの中に格納してください。
そしてそのファイルまで移動します。(今回はsampleという名のディレクトリ名にしました。)
```
$ cd sample
```

##セットアップ済みの環境をインストールする
まずはnpmコマンドで「gulp-cli」をグローバルインストールします。
```
$ npm install --global gulp-cli
$ gulp -v
```

gulp -v　でバージョンが確認できれば成功です。

##一括でセットアップしている内容をインストールする
```
$ npm install
```

##sassをコンパイルする
作成したsampleディレクトリにsassフォルダを作り、.scssファイルを作成します。
ファイル内に記載できたらコンパイルします。
```
$ gulp keiryoWatch
```
コンパイルされるとdist/cssの中にコンパイルされたcssファイルがあります。
