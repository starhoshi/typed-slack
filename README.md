<p align="center">
    <img src="https://raw.githubusercontent.com/starhoshi/typed-slack/master/docs/logo.png" width='200px' />
</p>

# typed-slack

Typed-slack is a type-safe slack client for TypeScript.

[slackapi/node\-slack\-sdk](https://github.com/slackapi/node-slack-sdk) is great slack client. However, this library do not contain d.ts files. Typed-slack has type definitions, so you can write type-safe.

## TODO

* [x] Incoming Webhook
* [ ] Web API
* [ ] RTM API
* [ ] Events API
* [ ] Interactive Messages

## Install

```
npm install typed-slack
```

## Usage

### Webhook

```ts
import * as Slack from 'typed-slack'

let slack = new Slack.IncomingWebhook('https://hooks.slack.com/services/.......')
try {
  await slack.send({ text: 'text' })
} catch (e) {
  console.error(e)
}
```
