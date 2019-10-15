import {
  CREATE_DOCUMENT,
  READ_DOCUMENTS,
  UPDATE_DOCUMENT,
  DELETE_DOCUMENT,
  FETCH_DOCUMENTS_BEGIN,
  FETCH_DOCUMENTS_SUCCESS,
  FETCH_DOCUMENTS_FAILURE,
} from '../actions'

const initialState = {
  documents: []
}

export default function reducerFunc(state = initialState, action) {
  switch (action.type) {
    case FETCH_DOCUMENTS_BEGIN:
      return {
        ...state,
        loading: true,
        errors: null,
      }
    case FETCH_DOCUMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        documents: action.payload.documents,
      }
    case FETCH_DOCUMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
        documents: []
      }
    case READ_DOCUMENTS:
      return state
    case UPDATE_DOCUMENT:
      const updatedDocument = action.payload.document;
      return {
        documents: [...state.documents].map(document => {
          if(document.id === updatedDocument.id) {
            return updatedDocument
          } else {
            return document
          }
        })
      }
    case DELETE_DOCUMENT:
      const { id } = action.payload
      return {
        documents: [...state.documents].filter(document => document.id !== id)
      }
    case CREATE_DOCUMENT:
      return {
        documents: [...state.documents, action.payload.document]
      }
    default:
      return state
  }
}
