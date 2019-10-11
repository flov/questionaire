import { combineReducers } from "redux"

import menuItems from "./menuItems"
import documents from "./documents"

const rootReducer = combineReducers({
  menuItems,
  documents
})

export default rootReducer

