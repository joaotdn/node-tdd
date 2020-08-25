class ProductsController {
  constructor(Product) {
    this.Product = Product
  }

  async get(req, res) {
    try {
      const products = await this.Product.find({})
      res.send(products)
    } catch (e) {
      res.status(400).send(e.message)
    }
  }
}

export default ProductsController