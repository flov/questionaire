import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import axios from 'axios';

import './intervention.css'
import Video from './Video';
import Image from './Image';
import Text from './Text';
import SubjectiveQuestion from './SubjectiveQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';

import {
  readDocuments,
  createDocument,
  updateDocument,
  deleteDocument } from '../actions'

class Intervention extends Component {
  handleAddVideoClick = () => {
    const newDocument = {
      id: uuid.v4(),
      youTubeID: 'GLy2rYHwUqY',
      type: 'Video'
    }
    this.postDocument(newDocument)
  }

  handleAddImageClick = () => {
    const newDocument = {
      id: uuid.v4(),
      type: 'Image',
      caption: 'example caption',
      imgSrc: 'https://midatlanticconsulting.com/blog/wp-content/uploads/2017/05/5_256x256bb.jpg',
    }
    this.postDocument(newDocument)
  }

  handleAddTextClick = () => {
    const newDocument = {
      id: uuid.v4(),
      type: 'Text',
      text: 'lorem ipsum',
    }

    this.postDocument(newDocument)
  }

  handleAddMultipleChoiceClick = () => {
    const newDocument = {
      id: uuid.v4(),
      type: 'MultipleChoiceQuestion',
      question: 'example question',
      choices: ['example choice 1', 'example choice 2'],
    }
    this.postDocument(newDocument)
  }

  handleAddSubjectiveQuestionClick = () => {
    const newDocument = {
      id: uuid.v4(),
      type: 'SubjectiveQuestion',
      question: 'subjective question?',
    }
    this.postDocument(newDocument)
  }

  postDocument(newDocument) {
    axios.post('/api/documents', { ...newDocument }).then(({data : {type}}) => {
      this.props.createDocument(newDocument)
    }).catch(e => console.log("Addition failed, Error", e));
  }

  handleUpdateDocument = (document) => {
    axios.put(`/api/documents/${document.id}`, {document}).then(({data: {type}}) => {
      this.props.updateDocument(document)
      console.log(`Item - ${type} updated successfully`);
    }).catch(e => console.log('Updating failed, Error', e))
  }

  handleDeleteDocument = (id) => {
    axios.delete(`/api/documents/${id}`).then(() => {
      this.props.deleteDocument(id)
    }).catch(e => console.log("Deletion failed, Error", e))
  }

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

  componentDidMount() {
    this.props.readDocuments()
  }

  render() {
    const { loading, errors } = this.props

    return (
      <div className="navigation-grid">
        <div className={"col-left col"}>
          <div>
            <button onClick={this.handleAddVideoClick} >
              Add Video
            </button>
          </div>
          <div>
            <button onClick={this.handleAddImageClick} >
              Add Image
            </button>
          </div>
          <div>
            <button onClick={this.handleAddTextClick} >
              Add Text
            </button>
          </div>
          <div>
            <button onClick={this.handleAddMultipleChoiceClick} >
              Add Multiple-choice question
            </button>
          </div>
          <div>
            <button onClick={this.handleAddSubjectiveQuestionClick} >
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
  loading: state.loading,
  errors: state.errors,
  documents: state.documents.documents,
})

export default connect(mapStateToProps, {
  readDocuments,
  createDocument,
  updateDocument,
  deleteDocument})(Intervention);
