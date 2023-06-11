const data = require('../data/data');
const {v4:uuid} = require('uuid');
const Post = require('../models/post-model')
const passport = require('passport')

module.exports = {

    allPosts: async function (request, response) {
        
        await Post.find({}).then(function(post) {
            //waits for a request and response and finds all comics with {}, then when it finds everything it will search for the book 'function(book)', when await function gets clear it will render index page, then will render all books based on book parameter
            response.render('pages/posts', {
                posts: post,
            })
           
        })
        .catch(function(error){
            console.log(error)
        })
    },

    // allPosts: (request, response) => {
    //     response.render('pages/posts',{
    //         posts:data,
    //     });
    // },

    postDetails: async function (request,response) {

        // let id = request.params._id;    
        // let comic = data.find((book) => book._id === String(id));
        //review this concept ^

        const{_id} = request.params;
        //let the server know which one we need

        await Post.findOne({_id: _id}).then(function(post){
            response.render('pages/post-detail',
            {
                post:post,
            })
            })
            
            .catch(function(error){
                console.log(error)
            })
        
        //update
    },

    // postDetails: (request, response) => {
    //     let id = request.params._id;
        
    
    //     let design = data.find((post) => post._id === String(id));
       
    
    //     response.render('pages/post-detail', {
    //         post: design,
    //     });
    // },

    updatePost:(request,response)=>{
    
        //     let id = request.params._id;
        
    //     const title = request.body.title;
    //     const author= request.body.author;
    //     const publisher = request.body.publisher;
    //     const genre = request.body.genre;
    //     const pages = request.body.pages;
    //     const rating = request.body.rating;
    //     const synopsis= request.body.synopsis;
    //     const image = request.body.image;

    //     let comic = data.find((book) => book._id === String(id));

    //     //find by ID and update

    //     comic.title= title;
    //     comic.author = author;
    //     comic.publisher = publisher;
    //     comic.genre = genre;
    //     comic.pages = pages;
    //     comic.rating = rating;
    //     comic.synopsis = synopsis;
    //     comic.image = image;

    //     // for(book of bookData)
    //     // if(id === book._id){
    //     //     comicBook= book._id;
    //     // }
    //     // response.render('pages/update',{
    //     //     book: comic,
    //     // });
    //     response.redirect('/admin-console');
    // },

    const{_id} = request.params;

    const {artist, image, portfolio, title, description} = request.body;

        Post.findByIdAndUpdate(_id, {
        $set: {
        artist: artist,
        image: image,
        portfolio: portfolio,
        title: title,
        description: description,
    }
    }, {new: true}).then(function(){
            response.redirect('/admin');
        }).catch(function(error){
            console.log(error)
        })
    },

    deletePost: async function(request, response){
        // const id = request.params._id;
        const{_id} = request.params;

        await Post.deleteOne({_id: _id}).then(function({post}){
            response.redirect('/admin')
        })

},

    // updatePost: (request,response) => {
    //     let id = request.params._id;
        
    //     const artist = request.body.artist;
    //     const image = request.body.image ;
    //     const portfolio = request.body.portfolio;
    //     const title = request.body.title;
    //     const description = request.body.description;
       

    //     let design = data.find((post) => post._id === String(id));

    //     //find by ID and update

    //     post.artist= artist;
    //     post.image = image;
    //     post.portfolio = portfolio;
    //     post.title = title;
    //     post.pages = pages;
    //     post.description = description;
       
    //     // for(book of bookData)
    //     // if(id === book._id){
    //     //     comicBook= book._id;
    //     // }
    //     // response.render('pages/update',{
    //     //     book: comic,
    //     // });
    //     response.redirect('/admin');
    // },

    // createPost: (request,response) => {

    //         const {_id = uuid(), artist,image,portfolio,title,description} = request.body;
    //         //review this concept ^

    //         data.push({_id, artist, image, portfolio, title, description});
        
    //     response.redirect('/admin');
    // },


    // deletePost: (request, response) => {
    //     const id = request.params._id;

    //     const design = data.find((post) => post._id === String(id));

    //     let postIndex = data.indexOf(post);

    //     data.splice(postIndex, 1);

    //     // for (comicBook of book){
    //     //     if(id === book._id){
    //     //         comicIndex = indexOf(book._id)
    //     //         book.splice(comicIndex, 1)
    //     //     }
    //     // }

        

    //     response.redirect('/admin')

    // },

    createPost: (request,response) => {

        const {_id = uuid(), artist, image, portfolio,title, description} = request.body;
        //review this concept ^

        // data.push({_id, title, author, publisher, genre, pages, rating, synopsis});

        const newPost = new Post ({
            artist: artist,
            image: image,
            portfolio: portfolio,
            title: title,
            description: description,
        });

        newPost.save();
    
    response.redirect('/admin');
},
    
// app.get("/designs", (request,response) => {
//     response.render('pages/posts')
//     console.log("This points to the post detail")
//   });
  
//   app.get("/designs/:id", (request,response) => {
//     response.render('pages/post-detail')
//     console.log("This points to the post detail")
//   });

}