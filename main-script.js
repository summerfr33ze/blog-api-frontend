const postsList = document.querySelector(".posts-list")
const postData = async () => {
    try {
        const posts = await fetch("../blog-api/posts")
        console.log(posts)
        return posts

    }
    catch (error){
        console.error(error)
    }
}

postData().forEach(post => {
    const id = post._id
    const postElement = document.createElement("li")
    const postAnchor = document.createElement("a")
    const dateElement = document.createElement("div")
    postAnchor.textContent = `${post.title}`
    postAnchor.href = `./${id}`
    dateElement.textContent = `${post.date}`
    postElement.appendChild(postAnchor)
    postElement.appendChild(dateElement)
    postsList.appendChild(postElement)
})