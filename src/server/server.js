const mongoose = require('mongoose');
const fastify = require('fastify')();
const routes = require('./routes');
const path = require('path')
const {parsed : {MONGO_ATLAS_PW}} = require('dotenv').config();

//connect to mongodb atlas
mongoose.connect('mongodb://localhost:27017/intervention', {useNewUrlParser: true})
  .then(() => console.log('MongoDB connected'))
  .catch(e => console.log('MongoDB could not be connected due to ', e));


//handles GET / request
fastify.get('/', async (request, reply) => {
  try {
    return {message : "hello, world!"}
  }
  catch (e) { console.log(e) }
});

//iterating over all the routes and registering them with fastify
routes.forEach(route => fastify.route(route))

//launching server at port : 3000 in local environment
fastify.listen(process.env.PORT || 3050, '0.0.0.0', (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server running at ${fastify.server.address().port}`)
})

