module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const studentsControllerCallbacks = require('./controllers/students')(allModels);
  // app.get('/pokemons', pokemonControllerCallbacks.index);
  // //app.get('/pokemons/:id', pokemons.getPokemon);
 app.get('/students', studentsControllerCallbacks.index);

 console.log("hahahahahha");
  //app.get('/pokemons/:id', pokemons.getPokemon);

   const classesControllerCallbacks = require('./controllers/classes')(allModels);

app.get('/classes', classesControllerCallbacks.index);
};