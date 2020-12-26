const express = require("express");
const pokedex = require('../data/pokedex.json');

const router = express.Router();

router.get('/pokemons', (req, res) => {

  res.json(pokedex);
})


router.get('/pokemons/info', (req, res) => {
  if (!pokedex[req.query.id - 1]) {

    const pokename = req.query.name;
    const pokeverif =  pokedex.find(c => c.name.english === pokename);

    if (pokeverif === undefined) {
      
      const poketype = req.query.type;

      const pokeverif =  pokedex.find(c => c.type === poketype);

      if (pokeverif === undefined) {

        // A MODIFIER //

        /*const poketype = req.query.type;
        console.log(poketype)
        
        const pokeverif =  itemList.includes(poketype, type)
        console.log(pokeverif)*/
        return res.status(400).send("Sorry the specific Pokemon not found");

      }

      return res.json(pokedex.find(c => c.type == poketype));

    };

    return res.json(pokedex.find(c => c.name.english === pokename));

  }

  return res.json(pokedex[req.query.id - 1]);
})



module.exports = router;