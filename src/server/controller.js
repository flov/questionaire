const { Document } = require('./models/documents');

// it reads all the documents present in database
const fetchDocuments = async (req, reply) => {
  try {
    const documents = await Document.find();
    return documents
  }
  catch (err) { console.log(err) }
}

// it adds a document to database
const addDocument = async (req, reply) => {
  try {
    const NewDocument = new Document({ ...req.body })
    return NewDocument.save()
  }
  catch (err) { console.log(err) }
}

// it updates a document present in database
const updateDocument = async (req, reply) => {
  try {
    const { id } = req.params;
    const { document } = req.body;
    const updatedItem = await Document.findOneAndUpdate(
      {id}, // Search query
      document, // values to update
      { new: true } // return updated doc
    );
    return updatedItem;
  }
  catch (err) { console.log(err) }
}

// it deletes a document present in database
const deleteDocument = async (req, reply) => {
  try {
    const { id } = req.params;
    const document = await Document.findOneAndDelete({ id })
    return document
  }
  catch (err) { console.log(err) }
}

module.exports = { fetchDocuments, addDocument, updateDocument, deleteDocument }
