<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Gatsby's multilingual blog starter
</h1>

Kick off your project with this boilerplate. This starter ships with the several configuration files you might need to get up and running blazing fast app.

## 🖥️ Minimum starter with some setup

- Typescript
- Styled-component
- i18n
- PWA (optional)
- Testing (Jest)

## 👀 Demo

[Demo Site](https://gatsby-multilingual-blog.netlify.app/)

## ✅ Status

[![Build test](https://github.com/zett-8/gatsby-multilingual-blog/actions/workflows/build-test.yml/badge.svg)](https://github.com/zett-8/gatsby-multilingual-blog/actions/workflows/build-test.yml)　
[![Netlify Status](https://api.netlify.com/api/v1/badges/5e416975-85a6-4d39-bd1a-282f9d0666ca/deploy-status)](https://app.netlify.com/sites/gatsby-multilingual-blog/deploys)

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this repo.

    ```shell
    gatsby new <appname> https://github.com/Zett-8/unbearable-lightness.git
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd <appname>/
    gatsby develop
    ```

1.  **Check on browser**

    The site is now running at `http://localhost:8000`

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🇺🇳 Set available languages

1. **Edit i18nLanguages.ts**
    
    Set available languages and default language. They are automatically applied in the project.

    ```typescript
    // i18nLanguages.ts
   
    export const i18nLanguages: string[] = [`en`, `ja`]
    export const i18nDefaultLanguage: string = `en`
    ```    
    
2. **Write Translations for each language**
    
    Translations should be { key:value } format. It can be deeply nested if necessary.

    ```typescript
    // locales/index.ts
   
    const translations = {
      index: {
        description: {
          en: `Hello world. This is Multilingual Blog. you can switch languages clicking the top-right button.`,
          ja: `ハローワールド。これは多言語対応ブログです。右上のボタンで言語をスイッチすることが可能です。`,
        },
      },
    }
    ```
   
3. **Generate translation.json**

    Usually you need to make translation.json file for each language in locales folder. But in this project, all you need to do is just run command `yarn i18n`

    ```shell
    yarn i18n
    ```

## 🏗️ Component architecture
A component file consists of five layers.

1. Import layer
2. Type layer
3. Component layer (Should be stateless. Only concerned rendering.)
4. Style layer
5. Container layer (Able to have state and logic.)

```tsx
/** 1. Import layer **/
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ChildComponent } from './child-component'

/** 2. Type layer **/
type ContainerProps = {
  className?: string
}

type ComponentProps = {
  className?: string
  someData: any
}

/** 3. Component layer **/
const Component = ({ className, someData }: ComponentProps) => (
  <div className={className}>
    <ChildComponent data={someData} />
  </div>
)

/** 4. Style layer **/
const StyledComponent = styled(Component)`
  width: 100%;
  margin: 16px;
  
  font-size: 2rem;
` 

/** 5. Container layer **/
export const MyComponent = (props: ContainerProps) => {
  const [yourState, setYourState] = useState<string>('')
  
  useEffect(() => {
    // do something here
  }, [])
  
  return <StyledComponent {...props} someData={yourState} />
}
```

## 📝 What's inside?

A quick look at files and directories you'll see in this project.

    .
    ├── .github
    ├── __mocks__
    ├── contents
    ├── locales
    ├── src
    │    ├── components
    │    ├── images
    │    ├── pages
    │    ├── providers
    │    ├── styled
    │    └── templates
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.ts
    ├── gatsby-config.ts
    ├── gatsby-node.ts
    ├── gatsby-ssr.ts
    ├── gatsby-wrapper.tsx
    ├── i18nLanguages.ts
    ├── jest.config.js
    ├── jest-preprocess.js
    ├── LICENSE
    ├── loadershim.js
    ├── package.json
    ├── README.md
    ├── setup-test-env.js
    ├── tsconfig.json
    └── yarn.lock

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<!-- AUTO-GENERATED-CONTENT:END -->
