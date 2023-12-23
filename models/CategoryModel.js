var mongoose = require('mongoose');
var CategorySchema = mongoose.Schema(
   {
      name: {
         type: String,
      },
      brand: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'brands'  // 'categories': collection
      }
   });
var CategoryModel = mongoose.model('categories', CategorySchema);
module.exports = CategoryModel;
