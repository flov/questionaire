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
    const { youTubeID } = this.props;
    this.setState({ youTubeID })
  }

  // function to mount form component
  toggleEditForm = () => this.setState({openEditForm: !this.state.openEditForm})

  // calls parent function
  handleUpdate = ({ youTubeID }) => {
    const updatedVideo = {
      id: this.props.id,
      type: 'Video',
      youTubeID
    }
    this.setState({ youTubeID })
    this.props.handleUpdate(updatedVideo)
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
            <iframe width="560" height="315"
              title={this.state.youTubeID}
              src={`https://www.youtube.com/embed/${this.props.youTubeID}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>

            <div className="operations">
              <span onClick={this.toggleEditForm} className="btn edit" ><i className="fas fa-pen"></i></span>
              <span onClick={this.handleDelete} className="btn delete"><i className="fas fa-trash"></i></span>
            </div>
          </div>
        ) : (
          <VideoForm
            updateVideo={this.handleUpdate}
            youTubeID={this.state.youTubeID}
            closeForm={this.toggleEditForm} />
        )
      }
      </>
    );
  }
}
export default Video;
