import type { NextPage } from 'next'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Clients from '../components/Clients'
import Features from '../components/Features/index';
import About from '../components/About';
import Footer from '../components/Footer';
const Home: NextPage = () => {
  return (
    < >
     <Nav/>
     <Header/>
     <Clients/>
     <Features/>
     <About/>
     <Footer/>
    </>
  )
  }

export default Home
