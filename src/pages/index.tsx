import * as React from "react"
import {Button} from '@material-ui/core';
import Navbar from '../components/Navbar';

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      Hello World
      <Button variant="contained" color="primary">Hello</Button>
    </div>
  )
}

export default IndexPage
