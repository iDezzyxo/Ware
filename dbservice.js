var mysql = require('mysql');

var con = mysql.createConnection({
  host: "vincentprivatenas.mynetgear.com",
  user: "dezzyw",
  password: "shin400",
  database: "Warehouse329"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


con.query("SELECT * FROM Warehouse329.Employee ", function (err, result) {
  if (err) throw err;
  console.log(result);

});
