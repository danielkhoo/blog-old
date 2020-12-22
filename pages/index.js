
import Head from 'next/head'
import Navigation from '../Components/navigation'
import Layout from '../Components/layout'

export default function Home() {
  return (
    <Layout>
      <Navigation selected='/' />
      <Head>
        <title>daniel - about</title>
      </Head>
      <main className={" flex flex-col-reverse mx-6 md:my-24 md:flex-row justify-center items-center bg-gray-100"}>
        <div className={'text-lg flex-3'}>
          <p>Hello there, I’m Daniel.
          Welcome to my online home for ideas, writing and side projects
            <br /><br /><em>“Art is never finished, only abandoned.” Leonardo Da Vinci</em>
          </p>
        </div>
        <div className={'my-16 flex-2'}>
          <img src="https://github.com/danielkhoo.png" alt="daniel" style={{ width: 220, height: 220, borderRadius: 110 }} />
        </div>
      </main>
    </Layout >
  )
}



