import React from 'react'
import * as Gatsby from 'gatsby'
import { render } from '@testing-library/react'

beforeEach(() => {
  jest.spyOn(Gatsby, 'useStaticQuery').mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: '',
        description: '',
        author: '',
      },
    },
  }))
})

test('Page is rendered successfully', async () => {
  const { container } = render(
    <div>
      <h1>Hello World</h1>
    </div>
  )
  const res = await container.querySelector('h1')

  expect(res).toHaveTextContent('Hello World')
})
