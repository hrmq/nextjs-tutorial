import styled from 'styled-components'

const Title = styled.h1`
    font-size: 50px;
    color: ${({theme}) => theme.color.primary }
`
export default function CssJS() {
  return (
    <>
        {/* <h2 style={{color: 'red'}}>hello world</h2> */}
        <Title>Styled Component</Title>
    </>
  )
}
