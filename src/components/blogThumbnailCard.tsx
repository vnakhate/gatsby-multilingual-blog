import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { BlogPostNode } from '../providers/types/blogPostNode'

type Props = {
  className?: string
  data: BlogPostNode
}

type ComponentProps = Props & {
  imageURL: IGatsbyImageData
}

const Component = ({ className, data, imageURL }: ComponentProps) => (
  <Link to={data.fields.path} language={data.fields.language}>
    <div className={className}>
      <GatsbyImage alt={'cover'} image={imageURL} objectFit={'cover'} />
      <div>{data.frontmatter.title}</div>
    </div>
  </Link>
)

const StyledComponent = styled(Component)`
  max-width: 400px;
  cursor: pointer;
`

export const BlogThumbnailCard = (props: Props) => {
  const imageURL = getImage(props.data.frontmatter.cover)!

  return <StyledComponent {...props} imageURL={imageURL} />
}
