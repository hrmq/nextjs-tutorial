import { useRouter } from "next/router"
import Link from "next/link"

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    // router.push('/product')
    router.replace('/product')
  }

  return (
    <>
      <div>Home</div>
      <Link href='/blog'>Blog</Link><br/>
      <Link href='/product'>Product</Link><br />
      <button onClick={handleClick}>
        Place Order
      </button>
    </>
  )
}
