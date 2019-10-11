import {
  CREATE_DOCUMENT,
  READ_DOCUMENTS,
  UPDATE_DOCUMENT,
  DELETE_DOCUMENT
} from '../actions'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_DOCUMENT: return [...state, action.payload.document]

    case READ_DOCUMENTS: return state

    case UPDATE_DOCUMENT: {
      const updatedDocument = action.payload.document;
      return [...state].map(document => {
        console.log("updated document", updatedDocument)
        console.log("document", document)
        if(document.id === updatedDocument.id) {
          return updatedDocument
        } else {
          return document
        }
      })
    }

    case DELETE_DOCUMENT: {
      return [...state].filter(document => document.id !== action.payload.id)
    }

    default:
      return state
  }
}
