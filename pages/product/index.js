import Link from "next/link"

export default function ProdcutList({prodcuctId = 100}) {
  return (
    <>
      <Link href='/'>Home</Link>
      <h2><Link href='/product/1'>Prodcut 1</Link></h2>
      <h2><Link href='/product/2'>Prodcut 2</Link></h2>
      <h2><Link href='/product/3' replace>Prodcut 3</Link></h2>
      <h2><Link href={`/product/${prodcuctId}`}>Prodcut {prodcuctId}</Link></h2>
    </>
  )
}
