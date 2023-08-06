// Style your elements here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
`
export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  box-shadow: ${props => props.shadow};
  padding: ${props => props.padding};
  flex-wrap: ${props => props.wrap};
  width: ${props => props.width};
  margin: ${props => props.margin};
`
export const Unordered = styled.ul`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  box-shadow: ${props => props.shadow};
  padding: ${props => props.padding};
  flex-wrap: ${props => props.wrap};
  width: ${props => props.width};
  margin: ${props => props.margin};
`
export const Form = styled.form`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  box-shadow: ${props => props.shadow};
  padding: ${props => props.padding};
  flex-wrap: ${props => props.wrap};
  width: ${props => props.width};
  margin: ${props => props.margin};
`
export const CustomInput = styled.input`
  margin-bottom: 40px;
  border-style: none;
  width: 800px;
  outline: none;
`

export const CustomTextArea = styled.textarea`
  border-style: none;
  outline: none;
  height: 80px;
`
export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  height: 40px;
  width: 100px;
  border-radius: 5px;
  cursor: pointer;
  border-style: none;
  outline: none;
  align-self: flex-end;
  margin: 20px;
`
export const CustomImg = styled.img`
  height: 100px;
`

export const Para = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
`
