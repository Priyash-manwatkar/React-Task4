import React from 'react'
import { people } from '../data'

// function Priyash() {
//   return (
//     <div>

//         {
         
            
//             people.map((value,i)=>{
//                  return(<div key={i}>
//                       <h1>Name:- {value.name}</h1>
//                     <h2>Age:- {value.age}</h2>
//                     <h3>Email:- {value.email}</h3>
                  
//                     <h4>id:- {value.id}</h4>
//                     <hr/>
//                 </div>)

//             })
//         }
          
        
      
//     </div>
//   )
// }
// function Priyash()
// {
//   return(
    
//     people.map((value,index)=>{
//       return(
//       <div key={index}>
//         <h1>{value.name}</h1>
//         <h1>{value.id}</h1>
//         <h1>{value.age}</h1>
//         <h1>{value.email}</h1>
      

//       </div>)
//     })
//   )
// }

// function Priyash()
// {
//   return(
//     <div>
//       {
//         people.map((value,index)=>(
//           <div key={index}
//           >
//             <h1>{value.name}</h1>
//             <h1>{value.age}</h1>
//             <h1>{value.id}</h1>
//             <h1>{value.email}</h1>

//           </div>
//         )
//         )
//       }
//     </div>
//   )
// }

// function Priyash()
// {
//   return(
//     people.map((value,i)=>(
//       <div key={i}>
//        <h1>Name:- {value.name}</h1>
//        <h1>{value.age}</h1>
//             <h1>{value.id}</h1>
//              <h1>{value.email}</h1>

//       </div>
//     ))
//   )
// }
function Priyash()
{
  return(
   people.map((value,i)=>(
    <div key={i}>
      <h1>{value.name}</h1>
      <h1>{value.id}</h1>
      <h1>{value.age}</h1>
      <h1>{value.email}</h1>

    </div>
   )
    
   )
  )
}
export default Priyash
