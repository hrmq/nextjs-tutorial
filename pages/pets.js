import Image from "next/image"
import img from '../public/images/1.jpg'
import { useSession, signIn} from "next-auth/react"

export default function PetsPage() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
        signIn()
    }
  })
  return (
    <div>
        {/* blurDataUrl */}
        <Image src={img} placeholder='blur' alt='pet' width='280' height='420'/>
        {
            ['1', '2', '3', '4', '5'].map(path => {
                return (
                    <div key={path}>
                        <Image src={`/images/${path}.jpg`} alt='pet' width='280' height='420'/>
                    </div>
                )
            })
        }
    </div>
  )
}
