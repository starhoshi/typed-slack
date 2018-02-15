"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise");
var Color;
(function (Color) {
    Color["Good"] = "good";
    Color["Warning"] = "warning";
    Color["Danger"] = "danger";
})(Color = exports.Color || (exports.Color = {}));
class IncomingWebhook {
    constructor(url) {
        this.url = url;
    }
    send(options) {
        return rp({
            method: 'POST',
            uri: this.url,
            body: options,
            json: true
        });
    }
}
exports.IncomingWebhook = IncomingWebhook;
