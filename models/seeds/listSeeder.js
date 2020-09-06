const mongoose = require('mongoose')
const restaurantListData = require('../restaurant')
const restaurantJson = require('../../restaurant.json')


mongoose.connect('mongodb://localhost/restaurent-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < restaurantJson.results.length; i++) {
    restaurantListData.create({
      id: `${restaurantJson.results[i].id}`,
      name: `${restaurantJson.results[i].name}`,
      name_en: `${restaurantJson.results[i].name_en}`,
      category: `${restaurantJson.results[i].category}`,
      image: `${restaurantJson.results[i].image}`,
      location: `${restaurantJson.results[i].location}`,
      phone: `${restaurantJson.results[i].phone}`,
      google_map: `${restaurantJson.results[i].google_map}`,
      rating: `${restaurantJson.results[i].rating}`,
      description: `${restaurantJson.results[i].description}`,
    })
  }
  console.log('done')
})