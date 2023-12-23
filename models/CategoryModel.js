var mongoose = require('mongoose');
var CategorySchema = mongoose.Schema(
   {
      name: {
         type: String,
      },
      brand: String
   });
var CategoryModel = mongoose.model('categories', CategorySchema);
module.exports = CategoryModel;