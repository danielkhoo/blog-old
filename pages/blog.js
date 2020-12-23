import Link from 'next/link'
import Navigation from '../Components/navigation'
import Layout from '../Components/layout'
import { getAllPosts } from '../lib/api'
import { parseISO, format } from 'date-fns'

export default function Blog(props) {
  return (
    <Layout>
      <Navigation selected='/blog' />
      <main className={"flex mx-6 my-24 items-center"}>

        <div className={''}>
          {props.posts.map(post => {
            return <BlogItems
              date={post.date}
              title={post.title}
              tags={post.tags || ''}
              url={post.slug}
            />
          })}
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug', 'tags'])
  return {
    props: { posts },
  }
}

const BlogItems = ({ date, title, tags, url }) => {
  const displayDate = parseISO(date)
  return <div className={'my-8 flex items-center'}>
    <span className={'text-base text-gray w-2/12'}><time dateTime={date}>{format(displayDate, 'MMM yyyy')}</time></span>
    <div className={'ml-4 w-10/12'}>
      <Link href={`/${url}`}><a className={'text-lg text-black no-underline hover:text-primary'}>{title}</a></Link>
      <span className={'ml-4 text-base text-gray'}>{tags}</span>
    </div>
  </div>
}
