import React from 'react'
import Link from 'next/link'

function Post({post}) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className='card'>
                <img src='/public/favicon.ico' alt=''/>

                <h3>{post.frontmatter.title}</h3>
                
                <div className="post-date">{post.frontmatter.date}</div>

                <p>{post.frontmatter.excerpt}</p>
            </div>
        </Link>
    )
}

export default Post
