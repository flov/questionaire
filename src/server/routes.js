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
  },
  {
    method: 'POST',
    url: '/api/documents',
    handler: addDocument,
  },
  {
    method: 'PUT',
    url: '/api/documents/:id',
    handler: updateDocument,
  },
  {
    method: 'DELETE',
    url: '/api/documents/:id',
    handler: deleteDocument,
  },
]

module.exports = routes
