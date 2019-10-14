import React, { Component } from 'react';

class TextForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: !this.props.text ? "" : this.props.text,
    }
  }

  handleCancel = () => this.props.closeForm();

  handleSubmit = () => {
    const { text } = this.state;
    if (this.props.text) {
      this.props.handleUpdate({ text })
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
          <input value={this.state.text} onChange={this.handleChange}
            name="text" placeholder="Image Src" type="text" />
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
export default TextForm;

