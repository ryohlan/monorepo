# cancellation_chat_form

## 運用環境
StagingとProductionを2つの動作環境があります。
ホスティングはHeoku、CIはWerkerです。

Werkcer(https://app.wercker.com/hideandseek/cancellation_chat_form/runs)

### Stating
`dev` ブランチにPushするとWerckerが走りLintなどのテストが通ればデプロイされます。

Heroku
- dachboard(https://dashboard.heroku.com/apps/cancellation-chat-form-stg)
- URL(https://cancellation-chat-form-stg.herokuapp.com/)

### Production
`master` ブランチにPushするとWerckerが走りLintなどのテストが通ればデプロイされます。

Heroku
- dachboard(https://dashboard.heroku.com/apps/cancellation-chat-form)
- URL(https://cancellation-chat-form.herokuapp.com/)


## Local build

### env=local
```
yarn dev
```

### env=staging
```
yarn build:stg
yarn start
```

### env=production
```
yarn build:production
yarn start
```
