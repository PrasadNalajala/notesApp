// Style your elements here
import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  box-shadow: ${props => props.shadow};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  border-style: solid;
  border-color: #d8d8d8;
  border-width: 1px;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  list-style-type: none;
  overflow: hidden;
  height: 150px;
  width: 240px;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  margin: ${props => props.margin};
`

export const Para = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
`
