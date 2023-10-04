const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
function renderPosts(){
    let post=document.getElementById("post")
for(let i=0;i<posts.length;i++){
    console.log("hii")
    post.innerHTML+=`
    <section class="post-head">
    <img src="${posts[i].avatar}" class="user-avatar" alt="avatar-of-${posts[i].name}"> 
    <div id="user-details">
        <p class="bold small-left-space">${posts[i].name}</p>
        <p class="small-left-space">${posts[i].location}</p>
    </div>
    </section>
    <img class="post-image" src="${posts[i].post}" alt="post-of-${posts[i].name}">
    <section class="post-content">
        <div class="icons">
            <img src="images/icon-heart.png" class="icon small-left-space" alt="likes-symbol">
            <img src="images/icon-comment.png" class="icon small-left-space" alt="comments-symbol">
            <img src="images/icon-dm.png" class="icon small-left-space" alt="share-symbol">
        </div>
        <p class="likes-count bold small-left-space">${posts[i].likes} likes</p>
        <p class="username-caption small-left-space">
            <span class="bold">
                ${posts[i].username}
            </span> 
            ${posts[i].comment}
        </p>
    </section>`
}
}
renderPosts()