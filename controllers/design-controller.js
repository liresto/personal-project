const data = require('../data/data');
// const {v4:uuid} = require('uuid');

module.exports = {

    allPosts: (request, response) => {
        response.render('pages/posts',{
            posts:data,
        });
    },

    postDetails: (request, response) => {
        let id = request.params._id;
        
    
        let design = data.find((post) => post._id === String(id));
       
    
        response.render('pages/post-detail', {
            post: design,
        });
    }
    
// app.get("/designs", (request,response) => {
//     response.render('pages/posts')
//     console.log("This points to the post detail")
//   });
  
//   app.get("/designs/:id", (request,response) => {
//     response.render('pages/post-detail')
//     console.log("This points to the post detail")
//   });

}