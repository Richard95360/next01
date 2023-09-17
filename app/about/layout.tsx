import  { ReactNode } from 'react'
import styles from './styles.module.css'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'About Next Page',
  description: 'Generated by create next app',
}

interface Props {
    children: ReactNode
}
export default function AboutLayout({children}:Props) {
  return (
    <>
    <nav>About NavBar</nav>
    <main className={styles.main}>
       {children}
    </main>
    </>
  )
}
