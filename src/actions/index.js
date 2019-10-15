import axios from 'axios';

export const CREATE_DOCUMENT = "CREATE_DOCUMENT"
export const READ_DOCUMENTS = "READ_DOCUMENTS"
export const UPDATE_DOCUMENT = "UPDATE_DOCUMENT"
export const DELETE_DOCUMENT = "DELETE_DOCUMENT"
export const FETCH_DOCUMENTS_BEGIN = "FETCH_DOCUMENTS_BEGIN";
export const FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS";
export const FETCH_DOCUMENTS_FAILURE = "FETCH_DOCUMENTS_FAILURE";

export const fetchDocumentsBegin = () => ({
    type: FETCH_DOCUMENTS_BEGIN
})
export const fetchDocumentsSuccess = documents => ({
    type: FETCH_DOCUMENTS_SUCCESS,
    payload: { documents }
})
export const fetchDocumentsFailure = errors => ({
    type: FETCH_DOCUMENTS_FAILURE,
    payload: { errors }
})

export const readDocuments = () => {
  return (dispatch) => {
    dispatch(fetchDocumentsBegin())
    return axios.get('/api/documents')
      .then(({data}) => {
        dispatch(fetchDocumentsSuccess(data))
      })
      .catch(error => dispatch(fetchDocumentsFailure(error)))
  }
}

export const createDocument = (document) => ({
  type: CREATE_DOCUMENT,
  payload: { document },
})

export const updateDocument = (document) => ({
  type: UPDATE_DOCUMENT,
  payload: { document },
})

export const deleteDocument = (id) => ({
  type: DELETE_DOCUMENT,
  payload: { id },
})

export const CREATE = "Add new item";
export const READ = "fetch all items";
export const UPDATE = "update item";
export const DELETE = "delete item";

//dispatched when item needs to be created
export const createItem = (item) => ({
  type: CREATE,
  payload: { item }
})

//dispatched when all the items stored in redux store needs to be read
export const readItems = () => ({
  type: READ,
})

//dispatched when certain item needs to be updated
export const updateItem = (item) => ({
  type: UPDATE,
  payload: { item }
})

//dispatched when certain item needs to be removed from redux store 
export const deleteItem = (id) => ({
  type : DELETE,
  payload : { id }
})

