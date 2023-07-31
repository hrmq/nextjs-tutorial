
export default function Post({ post }) {
    return (
        <>
            <h2>
                {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
        </>
    )
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    }).slice(0,3)

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    if (!data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post: data
        }
    }
}
