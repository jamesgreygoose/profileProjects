const { Pool } = require("pg"); //MAN WITH A HOSE!!

const pool = new Pool({
  //Pool is a class, it can inherit properties.
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD
});
console.log(pool);

const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

module.exports = {
  query
};
//ABOVE LINE IS SAME AS
//function query (text, params, callback)  {
//     return pool.query(text, params, callback);            //so query: means FUNCTION QUERY
// }

// module.exports{
//   query
// }
