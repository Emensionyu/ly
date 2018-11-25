const path = require('path')
const crypto = require('crypto')
const KEY = '00932636e3644fb29405f1fe4ad3f5a8      '
const USER_ID = 'HE1811232057511845'

const $ = {
  generateSignature: (params) => { //params 为json json.username = 传值是引用式赋值。
    params.username = USER_ID
    let data =
      Object.keys(params)
        .filter((key) => {
          return params[key] !== '' && key !== 'sign' && key !== 'key'
        })
        .sort()
        .map((key) => {
          return `${key}=${params[key]}`
        })
        .join('&') + KEY
    return crypto.createHash('md5').update(data).digest('base64')
  },
}
module.exports = $