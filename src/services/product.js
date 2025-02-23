const Product = require('../models/product')

const addProduct = async function (productData) {
    try {
        const existingProduct = await Product.findOne({ 
            productName: { $regex: new RegExp(`^${productData.productName}$`, 'i') } 
        });

        if (existingProduct) {
            return { error: "Product with this name already exists." };
        }

       const product = new Product(productData);
        await product.save();
        return product;
    } catch (err) {
        return err.message;
    }
}


const searchProducts = async (query) => {
    try {
        if (!query) return [];

        const products = await Product.find(
            { productName: { $regex: `^${query}`, $options: "i" } },
            { productName: 1, frequency: 1, _id: 0 }
        )
            .sort({ frequency: -1 })
            .limit(10)
            .lean();

        return products;
    } catch (err) {
        return err.message;
    }
};


module.exports = { addProduct, searchProducts };