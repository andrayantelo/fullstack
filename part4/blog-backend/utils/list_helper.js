const _ = require('lodash')

const totalLikes = (blogs) => {
    const sum = blogs.reduce((total, curr) => {
        return total + curr.likes
    }, 0)
    return sum
}

const favoriteBlog = (blogs) => {
    const maxLikes = Math.max.apply(Math, blogs.map(blog => blog.likes))

    let mostLikedBlog = blogs.filter((curr) => {
        console.log(curr.likes)
        return curr.likes === maxLikes
    })[0]
    // delete _id, url, and _v
    mostLikedBlog = _.omit(mostLikedBlog, '_id', 'url', '__v')
    return mostLikedBlog
}

const mostBlogs = (blogs) => {

}

module.exports = {
    totalLikes,
    favoriteBlog,
    mostBlogs
}