import { useState } from 'react'
import MainCard from './components/MainCard'
import Grid from "@material-ui/core/Grid";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item>
          <MainCard />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
