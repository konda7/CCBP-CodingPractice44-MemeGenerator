import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`

export const FormContainer = styled.div`
  width: 45%;
  padding-left: 150px;
`

export const MainHeading = styled.h1`
  font-family: 'Open Sans';
  font-size: 40px;
  color: #35469c;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  margin-bottom: 20px;
`

export const LabelText = styled.label`
  font-size: 15px;
  color: #5a7184;
  margin-bottom: 7px;
`

export const UserInput = styled.input`
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  outline: none;
`

export const FontSizeDropDown = styled.select`
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 15px 40px;
  background-color: #0b69ff;
  cursor: pointer;
`

export const MemeContainer = styled.div`
  width: 35%;
  height: 410px;
  background-image: url(${props => props.bgImage});
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const MemeText = styled.p`
  font-family: 'Roboto';
  font-size: ${props => props.size}px;
  color: #fff;
  margin: 0;
`
