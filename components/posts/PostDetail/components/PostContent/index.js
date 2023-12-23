import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PostHeader from '../PostHeader';
import classes from './PostContent.module.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'
const DUMMY_POSTS ={
    slug:'getting-started-with-nextjs',
    title:'Getting Started with NextJS',
    image:'getting-started-nextjs.png',
    excerpt:'NextJs is a react framework for production- item makes building fullstack React apps and sites a breeze and ships with built-in SSR',
    date:'2023-12-23',
    content:'# This is a first post'
}

const PostContent = (props)=>{
    const {post} = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`

    const customRenderers = {
        img(props){
            return <Image src={`/images/posts/${post.slug}/${props.src}`} alt={props.alt} width={600} height={300}/>
        },
        code(code){
            const {children, className, node, ...rest} = code
            const match = /language-(\w+)/.exec(className || '')
            // return <SyntaxHighlighter language={language} children={value} style={atomDark}/>
            return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={atomDark}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
        }
    }

    return(
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath}/>
            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent;