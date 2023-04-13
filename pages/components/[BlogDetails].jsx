import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'

const BlogDetails = ({data}) => {
 
 
  return (
    <>
    <div>BLOG DETAILS</div>
    <li>
    {data.title}
    </li>
    <li>
    {data.id}
    </li>
    <li>
    {data.body}
    </li>
    </>
  )
}

export default BlogDetails

export async function getServerSideProps(context) {
    const router = context
    console.log("-------->",router.query)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${router.query.BlogDetails}`);
    const data =  await res.json();
    return {
      props: {
       data
      },
    };
  }