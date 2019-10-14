import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import './intervention.css'
import Video from './Video';
import Image from './Image';
import Text from './Text';
import SubjectiveQuestion from './SubjectiveQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';

import { createDocument, updateDocument, deleteDocument } from '../actions'

class Intervention extends Component {
  handleAddVideoClick = () => {
    const newDocument = {
      id: uuid.v4(),
      youTubeID: 'GLy2rYHwUqY',
      type: 'Video'
    }
    this.props.createDocument(newDocument)
  }

  handleAddImageClick = () => {
    const newDocument = {
      id: uuid.v4(),
      type: 'Image',
      caption: 'example caption',
      imgSrc: 'https://www.stopbreathethink.com/wp-content/uploads/2017/04/blog_breathe_animation.gif',
    }
    this.props.createDocument(newDocument)
  }

  handleAddTextClick = () => {
    const newDocument = {
      id: uuid.v4(),
      type: 'Text',
      text: 'lorem ipsum',
    }
    this.props.createDocument(newDocument)
  }

  handleAddMultipleChoiceClick = () => {
    const newDocument = {
      id: uuid.v4(),
      type: 'MultipleChoiceQuestion',
      question: 'example question',
      choices: ['example choice 1', 'example choice 2'],
    }
    this.props.createDocument(newDocument)
  }

  handleAddSubjectiveQuestionClick = () => {
    const newDocument = {
      id: uuid.v4(),
      type: 'SubjectiveQuestion',
      question: 'Do you like subjective questions?',
    }
    this.props.createDocument(newDocument)
  }

  handleUpdateDocument = (document) => this.props.updateDocument(document)

  handleDeleteDocument = (id) => this.props.deleteDocument(id)

  showDocument(document) {
    // mapping the type string to the component
    const components = {
      "Video": Video,
      "Image": Image,
      "Text": Text,
      "SubjectiveQuestion": SubjectiveQuestion,
      "MultipleChoiceQuestion": MultipleChoiceQuestion,
    }
    const Component = components[document.type]

    return <Component {...document}
      key={document.id}
      handleDelete={this.handleDeleteDocument}
      handleUpdate={this.handleUpdateDocument} />
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
            <button onClick={this.handleAddImageClick} className="add btn">
              Add Image
            </button>
          </div>
          <div>
            <button onClick={this.handleAddTextClick} className="add btn">
              Add Text
            </button>
          </div>
          <div>
            <button onClick={this.handleAddMultipleChoiceClick} className="add btn">
              Add Multiple-choice question
            </button>
          </div>
          <div>
            <button onClick={this.handleAddSubjectiveQuestionClick} className="add btn">
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
