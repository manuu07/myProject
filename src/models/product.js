const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    frequency: {
        type: Number,
        required: true,
        default: 1
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
}
)

productSchema.index({ productName: 1 }, { unique: true }); 
productSchema.index({ frequency: -1 });

module.exports = new model("Product", productSchema)