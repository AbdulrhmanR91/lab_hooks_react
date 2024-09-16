import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Comments.css'; 

const Comments = () => {
    const [id, setPostId] = useState('');
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    const fetchComments = async (id) => {
        setError(null);
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?id=${id}`);
            setComments(response.data);
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        
        if (!id) {
            fetchComments('');
        }
    }, [id]); 

    const handleSearch = () => {
        if (id) {
            fetchComments(id);
        }
    };

    return (
        <div className="comments-container">
            <div className="search-bar">
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setPostId(e.target.value)}
                    placeholder="Id"
                    required
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {error && <p>Error: {error.message}</p>}
            {comments.length > 0 ? (
                comments.map(comment => (
                    <div key={comment.id} className="comment-card">
                        <h3>{comment.name}</h3>
                        <p><strong>Email:</strong> {comment.email}</p>
                        <p>{comment.body}</p>
                    </div>
                ))
            ) : (
                <p>No comments found.</p>
            )}
        </div>
    );
};

export default Comments;
