# Komonjo

SlackのログをストックするためのWEBアプリ


## Usage

準備中

## Setup

ruby + bundlerとnode + npmが必要です。  
またSlackのAPI tokenが必要です。  
[Slack Web API | Slack](https://api.slack.com/web)

```
$ bundle
$ npm i
$ vim .env
KOMONJO_SLACK_API_TOKEN=xoxp-XXXXXXXXXXXX
$ npm run dev
$ bin/rails s
```

## Development

### Trouble shooting

1. 初っ端から動かないんだけど
  - `npm i` してみてください
  - `bundle install` してみてください
  - `npm run dev` と `bin/rails s` をやっていなかったらやってください
    - komonjo-railsは2つのサーバ両方が動いてないとうごきません
1. pullしてきたら動かないんだけど
  - `npm i` してみてください
    - package.jsonに変更があった場合、npmモジュールを再度インストールする必要があるかもしれません
  - `bundle install` してみてください
    - GemfileあるいはGemfile.lockに変更があった場合、gemを再度インストールする必要があるかもしれません
