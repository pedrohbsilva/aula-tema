import React, { useEffect, useState } from 'react'
import {useHistory, useParams, useLocation, Link} from 'react-router-dom'
function Home(){
  const [count, setCount] = useState(0)
  const history = useHistory();
  const {offset, limit} = useParams()
  const location = useLocation()
  console.log(location, offset, limit)
  useEffect(()=>{
    const load = () => {
      if(count === 10){
        history.push('/about')
      }
    }
    load()
  }, [history, count])

  return(
    <>
    <h1>
      Home
    </h1>
    <Link to="/about">Ir para About</Link>
    <button type="button" onClick={()=>setCount(count+1)}>Contador</button>
    </>
  )
}

export default Home