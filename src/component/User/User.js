import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Post from '../Post/Post';

const User = () => {
    const [users,setUsers] = useState([])
    useEffect(() =>{
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    //console.log(users)
  
    return (
        <div>
            <h2>Total posts: {users.length}</h2>
            {
                users.map(user => <Post user ={user} key={user.id}></Post>)
            }
        </div>
    );
};

export default User;