import Image from "next/image"
import img from '../public/images/1.jpg'

export default function PetsPage() {
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
