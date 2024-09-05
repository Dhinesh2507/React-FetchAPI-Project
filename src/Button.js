import React from "react"

const Button = ({ fetchData }) => {
  return (
    <>
    <button
    type='button'
    aria-label='users'
    onClick={() => fetchData('users')}
    >
    User
    </button> 
    <button
    type='button'
    aria-label='posts'
    onClick={() => fetchData('posts')}
    >
    Post
    </button> 
    <button
    type='button'
    aria-label='comments'
    onClick={() => fetchData('comments')}
    >
    Comments
    </button> 
     </>
  )
}

export default Button