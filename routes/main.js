const express = require('express');
const { reservation } = require('../controllers');
const controllers = require('../controllers');
const router = express.Router();

router.get('/',async (req, res, next)=>{
    const data = req.context;
    const itemCtr = controllers.item.instance();
    data.breakfast = await itemCtr.get({category: 'Breakfast'});
    data.lunch = await itemCtr.get({category: 'Lunch'});
    data.dinner = await itemCtr.get({category: 'Dinner'});
    data.desserts = await itemCtr.get({category: 'Dessert'});
    data.wine = await itemCtr.get({category: 'Wine'});
    data.drinks = await itemCtr.get({category: 'Drink'});

    res.render('home', data);
});

router.get('/blog', (req, res, next)=>{
    res.render('blog', req.context);
});

router.get('/items',async (req, res, next)=>{
    const itemCtr = controllers.item.instance();
    const items = await itemCtr.get();
    res.json({items});
});

router.post('/reservation',async (req, res, next)=>{
    
    req.body.person = Number(req.body.person);
    req.body.date = new Date(req.body.date);
    const reservationData = req.body;
    const reservationCtr = controllers.reservation.instance();
    const savedReservation = await reservationCtr.post(reservationData);
    res.json(savedReservation);
  
})

module.exports = router;