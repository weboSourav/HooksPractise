import React, { useState } from 'react'

const App = () => {


  const [count,setCount] = useState(1);
  return (
    <div className='container'>
    


 <h1>count is {count}</h1>
<button className='btn' onClick={()=>
  {

setCount(count*2);
  }
}>tap me daddy</button>

    </div>
  )
}

export default App