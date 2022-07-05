import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { BlogPostNode } from '../providers/types/blogPostNode'

type Props = {
  className?: string
  data: BlogPostNode
  navigate: any
}

type ComponentProps = Props & {
  imageURL: IGatsbyImageData
  navigate: any
}

const Component = ({ className, data, imageURL, navigate }: ComponentProps) => (
  <div
    className={className}
    key={data.id}
    onClick={() => navigate(data.fields.path, { language: data.fields.language })}
  >
    <GatsbyImage alt={'cover'} image={imageURL} objectFit={'cover'} />
    <div>{data.frontmatter.title}</div>
  </div>
)

const StyledComponent = styled(Component)`
  max-width: 400px;
  cursor: pointer;
`

export const BlogThumbnailCard = (props: Props) => {
  const imageURL = getImage(props.data.frontmatter.cover)!

  return <StyledComponent {...props} imageURL={imageURL} navigate={props.navigate} />
}
