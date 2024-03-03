// Forum.jsx
import React from 'react';

const Forum = () => {
  // Sample forum data, replace with actual forum data
  const forumPosts = [
    { id: 1, title: 'Post 1', content: 'This is the content of post 1.' },
    { id: 2, title: 'Post 2', content: 'This is the content of post 2.' },
    // Add more posts as needed
  ];

  return (
    <div className="forum ml-1">
      <h2>Forum</h2>
      <div className="forum-posts">
        {forumPosts.map(post => (
          <div key={post.id} className="forum-post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
