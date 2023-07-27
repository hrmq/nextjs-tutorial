import { useRouter } from "next/router"

export default function Prodcut() {
    const router = useRouter()
    const productId = router.query.productId
  return (
    <div>Prodcut {productId}</div>
  )
}
