const Product = require('../models/product');
 exports.addItem = (req, res, next)=>{
    const name = req.body.name
    const price = req.body.price
    Product.create({
        name: name,
        price: price
    }).then(result => {
        res.status(201).json({ message: 'Item added', product: result });
    }).catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Failed to add item' });
    });
 }

 exports.getItem = (req, res, next)=>{
    Product.findAll().then(result=>{
        console.log('success')
        res.status(201).json({ message: 'Items fetched', product: result });
    }).catch(console.log('err'));
}

exports.getItemById = (req, res, next)=>{
    itemId = req.params.itemId
    Product.findByPk(itemId).then(result=>{
        console.log('success')
        res.status(201).json({message:"Item", product: result});
    }).catch(console.log('err'));
}