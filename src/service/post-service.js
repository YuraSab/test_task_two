class PostService {

    url = 'https://jsonplaceholder.typicode.com/posts';
         //https://jsonplaceholder.typicode.com/posts?_page=2

    async getPosts() {
        return await fetch(`${this.url}`)
            .then(value => value.json())
    }

    async getPostsPerPage(page) {
        return await fetch(`${this.url}?_page=${page}`)
            .then(value => value.json())
    }

    async getPostsCount() {
        return await fetch(`${this.url}`)
            .then(value => value.json())
            .then(value => value.length)
    }
}

export const postService = new PostService();