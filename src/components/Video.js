import React, { Component } from 'react';
import VideoForm from './VideoForm';

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openEditForm: false,
      youTubeID: "",
    }
  }

  componentDidMount() {
    console.log('video component did mount')
    const { youTubeID } = this.props;
    this.setState({ youTubeID })
  }

  // function to mount form component
  handleEditClick = () => this.setState({openEditForm: true})

  // function to unmount form component
  handleCancel = () => this.setState({openEditForm: false})

  // calls parent function
  handleUpdate = ({ youTubeID }) => {
    const updatedVideo = {
      id: this.props.id,
      type: 'video',
      youTubeID
    }
    this.props.handleUpdate(updatedVideo)
    this.handleCancel()
  }

  handleDelete = () => {
    this.props.handleDelete(this.props.id)
  }

  render() {
    console.log("Video state", this.state)
    return (
      <>
        {!this.state.openEditForm ? (
          <div className="flex-row">
            <iframe width="560" height="315"
              title='foaiwjfoaw'
              src={`https://www.youtube.com/embed/${this.props.youTubeID}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>

            <div className="operations">
              <span onClick={this.handleEditClick} className="btn edit" ><i className="fas fa-pen"></i></span>
              <span onClick={this.handleDelete} className="btn delete"><i className="fas fa-trash"></i></span>
            </div>
          </div>
        ) : (
          <VideoForm
            updateVideo={this.handleUpdate}
            youTubeID={this.state.youTubeID}
            closeForm={this.handleCancel} />
        )
      }
      </>
    );
  }
}
export default Video;
