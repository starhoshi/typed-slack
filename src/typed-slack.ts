import * as rp from 'request-promise'

export interface Feild {
  title: string
  value: string
  short?: boolean
}

export enum Color {
  Good = 'good',
  Warning = 'warning',
  Danger = 'danger'
}

export interface Attachment {
  fallback?: string
  color?: Color | string
  pretext?: string
  author_name?: string
  author_link?: string
  author_icon?: string
  title?: string
  title_link?: string
  text?: string
  fields?: Feild[]
  image_url?: string
  thumb_url?: string
  footer?: string
  footer_icon?: string
  ts?: number
}

export interface WebhookOptions {
  text?: string
  channel?: string
  username?: string
  icon_emoji?: string
  icon_url?: string
  link_names?: 0 | 1
  attachments?: Attachment[]
}

export class Webhook {
  url: string

  constructor(url: string) {
    this.url = url
  }

  send(options: WebhookOptions) {
    return rp({
      method: 'POST',
      uri: this.url,
      body: options,
      json: true
    })
  }
}
