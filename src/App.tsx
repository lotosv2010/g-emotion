// import styled from '@emotion/styled';
import styled from '../@emotion/styled';

const color = `white`
const bgColor = `hotpink`

const Div = styled.div({
  padding: 32,
  backgroundColor: bgColor,
  fontSize: 24,
  borderRadius: 4,
  '&:hover': {
    color
  }
})

const AnotherComp = styled.div`
color: ${(props: any) => props.color};
`

function App() {

  return <Div>
    Hello Emotion
    <AnotherComp color='green'>Another Comp</AnotherComp>
  </Div>
}

export default App
