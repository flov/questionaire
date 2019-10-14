const mongoose = require('mongoose')

const documentSchema = new mongoose.Schema({
  id: String,
  type: String,
})

const Document = mongoose.model('document', documentSchema)

module.exports = { Document }
