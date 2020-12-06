import * as React from "react"
import {Button} from '@material-ui/core';
import Navbar from '../components/Navbar';
import HomeComponent from "../components/HomeComponent";
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <HomeComponent />
      <Footer />
    </div>
  )
}

export default IndexPage
