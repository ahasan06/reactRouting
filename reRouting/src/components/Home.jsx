/* eslint-disable react/jsx-no-undef */
import { useState,useEffect } from "react";
import { Link ,useParams} from "react-router-dom";
const Home = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(posts=>setData(posts))
    },[])


    return (
        <div>
            <h1>This is Home Page</h1>
            <ul>
                {data.map(post=>(
                  <Link  key={post.id} to={`/${post.id}`}>
                   <li>{post.title}</li>
                  </Link>
                ))}
            </ul>
        </div>
    );
};

export default Home;