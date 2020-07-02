const router = require('express').Router();
const Produce = require('../models/product');

router.get('/', (req, res) => {
  res.send('Team-044 Backend');
});

// Retrieve all Products
router.get('/products', (req, res) => {
  Produce.find({}, (err, allProduce) => {
    if (err) {
      console.log(err);
    } else {
      console.log('here---', allProduce);
      res.json(allProduce);
    }
  });
});


// Add Products
router.post('/products', (req, res) => {
  const newProduce = {
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    price: req.body.price
  };
  Produce.create(newProduce, (err, newlyCreatedProduce) => {
    if (err) {
      console.log(err);
    } else {
      res.json({newlyCreatedProduce, message: "Your Produce has been added"});
    }
  });
});

// Retrieve details of a particular product
router.get('/products/:id', (req, res) => {
  Produce.findById(req.params.id, (err, foundProduce) => {
    if (err) {
      console.log(err);
    } else {
      console.log('---->>>', foundProduce);
      res.send(foundProduce);
    }
  });
});

// Edit / Update Products
router.put('/products/:id', (req, res) => {
  Produce.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduce) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.body);
      res.json(updatedProduce);
      console.log(updatedProduce);
    }
  });
});

// Delete Products
router.delete('/products/:id', (req, res) => {
  Produce.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Deleted');
    }
  });
});

module.exports = router;
