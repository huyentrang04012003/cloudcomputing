var mongoose = require('mongoose');
var ProductSchema = mongoose.Schema({
   name: String,
   color: String,
   image: String,
   category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categories'  // 'categories': collection
   }
});
//Relationship : products (many) - categories (one)

var ProductModel = mongoose.model('products', ProductSchema); // 'products' : collection
module.exports = ProductModel;