const data = require('../data/data')

module.exports = {

adminConsole: (request, response) => {
    response.render('pages/admin', {});
},

createPost: (request, response) => {
    response.render('pages/create', {});
},

updatePost: (request,response) => {
    response.render('pages/update', {});
}
// app.get("/admin", (request, response) => {
//     response.render('pages/admin');
//     console.log("This route points to the Admin console page")
//   });
  
//   app.get("/admin/create", (request,response) =>{
//     response.render('pages/create');
//     console.log("This route points to the Create page")
//   });
  
//   app.get("/admin/update", (request,response) => {
//     response.render('pages/update')
//   });

}