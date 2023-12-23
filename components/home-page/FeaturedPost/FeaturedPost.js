import PostGrid from '@/components/posts/PostGrid';
import classes from './FeaturedPost.module.css'
const FeaturedPost = (props)=>{
    const {posts} = props;
    return(
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={posts}/>
        </section>
    )
}

export default FeaturedPost;