/// <reference types="request-promise" />
import * as rp from 'request-promise';
export interface Feild {
    title: string;
    value: string;
    short?: boolean;
}
export declare enum Color {
    Good = "good",
    Warning = "warning",
    Danger = "danger",
}
export interface Attachment {
    fallback?: string;
    color?: Color | string;
    pretext?: string;
    author_name?: string;
    author_link?: string;
    author_icon?: string;
    title?: string;
    title_link?: string;
    text?: string;
    fields?: Feild[];
    image_url?: string;
    thumb_url?: string;
    footer?: string;
    footer_icon?: string;
    ts?: number;
}
export interface WebhookOptions {
    text?: string;
    channel?: string;
    username?: string;
    icon_emoji?: string;
    link_names?: boolean;
    attachments?: Attachment[];
}
export declare class Webhook {
    url: string;
    constructor(url: string);
    send(options: WebhookOptions): rp.RequestPromise;
}
