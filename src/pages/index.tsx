import * as React from "react"
import {Button} from '@material-ui/core';
import Navbar from '../components/Navbar';
import HomeComponent from "../components/HomeComponent";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <HomeComponent />
    </div>
  )
}

export default IndexPage
