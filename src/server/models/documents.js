const mongoose = require('mongoose')

const documentSchema = new mongoose.Schema({
  id: String,
  type: String,
  text: String,
  imgSrc: String,
  caption: String,
  question: String,
  youTubeID: String,
  choices: [],
})

const Document = mongoose.model('document', documentSchema)

module.exports = { Document }
