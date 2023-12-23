import fs from 'fs'
import matter from 'gray-matter';
import path from 'path';

const postDirectory = path.join(process.cwd(), 'posts');

export function getPostFiles(){
    return fs.readdirSync(postDirectory);
}

export function getPostData(fileName){
    const postSlug= fileName.replace(/\.md$/,'');
    const filePath = path.join(postDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content}= matter(fileContent);    
    
    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData;
}

export function getAllPosts(){
    const postFiles = getPostFiles()
    const allPosts = postFiles.map((postFile)=>getPostData(postFile))
    const sortedPost = allPosts.sort((postA, postB)=>postA.date > postB.date ? -1:1)
    return sortedPost;
}

export function getFeaturedPost(){
    const allPosts = getAllPosts()
    const featuredPosts = allPosts.filter(post=>post.isFeatured);
    return featuredPosts;
}