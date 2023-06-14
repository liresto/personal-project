const data = require('../data/data')
const Post = require('../models/post-model')

module.exports = {


    adminConsole: async function(request, response){

        if(request.isAuthenticated()){
    await Post.find({}).then(function(post){
       //debug: we refactored to have if outside of mongoose method
            response.render('pages/admin', {
            posts:post,
        })
    })
        .catch(function(error){
            console.log(error)
        })
    }
        
        else{
        response.redirect('/login')
        } 
    },
    
// adminConsole: (request, response) => {
//     response.render('pages/admin', {
//         posts:data,
//         post:data,
//     });
// },

createPost: (request, response) => {
    // if(request.isAuthenticated()){
    response.render('pages/create');
    // }else{
    //     response.redirect('/login')
    // }
},


updatePost: async function(request, response) {
    const { _id } = request.params;
    // const foundBook = data.find(book => book._id === String(_id));
        // if(request.isAuthenticated()){
    await Post.findOne({ _id: _id }).then(function (post) {
        response.render('pages/update', {
            post: post
        })
    })

    .catch(function (error) {
        console.log(error)
    })
},


// else{
//     response.redirect('/login')
//     } 




// updatePost: (request,response) => {
//     response.render('pages/update', {
//         post:data,
//     });
// }
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