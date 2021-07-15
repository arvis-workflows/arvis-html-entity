const arvish = require('arvish')
const Entities = require('html-entities').AllHtmlEntities

const entities = new Entities()

const main = async () => {
  const encodedString = entities.encode(arvish.input)

  arvish.output([{
    title: encodedString,
    subtitle: 'Copy to clipboard.',
    arg: encodedString
  }])
}

main()
