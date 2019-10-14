import React, { Component } from 'react';
import SubjectiveQuestionForm from './SubjectiveQuestionForm'

class SubjectiveQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openEditForm: false,
    }
  }

  // function to mount form component
  toggleEditForm = () => this.setState({openEditForm: !this.state.openEditForm})

  // calls parent function
  handleUpdate = ({ question }) => {
    const updatedDocument = {
      id: this.props.id,
      type: 'SubjectiveQuestion',
      question,
    }

    this.props.handleUpdate(updatedDocument)
    this.toggleEditForm()
  }

  handleDelete = () => {
    this.props.handleDelete(this.props.id)
  }

  render() {
    return (
      <>
        {!this.state.openEditForm ? (
          <div className="flex-row">
            <h1>{this.props.question}</h1>

            <div className="operations">
              <span onClick={this.toggleEditForm} className="btn edit" ><i className="fas fa-pen"></i></span>
              <span onClick={this.handleDelete} className="btn delete"><i className="fas fa-trash"></i></span>
            </div>
          </div>
        ) : (
          <SubjectiveQuestionForm
            handleUpdate={this.handleUpdate}
            closeForm={this.toggleEditForm}
            question={this.props.question} />
        )
      }
      </>
    )
  }
}

export default SubjectiveQuestion;
