const router = require("express").Router();
const Product = require("../models/product");

//const upload = require("../middlewares/upload-photo");

// POST request - create a new product
router.post("/products"/*, upload.single("photo")*/, async (req, res) => {
  try {
    let product = new Product();
    product.categoryID = req.body.categoryID;
    product.ownerID = req.body.ownerID;
    product.title = req.body.title;
    product.price = req.body.price;
    product.stockQuantity = req.body.stockQuantity;
    product.description = req.body.description;
    //product.photo = req.file.location;

    await product.save();

    res.json({
      status: true,
      message: "Successfully saved",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get all products
router.get("/products", async (req, res) => {
  try {
    let products = await Product.find().populate("owner category").exec();

    res.json({
      success: true,
      products: products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get a single product
router.get("/products/:id", async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id });
    res.json({
      success: true,
      product: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// PUT request - update a single product
router.put("/products/:id"/*, upload.single("photo")*/, async (req, res) => {
  try {
    let product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          stockQuantity: req.body.stockQuantity,
          //photo: req.file.location,
          owner: req.body.ownerID,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updateProduct: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// DELETE request - delete a single product
router.delete("/products/:id", async (req, res) => {
  try {
    let deleteProduct = await Product.findOneAndDelete({ _id: req.params.id });

    if (deleteProduct) {
      res.json({
        status: true,
        message: "Successfuly delete!",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
