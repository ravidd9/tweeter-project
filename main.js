const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts()) 


$("#container").on("click", "i", function(){ 
    let postID = $(this).closest(".post").attr("id")
    let commentID = $(this).closest(".comment").attr("id")
    tweeter.removeComment(postID,commentID)
    renderer.renderPosts(tweeter.getPosts())
})
$("#container").on("click", ".comButton", function(){
    let text = $(this).closest(".post").find(".comInput").val()
    if (text != ""){
        tweeter.addComment(text, $(this).closest(".post").attr("id"))
        renderer.renderPosts(tweeter.getPosts())
        
    }
})
$("#container").on("click", "#post", function(){
    let text = $(this).siblings("#input").val()
    console.log("asd")
    if (text != ""){
        tweeter.addPost(text)
        renderer.renderPosts(tweeter.getPosts())
    }
})
$("#container").on("click", ".postDel", function(){
    let postID = $(this).closest(".post").attr("id")
    tweeter.removePost(postID)
    renderer.renderPosts(tweeter.getPosts())
})