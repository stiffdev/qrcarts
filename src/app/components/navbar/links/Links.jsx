"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import styles from "./links.module.css";
import NavLink from "./navlink/NavLink";

const unauthenticatedLinks = [
  { title: "Inicio", path: "/" },
  { title: "Restaurantes", path: "/restaurantes" },
  { title: "Planes", path: "/planes" },
  { title: "Blog", path: "/blog" },
  { title: "Nosotros", path: "/about" },
  { title: "Contacto", path: "/contact" },
];

const authenticatedLinks = [
  { title: "Inicio", path: "/" },
  { title: "Mi Restaurante", path: "/my-restaurant" },
  { title: "Blog", path: "/blog" },
  { title: "Contacto", path: "/contact" },
  { title: "Cuenta", path: "/cuenta" },
];


const Links = ({ session }) => {
  const isAdmin = true; // Asegúrate de definir esto según tu lógica

  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const links = session?.user ? authenticatedLinks : unauthenticatedLinks;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <Link href="/api/auth/signout?callbackUrl=/" className={styles.logout}>
              Logout
            </Link>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/api/auth/signin" }} />
        )}
      </div>

      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={toggleMenu}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;


/*
const links = [
    {
      title: "Inicio",
      path: "/",
    },
    {
      title: "Restaurantes",
      path: "/restaurantes",
    },

    {
      title: "Planes",
      path: "/planes",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Nosotros",
      path: "/about",
    },
    {
      title: "Contacto",
      path: "/contact",
    },
  ];


const Links = ({session}) => {

    //temporal
//const session = true;
const isAdmin = true;

const [open, setOpen] = useState(false);

const toggleMenu = () => {
    setOpen(prev => !prev);
    console.log('open:', open); // Verifica el estado de `open` después de hacer clic en el botón
};


  return (
    <div className={styles.container}>
      <div className={styles.links}>
       {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {
            session ? (
                <>
                {
                    isAdmin && (
                        <NavLink item={{title: "Admin", path: "/admin"}}/>
                    )
                }
                <NavLink item={{title: "Mi Cuenta", path: "/account"}}/>
                <Link href="/api/auth/signout?callbackUrl=/" className={styles.logout}>Logout</Link>

                
                </>
            ) : (
                <NavLink item={{title: "Login", path: "/api/auth/signin"}}/>
            )

           
        }

        {/*

      !session ? (

        <>
        <NavLink item={{title: "Restaurantes", path: "/restaurantes"}}/>
        <NavLink item={{title: "Planes", path: "/planes"}}/>
        </>
       ) : null
       
      </div>


      <Image className={styles.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)}/>
      {
        open && (<div className={styles.mobileLinks}>
            {links.map((link) => (
                <NavLink item={link} key={link.title}/>
            ))}

        </div>
        )
      }
 
    </div>
  );
};

export default Links;*/