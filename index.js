const arvish = require('arvish')
const entities = require('entities')

const input = arvish.input

if (input) {
  const encoded = entities.encodeHTML(input)
  const decoded = entities.decodeHTML(input)

  arvish.output([
    {
      title: encoded,
      subtitle: 'encode result',
      arg: encoded
    },
    {
      title: decoded,
      subtitle: 'decode result',
      arg: decoded
    }
  ])
}