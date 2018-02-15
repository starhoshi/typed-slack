<p align="center">
    <img src="https://raw.githubusercontent.com/starhoshi/typed-slack/master/docs/logo.png" width='200px' />
</p>

# typed-slack [![Build Status](https://travis-ci.org/starhoshi/typed-slack.svg?branch=master)](https://travis-ci.org/starhoshi/typed-slack)

Typed-slack is a type-safe slack client for TypeScript.

[slackapi/node\-slack\-sdk](https://github.com/slackapi/node-slack-sdk) is great slack client. However, it does not contain d.ts files. Typed-slack has type definitions, so you can handle slack-api easily and type-safely.

Type Definisions is [here#typed\-slack\.d\.ts](https://github.com/starhoshi/typed-slack/blob/master/out/typed-slack.d.ts).

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
slack.send({ text: 'text' }).then(e => {
  console.log('success')
}).catch(e => {
  console.error(e)
})
```

If you  attachments

More optional parameter is [here#typed\-slack\.d\.ts](https://github.com/starhoshi/typed-slack/blob/master/out/typed-slack.d.ts)
