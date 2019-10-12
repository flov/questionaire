import React, { Component } from 'react';

class VideoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      youTubeID: !this.props.youTubeID ? "" : this.props.youTubeID
    }
  }

  handleCancel = () => this.props.closeForm();

  handleSubmit = () => {
    const { youTubeID } = this.state;
    if (this.props.youTubeID) {
      this.props.updateVideo({ youTubeID })
    } else {
      console.log('create video')
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
          <input value={this.state.youTubeID} onChange={this.handleChange}
            name="youTubeID" placeholder="Youtube id" type="text" />
        </div>
        <div>
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

export default VideoForm;
