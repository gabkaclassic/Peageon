const base64Util = require('js-base64').Base64;

export function decode(value) {
    return base64Util.decode(value)
}