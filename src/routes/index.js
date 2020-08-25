/**
 * Responsibility: Management routes logic
 */
import express from 'express'
import productsRoute from './products'
import mongoose from 'mongoose'

const router = express.Router()

router.use('/products', productsRoute)
router.get('/', (req, res) => {
  console.log(mongoose.models)
  res.send('home')
})

export default router