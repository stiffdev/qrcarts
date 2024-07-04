import { options } from "@/lib/options";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Links from "./links/Links";
import styles from "./navbar.module.css";


const Navbar = async () => {

  const session = await getServerSession(options);

    return (
    <div className={styles.container}>
    <div className={styles.logo}> 
      <Image
              src="/about.png"
              alt=" Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            /></div>
    <Links session={session} />
    </div>
    )
  }
  
export default Navbar;