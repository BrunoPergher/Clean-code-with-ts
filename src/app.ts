import { postRepository } from './repository/PostRepository'

const main = async () => {
    const posts = await postRepository.getall()

    console.log(posts)
}

main()
