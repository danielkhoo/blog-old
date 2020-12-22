import Link from 'next/link'

export default function Navigation({ selected }) {
  return <nav className={'w-full h-16 flex flex-row justify-start items-center'}>
    <Link href="/">
      <a className={`w-24 h-full flex justify-center items-center no-underline font-medium hover:text-primary 
      ${selected === '/' ? 'text-primary' : 'text-gray'}`}>About</a>
    </Link>
    <Link href="/blog">
      <a className={`w-24 h-full flex justify-center items-center no-underline font-medium hover:text-primary
      ${selected === '/blog' ? 'text-primary' : 'text-gray'}`}>Blog</a>
    </Link>
    <Link href="/projects">
      <a className={`w-24 h-full flex justify-center items-center no-underline font-medium hover:text-primary 
      ${selected === '/projects' ? 'text-primary' : 'text-gray'}`}>Projects</a>
    </Link>
  </nav>
}