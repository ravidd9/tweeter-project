const Renderer = function () {
    const renderPosts = function(posts){
        $("#posts").empty()
        for(let index in posts){
            let newPost = $(`<div class='post' id=${posts[index].id}>${posts[index].text}</div>`)
            $("#posts").append(newPost)
            for(let index2 in posts[index].comments){
                let newComment = $(`<div class='comment' id=${posts[index].comments[index2].id}><i class="fas fa-minus-circle" id=i${posts[index].comments[index2].id.slice(1)}></i>${posts[index].comments[index2].text}</div>`)
                $(`#${posts[index].id}`).append(newComment)
            }
        }
    }
    return {
        renderPosts
    }
}