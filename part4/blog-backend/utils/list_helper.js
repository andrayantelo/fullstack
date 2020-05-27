const _ = require('lodash')

const totalLikes = (blogs) => {
    const sum = blogs.reduce((total, curr) => {
        return total + curr.likes
    }, 0)
    return sum
}

const favoriteBlog = (blogs) => {
    const maxLikes = Math.max.apply(Math, blogs.map(blog => blog.likes))
    const mostLikedBlog = blogs.reduce((curr) => curr.likes === maxLikes)
    // delete _id, url, and _v
    _.omit(mostLikedBlog, '_id', 'url', '_v')
    return mostLikedBlog
}

module.exports = {
    totalLikes,
    favoriteBlog
}