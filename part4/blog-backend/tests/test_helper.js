const Blog = require('../models/blog')

const initialBlogs = [
    {
        title: 'Hello World',
        author: 'Billy Bob',
        url: 'www.bobsworld.com',
        likes: 100
    },
    {
        title: 'Computers',
        author: 'Vanessa Lopez',
        url: 'www.computers.com',
        likes: 200
    }
]

const nonExistingId = async () => {
    const blog = new Blog({ title: 'will remove' })
    await blog.save()
    await blog.remove()
    console.log(JSON.stringify(blog))
    return blog._id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogs,
    nonExistingId,
    blogsInDb
}