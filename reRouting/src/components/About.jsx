import { Link ,useParams} from "react-router-dom";

import { useEffect,useState} from "react";


const About = () => {
    const[post,setPost] = useState(null);

    const {postId} = useParams();
    console.log(postId);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response=>response.json())
        .then(data=>setPost(data))
    },[])


    return (
        <div>
            <h1>This is About Details</h1>
            <Link to="/">
                Home Page
            </Link>

            <div>
                <p>The post Title is : {post?.title}</p>
                <p>The UserId of this post: {post?.userId}</p>
                <p>The body of this post: {post?.body}</p>
            </div>
        </div>
        
    );
};

export default About;