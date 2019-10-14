import React, { Component } from 'react';

class SubjectiveQuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: !this.props.question ? "" : this.props.question
    }
  }

  handleCancel = () => this.props.closeForm();

  handleSubmit = () => {
    const { question } = this.state;
    if (this.props.question) {
      this.props.handleUpdate({ question })
    } else {
      console.log('create document')
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <form className="flex-row">
        <div>
          <input value={this.state.question} onChange={this.handleChange}
            name="question" placeholder="Subjective Question" type="text" />
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
export default SubjectiveQuestionForm;

