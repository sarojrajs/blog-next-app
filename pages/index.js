import FeaturedPost from "@/components/home-page/FeaturedPost/FeaturedPost"
import Hero from "@/components/home-page/Hero/Hero"
import { getFeaturedPost } from "@/lib/posts-util"

const HomePage = (props)=>{
    const {posts} = props;
    
    return(
        <>
            <Hero/>
            <FeaturedPost posts={posts}/>
        </>
    )
}

export async function getStaticProps(){
    const featuredPosts = getFeaturedPost();

    return {
        props:{
            posts: featuredPosts
        },
        revalidate: 100
    }
}

export default HomePage