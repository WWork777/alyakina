'use client'
import './Blog.scss'
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';



export default function Blog(){

	const [articles, setArticles] = useState([]);


    useEffect(() => {
        fetch('/Blog/Articles.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setArticles(data.slice(0, 3));
            })
         
    }, [])

	return (
		<>
		<div className='blog' style={{minHeight:"100px"}}>
			<h2><span>Полезные</span> статьи</h2>
			<div className="blog-cards">
				{articles.map(article => (
					<div className="article-card" key={article.id}>
						<Link style={{textDecoration: 'none'}} href={`/blog/${article.url}`}>
							<Image src={`/Blog/${encodeURIComponent(article.photo)}.webp`} alt={article.title} width={500} height={600}/>
						</Link>
						{/* <Link style={{textDecoration: 'none'}} href={`/blog/${article.url}`}>
							<h4>{article.title}</h4>
						</Link> */}
						<Link style={{textDecoration: 'none'}} href={`/blog/${article.url}`}>
							<p className='card-title'>{article.title}</p>
						</Link>

					</div>
				))}
			</div>
				<Link className="link-more" href='/blog'><span>Все статьи</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/></svg>
				</Link>
			
		</div>
		</>
	)
}