const mongoose=require('mongoose');
const productSchema=require('../schema/productsSchema');

const product = mongoose.model('product',productSchema);
 
module.exports=product;
