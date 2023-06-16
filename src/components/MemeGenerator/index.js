import {Component} from 'react'

import {
  AppContainer,
  FormContainer,
  UserInput,
  InputContainer,
  LabelText,
  FontSizeDropDown,
  MainHeading,
  GenerateButton,
  MemeContainer,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeFontSize = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  renderFontSizeInput = () => {
    const {activeFontSizeOptionId} = this.state
    return (
      <InputContainer>
        <LabelText htmlFor="fontSizeDropDown">Font Size</LabelText>
        <FontSizeDropDown
          id="fontSizeDropDown"
          onChange={this.onChangeFontSize}
          defaultValue={activeFontSizeOptionId}
        >
          {fontSizesOptionsList.map(eachOption => (
            <option key={eachOption.optionId}>{eachOption.displayText}</option>
          ))}
        </FontSizeDropDown>
      </InputContainer>
    )
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  renderBottomTextInput = () => {
    const {bottomTextInput} = this.state
    return (
      <InputContainer>
        <LabelText htmlFor="bottomText">Bottom Text</LabelText>
        <UserInput
          type="text"
          placeholder="Enter the Bottom Text"
          defaultValue={bottomTextInput}
          onChange={this.onChangeBottomText}
          id="bottomText"
        />
      </InputContainer>
    )
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  renderTopTextInput = () => {
    const {topTextInput} = this.state
    return (
      <InputContainer>
        <LabelText htmlFor="topText">Top Text</LabelText>
        <UserInput
          type="text"
          placeholder="Enter the Top Text"
          defaultValue={topTextInput}
          onChange={this.onChangeTopText}
          id="topText"
        />
      </InputContainer>
    )
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  renderImageUrlInput = () => {
    const {imageUrlInput} = this.state
    return (
      <InputContainer>
        <LabelText htmlFor="imageUrl">Image URL</LabelText>
        <UserInput
          type="text"
          placeholder="Enter the image URL"
          defaultValue={imageUrlInput}
          onChange={this.onChangeImageUrl}
          id="imageUrl"
        />
      </InputContainer>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {
      activeFontSizeOptionId,
      imageUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state
    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: activeFontSizeOptionId,
    })
  }

  renderForm = () => (
    <form onSubmit={this.onSubmitForm}>
      <MainHeading>Meme Generator</MainHeading>
      {this.renderImageUrlInput()}
      {this.renderTopTextInput()}
      {this.renderBottomTextInput()}
      {this.renderFontSizeInput()}
      <GenerateButton type="submit">Generate</GenerateButton>
    </form>
  )

  renderMeme = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <MemeContainer data-testid="meme" bgImage={imageUrl}>
        <MemeText size={fontSize}>{topText}</MemeText>
        <MemeText size={fontSize}>{bottomText}</MemeText>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <FormContainer>{this.renderForm()}</FormContainer>
        {this.renderMeme()}
      </AppContainer>
    )
  }
}

export default MemeGenerator
