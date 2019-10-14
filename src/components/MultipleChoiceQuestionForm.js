import React, { Component } from 'react'
import uuid from 'uuid'
import _ from 'lodash'

class MultipleChoiceQuestionForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: this.props.question,
      choices: this.props.choices
    }
  }

  handleCancel = () => this.props.closeForm();

  handleSubmit = () => {
    const { question, choices } = this.state;
    if (this.props.question) {
      this.props.handleUpdate({ question, choices })
    } else {
      console.log('create question')
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleChoiceChange = (e) => {
    const { name, value } = e.target
    // i returns the position of the choices array that's being updated
    const i = _.split(name, '_')[1];
    let new_choices_array = [...this.state.choices]
    new_choices_array[i] = value

    this.setState({ choices: new_choices_array })
  }

  renderEditChoices = () => {
    return this.state.choices.map((choice, i) => (
      <div key={uuid.v4()}>
        <input value={this.state.choices[i]} onChange={this.handleChoiceChange}
          name={`choice_${i}`} placeholder="Choice" type="text" />
        <span onClick={() => this.handleRemoveChoice(i)} className="btn cancel">
          <i className="fas fa-trash"></i>
        </span>
      </div>
    ))
  }

  handleRemoveChoice = (index) => {
    this.setState({
      choices: this.state.choices.filter((_, i) => i !== index)
    })
  }

  handleAddChoice = () => {
    this.setState({
      choices: [...this.state.choices, `example choice ${this.state.choices.length + 1}`]
    })
  }

  render() {
    return (
      <form className="flex-row">
        <div>
          <label>
            <h2>Question</h2>
            <input value={this.state.question} onChange={this.handleChange}
              name="question" placeholder="Question" type="text" />
          </label>
        </div>
        <h2>Choices</h2>
        {this.renderEditChoices()}
        <div className="operations">
          <span onClick={this.handleAddChoice} className="btn add">
            <i className="fas fa-plus"></i>
          </span>
        </div>
        <div className="operations">
          <span onClick={this.handleSubmit} className="btn done" >
            <i className="fas fa-check" />
          </span>
          <span onClick={this.handleCancel} className="btn cancel">
            <i className="fas fa-times" />
          </span>
        </div>
      </form>
    );
  }
}

export default MultipleChoiceQuestionForm;
