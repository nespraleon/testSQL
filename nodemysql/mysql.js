var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "focyl",
  password: "focyl",
  //database: "tiendaonline",
  database: "maria",
});

//con.connect(function (err) {
// if (err) throw err;
// console.log("Connected!");
// var sql = "INSERT INTO customers (name, address) VALUES ?";
// var values = [
//   ["John", "Highway 71"],
//   ["Peter", "Lowstreet 4"],
//   ["Amy", "Apple st 652"],
//   ["Hannah", "Mountain 21"],
//   ["Michael", "Valley 345"],
//   ["Sandy", "Ocean blvd 2"],
//   ["Betty", "Green Grass 1"],
//   ["Richard", "Sky st 331"],
//  ["Susan", "One way 98"],
//   ["Vicky", "Yellow Garden 2"],
//  ["Ben", "Park Lane 38"],
//  ["William", "Central st 954"],
//    ["Chuck", "Main Road 989"],
//    ["Viola", "Sideway 1633"],
// ];

// con.connect(function (err) {
//   if (err) throw err;
//   var sql =
//     "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted, ID: " + result.insertId);
//   });
// });

// con.connect(function (err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function (err) {
//   if (err) throw err;
//   con.query(
//     "SELECT name, address FROM customers",
//     function (err, result, fields) {
//       if (err) throw err;
//       console.log(fields);
//     }
//   );
// });

// con.connect(function (err) {
//   if (err) throw err;
//   con.query(
//     "SELECT * FROM customers WHERE address = 'Park Lane 38'",
//     function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     }
//   );
// });

// con.connect(function (err) {
//   if (err) throw err;
//   con.query(
//     "SELECT * FROM customers WHERE address LIKE 'S%'",
//     function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     }
//   );
// });

// var adr = "Mountain 21";
// var sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr);
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// var adr = "Mountain 21";
// var sql = "SELECT * FROM customers WHERE address = ?";
// con.query(sql, [adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// var name = "Amy";
// var adr = "Mountain 21";
// var sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
// con.query(sql, [name, adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// con.connect(function (err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

con.connect(function (err) {
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
