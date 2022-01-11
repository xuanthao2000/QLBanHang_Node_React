import mongoose from "mongoose";
const schema = mongoose.Schema;

const Product = new schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        brand: { type: String, required: true },
        category: { type: Number, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        isSale: { type: Boolean, default: false },
    }
);

export default mongoose.model('Product', Product);
