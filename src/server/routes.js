const { fetchDocuments,
  addDocument,
  updateDocument,
  deleteDocument
} = require('./controller')

const routes = [
  {
    method: 'GET',
    url: '/api/documents',
    handler: fetchDocuments,
    schema: {
      description: 'gets all Documents'
    }
  },
  {
    method: 'POST',
    url: '/api/documents',
    handler: addDocument,
    schema: {
      description: 'Create a new document.',
    }
  },
  {
    method: 'PUT',
    url: '/api/documents/:id',
    handler: updateDocument,
    schema: {
      description: 'Update a document.',
    }
  },
  {
    method: 'DELETE',
    url: '/api/documents/:id',
    handler: deleteDocument,
    schema: {
      description: 'Delete a document.',
    }
  },
]

module.exports = routes
