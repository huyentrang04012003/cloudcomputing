var express = require('express');
var router = express.Router();
var BrandModel = require('../models/BrandModel');
var CategoryModel = require('../models/CategoryModel');

router.get('/', async (req, res) => {
   var brands = await BrandModel.find({});
   res.render('brand/index', { brands });
})

router.get('/add', async (req, res) => {
    var brands = await BrandModel.find({});
    res.render('brand/add');
 })
 
router.post('/add', async (req, res) => {
   var brand = req.body;
   await BrandModel.create(brand);
   res.redirect('/brand');
})

// router.get('/detail/:id', async (req, res) => {
//    var id = req.params.id;
//    //SQL: SELECT * FROM mobiles WHERE brand = "id"
//    var products = await ProductModel.find({ category : id }).populate('category');
//    res.render('category/detail', { products })
// })

// router.get('/delete/:id', async (req, res) => {
//    var id = req.params.id;
// //    //cách 1
// //    try {
// //       //SQL: DELETE FROM brands WHERE brand = id
// //       await CategoryModel.findByIdAndDelete(id);
// //       console.log('Delete category succeed !');
// //    } catch (err) {
// //       console.log('Delete category fail. Error: ' + err);
// //    };

// //    cách 2
//    var category = await CategoryModel.findById(id);
//    await CategoryModel.deleteOne(category);

//    res.redirect('/category');
// })

// router.get('/deleteall', async (req, res) => {
//    //SQL: DELETE FROM brands
//    //     TRUNCATE TABLE brands
//    await CategoryModel.deleteMany();
//    console.log('Delete all category succeed !');
//    res.redirect('/category');
// })
// // router.get('/delete/:id', async (req, res) => {
// //    await ProductModel.findByIdAndDelete(req.params.id);
// //    res.redirect('/category');
// // })
// router.get('/edit/:id', async (req, res) => {
//    var id = req.params.id;
//    var category = await CategoryModel.findById(id);
//    res.render('category/edit', { category });
// })

// router.post('/edit/:id', async (req, res) => {
//    var id = req.params.id;
//    var category = req.body;
//    try {
//       //SQL: UPDATE brands SET A = B WHERE id = 'id'
//       await CategoryModel.findByIdAndUpdate(id, category);
//       console.log('update succeed !');
//    } catch (err) {
//       console.log('update failed. Error: ' + err);
//    }
//    res.redirect('/category');
// })


module.exports = router;