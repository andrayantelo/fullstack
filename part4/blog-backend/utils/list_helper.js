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
        return curr.likes === maxLikes
    })[0]
    // delete _id, url, and _v
    mostLikedBlog = _.omit(mostLikedBlog, '_id', 'url', '__v')
    return mostLikedBlog
}

const mostBlogs = (blogs) => {
    if (_.isEmpty(blogs)) {
        return {}
    }
    // make a list of the author names
    const authors = _.uniq(blogs.map(blog => blog.author))
    // get the number of blogs per author
    const results = _.map(authors, author => {
        var length = _.reject(blogs, blog => {
            return (blog.author.indexOf(author) < 0)
        }).length
        return { author, blogs: length }
    })
    // find author with highest number of blogs
    const highest = _.maxBy(results, result => result.blogs)
    return highest
}

const mostLikes = (blogs) => {
    if (_.isEmpty(blogs)) {
        return {}
    }
    const likes = _.maxBy(blogs, blog => blog.likes)
    return _.omit(likes, '_id', 'url', '__v', 'title')
}

module.exports = {
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}