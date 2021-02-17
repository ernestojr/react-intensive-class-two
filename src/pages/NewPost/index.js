import React, { useState, useEffect } from 'react';

import { createPost } from '../../api/post';

export default function NewPost() {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [status, setStatus] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    console.log('NewPost: componentDidMount');
    return () => {
      console.log('NewPost: componentWillUnmount');
    };
  }, []);
  
  useEffect(() => {
    console.log('NewPost: componentDidUpdate');
    return () => {
      setStatus('');
      setErrorMsg('');
    };
  }, [status, errorMsg]);

	const onSubmitCreatePost = (event) => {
    event.preventDefault();
    const data = {
      title,
      body,
      userId: 1,
    }
    setStatus('Sending data...');
    createPost(data)
      .then(() => {
      setStatus('Success Request!');
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setStatus('Fail Request!');
      });
	};

	return (
		<div>
			<h2>New Post</h2>
			<form onSubmit={onSubmitCreatePost}>
				<input type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
				<input type='textarea' placeholder='body' value={body} onChange={(e) => setBody(e.target.value)} required />
        <button type="submit">Send</button>
			</form>
      <p>{status ? `Status: ${status}`: ''}</p>
      <p>{errorMsg ? `Error: ${errorMsg}`: ''}</p>
		</div>
	);
}
