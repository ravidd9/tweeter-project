const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts()) 


// $("i").on("click", function(){  //not working
//     console.log($(this).attr("id"))
//     let postID = 1 //find how to get it
//     let commentID = $(this).attr("id").replace("i","c")
//     tweeter.removeComment(postID,commentID)
//     renderer.renderPosts(tweeter.getPosts())
// })