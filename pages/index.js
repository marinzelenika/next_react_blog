import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import NavbarHeader from '../components/NavbarHeader'


export default function Home({articles}) {
  return (
    <div>
      <NavbarHeader />
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const articles = await res.json()

  return {
      props: {
          articles
      }
  }
}

export const getImages = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
  const photos = await res.json()

  return {
      props: {
          photos
      }
  }
}
