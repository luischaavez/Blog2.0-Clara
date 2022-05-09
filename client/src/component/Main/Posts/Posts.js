import React from 'react'
import Post from './Post'

const Posts = ({posts}) => {
    console.log(posts)
    return (
        <div style={{display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'}}>
                {posts.map(p=>(
                  <Post post={p} img='https://source.unsplash.com/random/300×300'/>
                ))}
            {/* <Post img="https://images.unsplash.com/photo-1637951695049-9bbfbe118d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
            <Post img="https://images.unsplash.com/photo-1637927145286-5aa465fcadcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
            <Post img="https://images.unsplash.com/photo-1637947295095-5ee765b48b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
            <Post img="https://images.unsplash.com/photo-1633113093730-47449a1a9c6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
            <Post img="https://images.unsplash.com/photo-1637949599960-26339d5d8422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
            <Post img="https://images.unsplash.com/photo-1637954975855-bef3ec525549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
            <Post img="https://images.unsplash.com/photo-1637972598255-64388b943be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/> */}

        </div>
    )
}

export default Posts
