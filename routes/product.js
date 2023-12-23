var express = require('express');
var router = express.Router();
var ProductModel = require('../models/ProductModel');
var CategoryModel = require('../models/CategoryModel');

//URL: localhost:3001/product
router.get('/', async (req, res) => {
   var products = await ProductModel.find({}).populate('category');
   //Path: views/product/index.hbs
   res.render('product/index', { products });
})

router.get('/customer', async (req, res) => {
   var products = await ProductModel.find({}).populate('category');
   //Path: views/product/index.hbs
   res.render('product/list', { products });
})

router.get('/add', async (req, res) => {
   var categories = await CategoryModel.find({});
   res.render('product/add', { categories });
})

router.post('/add', async (req, res) => {
   var product = req.body;
   await ProductModel.create(product);
   res.redirect('/product');
})


router.get('/delete/:id', async (req, res) => {
   await ProductModel.findByIdAndDelete(req.params.id);
   res.redirect('/product');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var product = await ProductModel.findById(id);
   var categories = await CategoryModel.find({});
   res.render('product/edit', { product, categories });
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var product = req.body;
   try {
      await ProductModel.findByIdAndUpdate(id, product);
      console.log('update succeed !');
   } catch (err) {
      console.log('update failed. Error: ' + err);
   }
   res.redirect('/product');
})

router.get('/sort/asc', async (req, res) => {
   //SQL: SELECT * FROM products ORDER BY model
   var products = await ProductModel.find().populate('category').sort({ model: 1 });
   res.render('product/index', { products })
})

router.get('/sort/desc', async (req, res) => {
   //SQL: SELECT * FROM products ORDER BY model DESC
   var products = await ProductModel.find().populate('category').sort({ model: -1 });
   res.render('product/index', { products })
})

router.post('/search', async (req, res) => {
   var keyword = req.body.keyword;
   //SQL: SELECT * FROM products WHERE model LIKE '%keyword%'
   var products = await ProductModel.find({ model: new RegExp(keyword, "i") }).populate('category');
   res.render('product/index', { products })
})
router.get('/customer', async (req, res) => {
   var product = await ProductModel.find({}).populate('category')
   res.render('product/list',{products});})

module.exports = router;