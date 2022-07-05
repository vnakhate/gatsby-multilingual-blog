const translations = {
  index: {
    description: {
      en: `Hello world. This is Multilingual Blog. you can switch languages clicking the top-right button.`,
      ja: `ハローワールド。これは多言語対応ブログです。右上のボタンで言語をスイッチすることが可能です。`,
    },
  },
}

const ja = {}
const en = {}

for (let k1 of Object.keys(translations)) {
  for (let k2 of Object.keys(translations[k1])) {
    if (!ja[k1]) ja[k1] = {}
    if (!en[k1]) en[k1] = {}
    ja[k1][k2] = translations[k1][k2]['ja']
    en[k1][k2] = translations[k1][k2]['en']
  }
}

const fs = require('fs')

const en_path = `${__dirname}/en/translation.json`
const ja_path = `${__dirname}/ja/translation.json`

const cb = (path) => {
  return (err) => {
    if (err) console.log(err)
    else console.log('export translation file -> ', path)
  }
}

fs.writeFile(en_path, JSON.stringify(en), cb(en_path))
fs.writeFile(ja_path, JSON.stringify(ja), cb(ja_path))
