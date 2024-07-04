import Image from "next/image"
import Link from "next/link"
import styles from "./postCard.module.css"

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      {post.img && 
      <div className={styles.imgContainer}>
           
      <Image src={post.img} alt="" fill className={styles.img}/>
    </div>
      }
         
        
      </div>
      
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>

      <span className={styles.date}>01.01.2024</span>
        <p className={styles.desc}>{post.desc}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>Ver página</Link>
      </div>
    </div>
  )
}

export default PostCard;