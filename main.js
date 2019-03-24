const tweeter = Tweeter()
const renderer = Renderer()
const render = () => renderer.renderPosts(tweeter.getPosts()) 


$("#container").on("click", "i", function(){  //remove comment
    let postID = $(this).closest(".post").attr("id")
    let commentID = $(this).closest(".comment").attr("id")
    tweeter.removeComment(postID,commentID)
    render()
})
$("#container").on("click", ".comButton", function(){ //add comment
    let text = $(this).closest(".post").find(".comInput").val()
    if (text != ""){
        tweeter.addComment(text, $(this).closest(".post").attr("id"))
        render()
    }
})
$("#container").on("click", "#post", function(){ //add post
    let text = $(this).siblings("#input").val()
    console.log("asd")
    if (text != ""){
        tweeter.addPost(text)
        render()
    }
})
$("#container").on("click", ".postDel", function(){ //remove post
    let postID = $(this).closest(".post").attr("id")
    tweeter.removePost(postID)
    render()
})
render()