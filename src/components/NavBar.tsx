"use client"
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
import Image from "next/image";
import styles from './NavBar.module.css'

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false)
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/servicos", text: "Serviços" },
    { href: "/provasocial", text: "Prova Social" },
    { href: "/diferencial", text: "Diferenciais" },
    { href: "/sobreNos", text: "Sobre nós" },
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.contentnav}>
        <div className={styles.logonav}>
          <Link
            href="#"
            onClick={() => scrollToTop}
            className={styles.logo}
          >
            <Image
              src="/variacaoLogo.png"
              alt="Logo da Advocacia Assunção"
              fill
              sizes="210px"
            />
          </Link>
        </div>
        <div className={styles.buttonsnav}>
          {navLinks.map((link) => {
            return (
              <Link
                key={link.text}
                href={link.href}
                className={`${pathname === link.href ? styles.activeLink : ""}
                   ${styles.link}`}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
        <div className={styles.icone}>
          {showLinks ? (
            <button onClick={() => setShowLinks(false)}>
              <MdOutlineClose className={styles.iconeMd}/>
            </button>
          ) : (
            <button onClick={() => setShowLinks(true)}>
              <GiHamburgerMenu className={styles.iconeGi}/>
            </button>
          )}
        </div>
      </div>
      {showLinks ? (
        <div onClick={() => setShowLinks(false)} className={styles.linksnavmobile}>
          <div className={styles.contentnavmobile}>
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.text}
                  href={link.href}
                  className={`${pathname === link.href ? styles.activeLink : ''} ${styles.link}`}
                >
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>
      ) : undefined}
    </nav>
  )
}