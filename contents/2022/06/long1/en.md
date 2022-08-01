---
title: Very very long English blog title. It is too long to display
date: "2022-06-20T20:08:00.000Z"
cover: "./cover.jpg"
tags: ["unique", "berlin", "label", "react", "tag1", "development", "css"]
description: "this is description"
---

This is the content of English blog post.  
You can read this post in different language, click the language toggle button!

## Heading & emphasize & Heading & emphasize & Heading & emphasize & Heading & emphasize

To declare heading tag, put '\#' right before the word. \#\# for \<h2>, \#\#\# for \<h3>. From h2 to h6 are available and they should be used by order in the article. Only avoid h1 tag, that's for article title. 

Write paragraph with *emphasized* word and **strong** word.  
use \*LETTER\* for emphasize and \*\*LETTER\*\* for strong.


## BlockQuotes

> This is blockquotes

## Lists

<p class="subtitle">List</p>

1. first
2. second
3. third

<p class="subtitle">Nested list</p>

- first
  - nested 1
  - nested 2
  - nested 3
- second
  - nested 4
  - nested 5
- third

## Subtitles

**Subtitle with \<strong> tag**  
You can use strong \*\*LETTER\*\* tag as subtitle. Do not put space under subtitle otherwise it's recognised independent \<p> tag. Use line break.

<p class="subtitle">Subtitle with &#60;p> tag</p> 

*\<p class="subtitle">* is also available to make subtitle. In this case, make sure to put space under subtitle.


## Table

|            | Frontend | Backend |
|------------|----------|---------|
| Javascript | ✅        | ✅       |  
| Go         | ❌        | ✅       |
| Python | ❌         | ✅        |

| Good                                                                                      | Bad                                                                                            |
|-------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| <br/> Now is the winter of our discontent Made glorious summer by this sun of York. <br/><br/> | <br/>But I, that am not shaped for sportive tricks,Nor made to court an amorous looking-glass.<br/><br/> |

## Horizontal line

---

## With Image
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
![mountain](./img1.jpg)
Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 


Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

## Highlight
```js {4-6}
// index.js
import React from 'react'

const Component = () => {
  return <div>Hello World</div>
}

export default Component
```

## Diff
```diff
- interface {
-   id: number
- }

long code sample. long code sample. long code sample. long code sample. long code sample. long code sample. long code sample. long code sample. long code sample. 

+ type Props = {
+   className?: string    
+ }
```
