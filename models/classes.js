module.exports = (dbPoolInstance) => {

  let something = (callback)=>{
    //query

     let query = 'SELECT * FROM classes';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback('banana', queryResult.rows);


        }else{
          callback(null, null);

        }
      }
    });

  };

  return {
    something:something,
  };
}