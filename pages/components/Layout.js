import Footer from "./Footer";
import NavBar from "./NavBar";
import Header from 'next/head';



export default function Layout({children}){
    return (
        <>
          <Header>
            <link rel="shortcut icon/" href="/images/favicon.ico"/>
            <title>Pokemon</title>
          </Header>
          <NavBar/>
          <main>{children}</main>
          <Footer/>
        </>
        
    )
}