import React, { Component } from 'react';
import ImageForm from './ImageForm';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openEditForm: false,
    }
  }

  // function to mount form component
  toggleEditForm = () => this.setState({openEditForm: !this.state.openEditForm})

  // calls parent function
  handleUpdate = ({ caption, imgSrc }) => {
    const updatedDocument = {
      id: this.props.id,
      type: 'Image',
      caption,
      imgSrc,
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
            <h1>{this.props.caption}</h1>
            <img src="https://i.ytimg.com/vi/3I7qR4NO8Ag/maxresdefault.jpg"
              alt={this.props.caption} />

            <div className="operations">
              <span onClick={this.toggleEditForm} className="btn edit" ><i className="fas fa-pen"></i></span>
              <span onClick={this.handleDelete} className="btn delete"><i className="fas fa-trash"></i></span>
            </div>
          </div>
        ) : (
          <ImageForm
            handleUpdate={this.handleUpdate}
            imgSrc={this.props.imgSrc}
            caption={this.props.caption}
            closeForm={this.toggleEditForm} />
        )
      }
      </>
    )
  }
}
export default Image;
