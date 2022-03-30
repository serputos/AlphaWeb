import Link from "next/link";

const ENDPOINT="http://localhost:3000/api/hello" 

export default function Gallery({userName}) {
  return (
    <>
      <h1>Gallery of {userName}</h1>
      
        <Link href="/"><a>Go Home</a></Link>
      
      <style jsx>{"h1{color:red; font-size:36px;}"}</style>
    </>
  );
}

// añadirle al servidor las props que tiene que utilizar el componente //API PROMISES // se ejecuta en el sevidor
Gallery.getInitialProps = () =>{
  return fetch(ENDPOINT)
  .then(res=>res.json()) 
  .then(response=> { const{userName}= response
  return{userName}
})
}
