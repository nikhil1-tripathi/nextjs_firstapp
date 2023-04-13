import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import utilStyles from '../../styles/utils.module.css';
const ApiWork = ({data}) => {
   
  return (
  //  <>
  // {data.splice(0,5).map((ele,i) =>{
        
  //       return(
  //         <>
  //          <Link href={`${ele?.id}`}>
  //         <li
         
  //          key={ele?.id}>  {ele?.title}{"   "}</li>
  //       </Link>
  //         </>
  //       )
  //      })}
  //  </>




  <Layout home>
  {/* Keep the existing code here */}

  {/* Add this <section> tag below the existing <section> tag */}
  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    <h2 className={utilStyles.headingLg}>Blog</h2>
   
    {data.map((ele,i) =>{
        
        return(
          <>
          
           
            <Link href={`${ele?.id}`}>
            <ul className={utilStyles?.list}>
          <li
         
           key={ele?.id}>  {ele?.title}{"   "}</li>
               </ul>
           </Link>
          
      
          </>
        )
       })}

  </section>
</Layout>
  )
}

export default ApiWork

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
   
    return {
      props: {
        data,
      },
    }
}
  