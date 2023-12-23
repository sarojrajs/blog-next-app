import PostContent from "@/components/posts/PostDetail/components/PostContent";
import { getPostData, getPostFiles } from "@/lib/posts-util";

const PostDetailPage = (props)=>{

    return(
        <PostContent post = {props.post}/>
    )
}

// export async function getServerSideProps(context){
//     console.log(context.params)
//     // const postData = getPostData()
// }

export function getStaticProps(context){
    const {params} = context;
    const {slug} = params

    const postData = getPostData(slug);

    return{
        props:{
            post:postData
        },
        revalidate:60
    }
}

export function getStaticPaths(){
    const postFileNames = getPostFiles();
    const slugs = postFileNames.map((file)=>file.replace(/\.md$/,''));
    return{
        paths:slugs.map(slug=>({params:{
            slug:slug
        }})),
        // fallback:true
        // fallback:'blocking'
        fallback:false
    }
}

export default PostDetailPage;