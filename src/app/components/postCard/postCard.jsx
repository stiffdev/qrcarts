import Image from "next/image"
import styles from "./postCard.module.css"

const PostCard = ({post}) => {
  return (
    
    <div className={styles.container} key={post.id}>

<div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
<a href="#">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* Ajusta la relación de aspecto aquí */}
          <Image
            className="rounded-t-lg"
            src={post.img}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{post.title}</h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">{post.desc}</p>
            <a href={`/blog/${post.slug}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" >
                Leer Más
            </a>
        </div>
        </div>
        </div>
    
  )
}

export default PostCard;