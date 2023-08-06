// Write your code here
import {useState} from 'react'
import NoteItem from '../NoteItem'
import {v4 as uuidv4} from 'uuid'
import {
  Container,
  Heading,
  CustomInput,
  Button,
  CustomTextArea,
  CustomImg,
  Unordered,
  Form,
  Para,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [noteList, addNote] = useState([])
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeDescription = event => {
    setDescription(event.target.value)
  }
  const onClickAdd = () => {
    const id = uuidv4()
    addNote(prev => [...prev, {title, description, id}])
    setTitle('')
    setDescription('')
  }
  return (
    <Container direction="column" justifyContent="center" alignItems="center">
      <Heading color="#4c63b6" fontFamily="Bree Serif" fontSize="35px">
        Notes
      </Heading>
      <Form
        onSubmit={onClickAdd}
        margin="20px"
        direction="column"
        width="820px"
        padding="20px"
        shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <CustomInput
          onChange={onChangeTitle}
          value={title}
          type="text"
          placeholder="Title"
        />

        <CustomTextArea
          onChange={onChangeDescription}
          value={description}
          type="textarea"
          placeholder="Take a Note..."
        />
        <Button type="submit">Add</Button>
      </Form>
      {noteList.length === 0 ? (
        <Container
          margin="40px"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <CustomImg
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <Heading fontSize="20px" color="#1e293b">
            No Notes Yet
          </Heading>
          <Para margin="0" color="#334155">
            Notes you add will appear here
          </Para>
        </Container>
      ) : (
        <Unordered wrap="wrap" width="800px">
          {noteList.map(each => (
            <NoteItem noteItem={each} key={each.id} />
          ))}
        </Unordered>
      )}
    </Container>
  )
}

export default Notes
