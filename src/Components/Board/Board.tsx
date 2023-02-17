import { useState } from "react";

export default function Board() {
   const [count, setCount] = useState(0);
   return (
      <div className='board'>
         <h1>{count}</h1>
         <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
   );
}
