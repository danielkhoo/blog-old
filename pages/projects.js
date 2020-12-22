import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../Components/navigation'
import Layout from '../Components/layout'

export default function Projects(props) {
  return (
    <Layout>
      <Navigation selected='/projects' />
      <Head><title>daniel - projects</title></Head>
      <main className={"flex mx-6 my-24 items-center"}>

        <div className={''}>
          <ProjectItem
            type="npm"
            title={'nric'}
            url={'https://www.npmjs.com/package/nric'}
            tags='#javascript'
          >
            <div className='my-1'>
              <img src="https://img.shields.io/npm/dw/nric?label=npm%20downloads&style=flat-square" />
              <span>An npm library for generating and validating Singapore NRIC numbers</span>
            </div>
          </ProjectItem>

          <ProjectItem
            type="web"
            title={'Graduate Employment Visualisation'}
            url={'https://danielkhoo.github.io/ges'}
            tags='#react'
          >
            <div className='my-1'>
              <span>A visualisation of employmenet and salary data by school and degree from GES 2018</span>
            </div>
          </ProjectItem>

          <ProjectItem
            type="mobile"
            title={'TRUN'}
            url={'https://www.youtube.com/watch?v=ZVCYgMpj1ks'}
            tags='#android'
          >
            <div className='my-1'>
              <span>A TRON-inspired GPS-based Multiplayer Android Game. Like Snake but players have to run for real</span>
            </div>
          </ProjectItem>
        </div>
      </main>
    </Layout>
  )
}


const ProjectItem = ({ type, title, tags, url, children }) => {
  return <div className={'my-8 flex items-center'}>
    <span className={'text-md text-gray w-2/12'}>{type}</span>
    <div className={'ml-4 w-10/12'}>
      <Link href={url}><a className={'text-lg text-black no-underline hover:text-primary'}>{title}</a></Link>
      <span className={'ml-4 text-base text-gray'}>{tags}</span>
      <div>
        {children}
      </div>
    </div>
  </div>
}
