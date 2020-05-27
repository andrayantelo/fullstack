const listHelper = require('../utils/list_helper')
const input = require('./blogList')

describe('total likes', () => {
    test('Regular list of blogs', () => {
        const result = listHelper.totalLikes(input.blogs)
        expect(result).toBe(36)
    })

    test('list with one blog', () => {
        const result = listHelper.totalLikes(input.oneBlog)
        expect(result).toBe(1)
    })

    test('list with no blogs', () => {
        const result = listHelper.totalLikes([])
        expect(result).toBe(0)
    })
})

describe('favorite blog', () => {
    test('Regular list of blogs', () => {
        const result = listHelper.favoriteBlog(input.blogs)
        expect(result).toEqual(
            {
                title: 'Canonical string reduction',
                author: 'Edsger W. Dijkstra',
                likes: 12
            }
        )
    })
})