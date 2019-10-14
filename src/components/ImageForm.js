import React, { Component } from 'react';

class ImageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: !this.props.imgSrc ? "" : this.props.imgSrc,
      caption: !this.props.caption ? "" : this.props.caption
    }
  }

  handleCancel = () => this.props.closeForm();

  handleSubmit = () => {
    const { imgSrc, caption } = this.state;
    if (this.props.imgSrc) {
      this.props.handleUpdate({ imgSrc, caption })
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
          <input value={this.state.caption} onChange={this.handleChange}
            name="caption" placeholder="Caption" type="text" />
        </div>
        <div>
          <input value={this.state.imgSrc} onChange={this.handleChange}
            name="imgSrc" placeholder="Image Src" type="text" />
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
export default ImageForm;
