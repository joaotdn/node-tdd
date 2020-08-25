import ProductsController from '../../../src/controllers/products'
import sinon from 'sinon'
import Product from '../../../src/models/products'

describe('Controllers: Products', () => {
  const defaultProduct = [{
    name: 'Default Product',
    description: 'product description',
    price: 100
  }]

  describe('get() products', () => {
    it('should return a list of products', async () => {
      const request = {}
      const response = {
        send: sinon.spy()
      }
      Product.find = sinon.stub()
      Product.find.withArgs({}).resolves(defaultProduct)
      const productsController = new ProductsController(Product)
      await productsController.get(request, response)
      sinon.assert.calledWith(response.send, defaultProduct)
    })

    it('should return 400 an error occurs', async () => {
      const request = {}
      const response = {
        send: sinon.spy(),
        status: sinon.stub()
      }

      response.status.withArgs(400).returns(response)
      Product.find = sinon.stub()
      // reject promise and returns db query error
      Product.find.withArgs({}).rejects({ message: 'Error' })

      const productsController = new ProductsController(Product)
      await productsController.get(request, response)
      sinon.assert.calledWith(response.send, 'Error')
    })
  })
})