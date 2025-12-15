'use client';
import Link from "next/link";
import styles from "@/app/styles/page.module.css";
import { usePathname } from "next/navigation";

const links = [
  { name: 'Home', href: '/' },
  { name: 'List', href: '/list/'}
];

export default function MainFooter() {
  const pathname = usePathname();
  return (
        <footer className={styles.footer}>

          <nav>
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={pathname === link.href ? styles.activeLink : styles.link}
                >
                  <p className="hidden md:block">{link.name}</p>
                </Link>
              );
            })}
          </nav> 
          <div>
            <p>© 2025 Cat Smash. All rights reserved.</p>
          </div>
        </footer>
    );
}

