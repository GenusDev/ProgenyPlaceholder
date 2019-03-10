// import $ from "jquery";
//
// export const storeInfo = user => (
//   $.ajax({
//     method: 'POST',
//     url: '/users',
//     data: { user }
//   })
// );



var sheetsu = require('sheetsu-node')
// import sheetsu from 'sheetsu-node' for ES6
var client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0dn/03b4db40b7aa' })
// Adds single row to spreadsheet


export const storeInfo = (user) => {
  console.log("user in storeFunc", user)

  client.create(user).then(function(user) {
    console.log(user);
  }, function(err){
    console.log(err);
  })
}
