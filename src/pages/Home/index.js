function Hello (){
  return <h1>Hello World</h1>
}

function Home(params) {
  return (
    <div>
      <Hello/>
      <Hello/>
      <Hello/>
    </div>
  )
}
export default Home