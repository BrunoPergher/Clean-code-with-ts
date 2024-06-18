import axios from 'axios'
import { Post } from '../@types/post'

const postRepository = {
    getall: async () => {
        const { data } = await axios
            .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res)

        return data
    },
}

export { postRepository }
