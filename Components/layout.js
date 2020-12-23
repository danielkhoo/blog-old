import Head from 'next/head'
export default function Layout(props) {
  return (
    <>
      <Head>
        <title>daniel's site</title>
        <meta
          name="description"
          content={`Repository for software engineering ideas, writing, side projects and stonks`}
        />
      </Head>
      <div className={"min-h-screen flex flex-col justify-start items-center font-sans"}>
        <div className={"max-w-screen-md w-full min-h-screen"}>
          {props.children}
        </div>
      </div>
    </>

  )
}