const translations = {
  index: {
    description: {
      en: `Hello world. This is Multilingual Blog. you can switch languages clicking the top-right button.`,
      ja: `ハローワールド。これは多言語対応ブログです。右上のボタンで言語をスイッチすることが可能です。`,
    },
  },
}

import fs from 'fs'
import { i18nLanguages } from '../i18nLanguages'

i18nLanguages.forEach((lang) => {
  const extractRecursive = (lastKey: string, extracting: any, inserting: any) => {
    for (let k of Object.keys(extracting)) {
      if (k === lang) {
        inserting[lastKey] = extracting[k]
        continue
      }

      if (!i18nLanguages.includes(k)) {
        if (lastKey) inserting[lastKey][k] = {}
        else inserting[k] = {}

        extractRecursive(k, extracting[k], lastKey ? inserting[lastKey] : inserting)
      }
    }
  }

  const o = {}

  extractRecursive('', translations, o)

  const path = `${__dirname}/${lang}/translation.json`

  fs.writeFile(path, JSON.stringify(o), (err) => {
    if (err) console.error(err)
    else console.log('export translation file -> ', path)
  })
})
