const mongoose = require('mongoose')
const fastify = require('fastify')()
const routes = require('./routes')
const path = require('path')
const {parsed : {MONGO_ATLAS_PW}} = require('dotenv').config()
const swagger = require('./config/swagger')

//connect to mongodb atlas
mongoose.connect('mongodb://localhost:27017/intervention', {useNewUrlParser: true})
  .then(() => console.log('MongoDB connected'))
  .catch(e => console.log('MongoDB could not be connected due to ', e));


//handles GET / request
fastify.get('/', async (request, reply) => {
  try {
    reply.sendFile('index.html')
  }
  catch (e) { console.log(e) }
});

const DistPath = path.join(__dirname, '..', '..', 'build')

fastify.register(require('fastify-swagger'), swagger)
fastify.register(require('fastify-static'), {
  root: DistPath,
})

//iterating over all the routes and registering them with fastify
routes.forEach(route => fastify.route(route))

fastify.ready(err => {
  if (err) throw err
  fastify.swagger()
})

const start = async () => {
  try {
    await fastify.listen(3050, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
