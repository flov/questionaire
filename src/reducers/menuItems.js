import { CREATE, READ, UPDATE, DELETE } from '../actions';

//initial state for redux store
const initialState = []

//reducer function
export default function (state = initialState, action) {
  switch (action.type) {

    // handles creation of data
    case CREATE: return [...state, action.payload.item]

    //reads all the data from the store
    case READ: return state

    //handles item updates in redux store
    case UPDATE : {
      const updatedItem = {...action.payload.item};
      return [...state].map( item => {
          if(item.id === updatedItem.id){
            return updatedItem
          }
          else return item;
        })
    }

    //handles item deletion from redux store
    case DELETE: {
      const {id} = action.payload;
      return [...state].filter(item => item.id !== id)
    }

    //returns default state, in case some unknown action type is discovered
    default: return state;
  }
}

