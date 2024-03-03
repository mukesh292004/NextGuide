import Link from 'next/link';
import React from 'react'

interface User{
  id:Number;
  name:String;
  email:String;
}
interface Props{
  searchParams:{sortOrder:string}
}
const Userspage = async({searchParams:{sortOrder}}:Props) => {
  const data=await fetch("https://jsonplaceholder.typicode.com/users",{
    // cache: "no-cache",  does not store the data in cache of file system
    next:{revalidate:20} // revalidates the data after 20 seconds
    
  });
  const users:User[]=await data.json();  
  console.log(sortOrder); 
  return (
    <>
      <h1>User Details</h1>
      <table className='table'>
        <thead>
          <tr>
            
            <th>
              <Link href="/User?sortOrder=name"> Name </Link>
              
            </th>
            <th><Link href="/User?sortOrder=email"> Email </Link></th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr>
             
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </>
  )
}

export default Userspage