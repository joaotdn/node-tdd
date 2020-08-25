/**
 * All database configurations
 */
import mongoose from 'mongoose'
const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost/node-test'
// return an promise when resolved the connection will be established
const connect = () => mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export default {
  connect,
  connection: mongoose.connection
}
