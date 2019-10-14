import React, { Component } from 'react';
import MultipleChoiceQuestionForm from './MultipleChoiceQuestionForm';
import Checkbox from './Checkbox';

class MultipleChoiceQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openEditForm: false
    }
  }

  // function to mount form component
  toggleEditForm = () => this.setState({openEditForm: !this.state.openEditForm})

  // calls parent function
  handleUpdate = ({ question, choices }) => {
    const updatedDocument = {
      id: this.props.id,
      type: 'MultipleChoiceQuestion',
      question,
      choices,
    }

    this.props.handleUpdate(updatedDocument)
    this.toggleEditForm()
  }

  handleDelete = () => {
    this.props.handleDelete(this.props.id)
  }

  handleChange = (e) => {
    const {name, value} = e.target
    value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({ [name]: value })
  }

  renderChoices = (choices) => {
    return choices.map((choice, i) => (
      <Checkbox name={choice} isSelected={false} onChange={this.handleChange} />
    ))
  }

  render() {
    return (
      <>
        {!this.state.openEditForm ? (
          <div className="flex-row">
            <h1>Multiple Choice Question</h1>
            <p>{this.props.question}</p>
            {this.renderChoices(this.props.choices)}
            <div className="operations">
              <span onClick={this.toggleEditForm} className="btn edit" ><i className="fas fa-pen"></i></span>
              <span onClick={this.handleDelete} className="btn delete"><i className="fas fa-trash"></i></span>
            </div>
          </div>
        ) : (
          <MultipleChoiceQuestionForm
            handleUpdate={this.handleUpdate}
            question={this.props.question}
            closeForm={this.toggleEditForm} />
        )
      }
      </>
    )
  }
}

export default MultipleChoiceQuestion;
