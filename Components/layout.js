
export default function Layout(props) {
  return (
    <>
      <div className={"min-h-screen flex flex-col justify-start items-center font-sans"}>
        <div className={"max-w-screen-md w-full min-h-screen"}>
          {props.children}
        </div>
      </div>
    </>

  )
}