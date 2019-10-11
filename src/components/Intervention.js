import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import VideoForm from './VideoForm';
import Video from './Video';
import Image from './Image';
import Text from './Text';
import { createDocument, updateDocument, deleteDocument } from '../actions'


class Intervention extends Component {
  handleAddVideoClick = () => {
    const newDocument = {
      id: uuid.v4(),
      youTubeID: 'GLy2rYHwUqY',
      type: 'video'
    }
    this.props.createDocument(newDocument)
  }

  handleUpdateDocument = (document) => this.props.updateDocument(document)
  handleDeleteDocument = (id) => this.props.deleteDocument(id)

  showDocument(document) {
    switch (document.type) {
      case 'video':
        return <Video {...document}
          key={document.id}
          handleDelete={this.handleDeleteDocument}
          handleUpdate={this.handleUpdateDocument} />
      case 'image':
        return <Image {...document} />
      case 'text':
        return <Text {...document} />
    }
  }

  render() {
    return (
      <div className="navigation-grid">
        <div className={"col-left col"}>
          <div>
            <button onClick={this.handleAddVideoClick} className="add btn">
              Add Video
            </button>
          </div>
          <div>
            <button className="add btn">
              Add Image
            </button>
          </div>
          <div>
            <button className="add btn">
              Add Text
            </button>
          </div>
          <div>
            <button className="add btn">
              Add Multiple-choice question
            </button>
          </div>
          <div>
            <button className="add btn">
              Add subjective question
            </button>
          </div>
        </div>
        <div className={"col col-right"}>
          {
            this.props.documents.length > 0 ? this.props.documents.map((document, i) => {
            return this.showDocument(document)
          }) : (
            <h2>No documents created yet</h2>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  documents: state.documents,
})

export default connect(mapStateToProps, {
  createDocument,
  updateDocument,
  deleteDocument})(Intervention);
