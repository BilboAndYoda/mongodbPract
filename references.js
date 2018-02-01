var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");


Post.create({
    title: "hello",
    content: "yo"
}, function(err, post){
    if(err){
        console.log(err)
    }else{
        
        console.log(post);
    }
})
