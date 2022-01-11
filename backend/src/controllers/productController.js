import Product from '../models/productModels.js';

class productController{

    getAllProducts(req,res){

        Product.find({})
        .then(products => {
            res.json(products);
        })
        .catch(err => console.log("Can not find list product"));
    }

    getProductDetail = async (req,res) => {
        const product = await Product.findById(req.params.id);
        if(product)
            res.send(product);
        else
            res.send(404).send({ message: "Can not find product!!!" });
    }
}

export default new productController();