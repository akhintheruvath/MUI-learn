import { useState } from "react";
import Employee from "./Employee";

function App() {
  let [count,setCount] = useState(0);
  const addCount = () => {
    setCount(count+1);
  }

  let emp = [
    {Name:'Akhin',Age:21},
    {Name:'Vahid',Age:21},
    {Name:'Arun',Age:23}
  ]

  return (
    <div>
      <button onClick={addCount}>Add</button>
      {
        emp.map((obj,index)=>
          <Employee key={index} {...obj}/>
        )
      }
    </div>
  );
}

export default App;