import Head from "next/head"

export default function Blog({ title, description }) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <h1>Article</h1>
    </>
  )
}


export async function getServerSideProps() {
    return {
        props: {
            title: 'Article Title',
            description: 'Article Description'
        }
    }
}
