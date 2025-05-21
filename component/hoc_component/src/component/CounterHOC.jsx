import React, { useState } from "react";

const CounterHOC = (WrappedComponent) => {
  return () => {
    const [no, setNo] = useState(0);

    const Increment = () => setNo(no + 1);
    const Decrement = () => setNo(no - 1);

    return (
      <WrappedComponent cnt={no} inc={Increment} dec={Decrement} />
    );
  };
};

export default CounterHOC;



// import React, { useState } from "react"


// const CounterHOC = (WrappedComponent) => {
    
//   return ()=>{
//     const [no, setNo] =useState(0)
   
//     const Increment = ()=>{
//       setNo(no+1)
//     }
    
//     const Decrement = ()=>{
//       setNo(no-1)
//     }

 
//     return(<WrappedComponent cnt={no} inc={Increment} dec={Decrement}> </WrappedComponent>)
//   }
// }

// export default CounterHOC