const router = express.Router()
import express from 'express'

router.get('/', (req, res) => {
  res.send([
    {
      name: 'Default Product',
      description: 'product description',
      price: 100
    }
  ])
})

export default router
