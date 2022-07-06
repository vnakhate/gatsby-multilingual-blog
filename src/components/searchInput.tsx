import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  onInputType?: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchInput?: string
}

const Component = ({ className, onInputType, searchInput }: Props) => (
  <div className={className}>
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 489.713 489.713"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M483.4,454.444l-121.3-121.4c28.7-35.2,46-80,46-128.9c0-112.5-91.5-204.1-204.1-204.1S0,91.644,0,204.144
		s91.5,204,204.1,204c48.8,0,93.7-17.3,128.9-46l121.3,121.3c8.3,8.3,20.9,8.3,29.2,0S491.8,462.744,483.4,454.444z M40.7,204.144
		c0-90.1,73.2-163.3,163.3-163.3s163.4,73.3,163.4,163.4s-73.3,163.4-163.4,163.4S40.7,294.244,40.7,204.144z"
        />
      </g>
    </svg>
    <input placeholder={'type keyword'} value={searchInput} onChange={onInputType} />
  </div>
)

export const SearchInput = styled(Component)`
  position: relative;

  > svg {
    position: absolute;
    top: 12px;
    left: 10px;
    height: 17px;
  }

  > input {
    width: 100%;
    height: 40px;

    padding: 0 16px 0 32px;

    background-color: hsl(0, 0%, 99%);
    border: none;
    border: 1px solid hsl(0, 0%, 70%);
    border-radius: 12px;

    letter-spacing: 0.08rem;
    font-size: 1.6rem;

    ::placeholder {
      color: hsl(0, 0%, 80%);
    }
  }
`