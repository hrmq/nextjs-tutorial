import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link href='/blog'>Blog</Link><br/>
      <Link href='/product'>Product</Link>
    </>
  )
}
