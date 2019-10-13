import React, { Component } from 'react';
import TextForm from './TextForm';

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openEditForm: false
    }
  }

  // function to mount form component
  toggleEditForm = () => this.setState({openEditForm: !this.state.openEditForm})

  // calls parent function
  handleUpdate = ({ text, imgSrc }) => {
    const updatedDocument = {
      id: this.props.id,
      type: 'Text',
      text,
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
            <p>{this.props.text}</p>

            <div className="operations">
              <span onClick={this.toggleEditForm} className="btn edit" ><i className="fas fa-pen"></i></span>
              <span onClick={this.handleDelete} className="btn delete"><i className="fas fa-trash"></i></span>
            </div>
          </div>
        ) : (
          <TextForm
            handleUpdate={this.handleUpdate}
            text={this.props.text}
            closeForm={this.toggleEditForm} />
        )
      }
      </>
    )
  }
}

export default Text;
