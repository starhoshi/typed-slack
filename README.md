<p align="center">
    <img src="https://raw.githubusercontent.com/starhoshi/typed-slack/master/docs/logo.png" width='200px' />
</p>

# typed-slack [![npm version](https://badge.fury.io/js/typed-slack.svg)](https://badge.fury.io/js/typed-slack) [![Build Status](https://travis-ci.org/starhoshi/typed-slack.svg?branch=master)](https://travis-ci.org/starhoshi/typed-slack) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/c7a8f750afbd40019c5c4f859dd64d19)](https://www.codacy.com/app/kensuke1751/typed-slack?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=starhoshi/typed-slack&amp;utm_campaign=Badge_Grade) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)


Typed-slack is a type-safe slack client for TypeScript.

[slackapi/node\-slack\-sdk](https://github.com/slackapi/node-slack-sdk) is great slack client. However, it does not contain d.ts files. Typed-slack has type definitions, so you can handle slack-api easily and type-safely.

Code completion is enabled when using VSCode.

![vscode\.gif \(898×298\)](https://raw.githubusercontent.com/starhoshi/typed-slack/master/docs/vscode.gif)

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

#### Use options

More optional parameters are [here#typed\-slack\.d\.ts](https://github.com/starhoshi/typed-slack/blob/master/out/typed-slack.d.ts)

```ts
const options = <Slack.IncomingWebhookOptions>{
  text: '@star__hoshi Hi!',
  channel: 'debug',
  icon_emoji: ':smile:',
  link_names: 1,
  attachments: [
    {
      color: Slack.Color.Danger,
      fields: [
        {
          title: 'Priority',
          value: 'High',
          short: false
        }
      ],
      image_url: 'http://my-website.com/path/to/image.jpg',
      ts: 123456789
    }
  ]
}
await slack.send(options)
```
