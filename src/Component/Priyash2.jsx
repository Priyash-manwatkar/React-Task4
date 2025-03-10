import React from 'react';
import { people } from '../data';

// function Priyash2() {
//   return (
//     <div>
//         {
//             people.map((value,i)=>{
//                 const {id,name,email,age}=value;
//                 return(
//                     <div key={i}>
//                         <h1>Name :-  {name}</h1>
//                         <h2>Age:- {age}</h2>
//                         <h3>Email:- {email}</h3>
//                         <h4>Id :-  {id}</h4>
//         <hr/>
//                     </div>

//                 )
//             })

//         }
      
//     </div>
//   )
// }

// 
// function Priyash2()
// {
//     return(
//         people.map((value,index)=>{
//             return (
//                 <div key={index}>
//                     <h1>{value.name}</h1>
//                     <h1>{value.id}</h1>
//                     <h1>{value.age}</h1>
//                     <h1>{value.email  }</h1>

//                 </div>
//             )
//         })
//     )
// }

// function Priyash2()
// {
//     return(
//          people.map((value,index)=>{
//             const {id,name,age,email}=value;
//             return (
//                 <div key={index}>
//                     <h1>{id}</h1>
//                     <h1>{name}</h1>
//                     <h2>{age}</h2>
//                     <h3>{email}</h3>
//                 </div>
//             )
//          })
//     )

// }

// function Priyash2()
// {
//     return (
//         people.map((value,index)=>{
//          const {id,name,age,email}=value;
//          return(
//             <div key={index}>
//                 <h1>{name}</h1>
//                 <h2>{id}</h2>
//                 <h3>{age}</h3>
//                 <h4>{email}</h4>
//             </div>
//          )   
//         })
        
    
//     )
// }

function  Priyash2()
{
    return (
    <div className='flex flex-wrap justify-center bg-green-500'>
        {
        people.map((value,index)=>{
            const {id,name,email,age}=value;
            return (
                <div key={index} className='justify-center bg-blue-500  p-4  border-4 border-black
                 rounded-lg m-4 text-center text-3xl  w-128 h-64'>
                    <div className='flex flex-col align-center '>
                    <h1>{id}</h1>
                    <h2>{name}</h2>
                    <h3>{email}</h3>
                    <h4>{age}</h4>
                    </div>
                </div>
            )

        })}
        </div>
    
    )
}
export default Priyash2
