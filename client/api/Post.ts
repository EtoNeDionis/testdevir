import axios from "axios"

export class Post {

    static async getPosts() {
        const data = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL + 'posts')

        return data
    }

    static async addNewPost(title: string, content: string) {

        return await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + 'posts/create', { title, content })
    }

    static async deletePost(_id: string) {
        return await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + 'posts/delete', { _id })
    }
}