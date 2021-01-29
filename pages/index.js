import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Posts from './Posts'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Posts />
    </div>
  )
}
