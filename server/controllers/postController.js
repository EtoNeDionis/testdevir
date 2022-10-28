const Post = require('../mongo/schema')

class postController {
    async getAll(req, res) {
        try {
            const posts = await Post.find({})
            res.json(posts)
        } catch (error) {
            console.log(error);
        }
    }

    async postOne(req, res) {
        try {
            const { title, content } = req.body
            const newPost = await Post.create({ title, content })
            return res.json(newPost)
        } catch (error) {
            console.log(error);
        }
    }

    async deleteOne(req, res) {
        try {
            const { _id } = req.body
            console.log(_id);
            const post = await Post.findById(_id)
            if (!post) return res.status(400).json('No post to delete')
            const deletedPost = await Post.deleteOne(post)
            return res.json(deletedPost)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new postController()