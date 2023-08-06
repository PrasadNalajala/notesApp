// Write your code here
import {Container, Heading, Para} from './styledComponents'

const NoteItem = props => {
  const {noteItem} = props
  return (
    <Container direction="column" margin="20px">
      <Heading margin="0">{noteItem.title}</Heading>
      <Para margin="0">{noteItem.description}</Para>
    </Container>
  )
}

export default NoteItem
