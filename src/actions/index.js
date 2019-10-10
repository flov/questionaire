export const FIELD_ADD = "Add new field";
export const READ_FIELDS = "fetch all fields";

//dispatched when field needs to be created
export const createField = (field) => ({
  type: FIELD_ADD,
  payload: { field }
})

//dispatched when all the items stored in redux store needs to be read
export const readFields = () => ({
  type: READ_FIELDS,
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

