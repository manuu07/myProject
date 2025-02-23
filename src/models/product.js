const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
        unique: true
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

module.exports = new model("Product", productSchema)