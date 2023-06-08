const data = require('../data/data');

module.exports = {

    allPosts: (request, response) => {
        response.render('pages/posts',{});
    },

    postDetails: (request, response) => {
        response.render('pages/post-detail', {});
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