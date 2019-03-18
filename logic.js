


const Tweeter = function () {
    let commentsCounter = 6
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    const getPosts = function(){
        return _posts
    }
    const addPost = function(tweet){
        _posts.push({
            "text": tweet,
            "id": "p" + (parseInt(_posts[_posts.length-1].id[1]) + 1),
            "comments": []
        })
    }
    const removePost = function(postID){
        for(let index in _posts){
            if(_posts[index].id == postID){
                _posts.splice(index, 1)
            }
        }
    }
    const addComment = function(text, postID){
        for(let index in _posts){
            if(_posts[index].id == postID){
                _posts[index].comments.push({
                    "id":"c" + (commentsCounter + 1),
                    "text": text
                })
                commentsCounter++
            }
        }
    }
    const removeComment = function(postID, commentID){
        for(let index in _posts){
            if(_posts[index].id == postID){
                for(let index2 in _posts[index].comments){                    if(_posts[index].comments[index2].id == commentID){
                        _posts[index].comments.splice(index2, 1)
                    }
                }
            }
        }
    }
    return{
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }

}
const tweeter = Tweeter()
console.log(tweeter.getPosts())

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}
//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}




//    const Render = function () {
//     const createTweRen = function () {

//     }
//     const createComRen = function () {

//     }
//     const renderAll = function () {

//     }
//     return {

//     }
// }