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
  link_names?: boolean
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

/**
 * send to slack
 * @param message slack message
 * @param options options
 */
// export const send = async (message: string, options?: { ref?: FirebaseFirestore.DocumentReference, error?: Error, color?: string, channel?: string, overrideFields?: Fields[], appendFields?: Fields[] }) => {
//   let color: string | undefined = undefined
//   let channel: string | undefined = _channel
//   let title: string | undefined = undefined
//   let firURL: string | undefined = undefined
//   let fields: Fields[] = [
//     { title: 'project_id', value: _adminOptions.projectId || 'Unknown', short: true }
//   ]

//   if (options) {
//     color = options.color

//     if (options.ref) {
//       firURL = makeFirestoreUrl(options.ref)
//       title = options.ref.path
//     }

//     if (options.error) {
//       fields.push({ title: 'error', value: options.error.toString() })
//       color = 'danger'
//     }

//     if (options.color) {
//       color = options.color
//     }

//     if (options.overrideFields) {
//       fields = options.overrideFields
//     } else if (options.appendFields) {
//       fields.concat(options.appendFields)
//     }

//     if (options.channel) {
//       channel = options.channel
//     }
//   }

//   const attachments = {
//     title: title,
//     title_link: firURL,
//     color: color,
//     ts: new Date().getTime() / 1000,
//     fields: fields
//   }

//   return rp({
//     method: 'POST',
//     uri: _url,
//     body: {
//       channel: channel,
//       icon_emoji: _iconEmoji,
//       username: _username || 'fire-slack',
//       text: message,
//       attachments: [attachments]
//     },
//     json: true
//   })
// }
