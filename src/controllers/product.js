const productService = require("../services/product");

const addProduct = async (req, res) => {
    try {
        const product = await productService.addProduct(req.body); 
        res.status(201).json({ success: true, data: product }); 
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


const searchProducts = async (req, res) => {
    try {
      const { query } = req.query;
  
      if (!query) {
        return res.status(400).json({ success: false, message: "Query is required" });
      }
  
      const products = await productService.searchProducts(query);
  
      res.status(200).json({ success: true, data: products });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };


module.exports = { addProduct , searchProducts};
