import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Comment from '../comment/Comment';

const Detail = () => {
    const { userId } = useParams()

    const [id, setId] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${userId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setId(data))
    }, [])

    //console.log(id)


    const [comments, setComments] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    //console.log(comments)

    const style = {
        backgroundColor: 'silver',
        padding: '10px',
        margin: '10px',
        textAlign: 'center'
    }


    return (
        <div>
            <div style={style}>
                <h2>Details of UserId: {id.userId}</h2>
                <h4>id: {id.id}</h4>
                <h4>Title: {id.title}</h4>
                <p>Body: {id.body}</p>


            </div>

            <div>
                {
                    comments.map(comment => <Comment comment={comment} key={comment.id}></Comment>)
                }
            </div>
        </div>
    );
};

export default Detail;