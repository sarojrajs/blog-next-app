import PostGrid from '../PostGrid';
import classes from './AllPost.module.css';

const AllPost = (props)=>{
    return(
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostGrid posts={props.posts}/>
        </section>
    )
}

export default AllPost;