module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  // let indexControllerCallback = (request, response) => {
  //     db.pokemon.getAll((error, allPokemon) => {
  //       response.render('pokemon/index', { allPokemon });
  //     });
  // };

  let indexControllerCallback = (request, response) => {
    var stuff =(error, allClases) => {
            console.log(error);
            console.log(allClases);
        // response.render('classes/index', { allClases });
          response.send(allClases);
      }
      db.classes.something(stuff);
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
  };

}