import AllPost from "@/components/posts/AllPost";
import { getAllPosts } from "@/lib/posts-util";

const AllPostPage = (props)=>{
    const {posts} = props;
    return(
        <AllPost posts={posts}/>
    )
}

export async function getStaticProps(){
    const allPosts = getAllPosts()
    return{
        props:{
            posts: allPosts
        },
        revalidate:100
    }
}

export default AllPostPage;