import React from 'react'
import Portfolio from './Portfolio'
import styled from 'styled-components'
import Promos from './Promos'

const Main = () => {
  return (
    <Wrapper>
        <Portfolio />
        <Promos />
    </Wrapper>
  )
}

export default Main
const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: scroll;
  & div {
    border-radius: 0.4rem;
  }
  `