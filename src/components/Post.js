import React from 'react';
import Comment from '../components/Comment';
function Post({ data }) {

  return (
    <>
      <div className='post'>
        <div className="postheader">
          <img className='avatar' src={data.author.avatar} alt="" />
          <div className="author">
            <p className='author-name'>{data.author.name}</p>
            <p className='post-date'>{data.date}</p>
          </div>
        </div>
        <div className="post-content">{data.content}</div>
        <div className="divider"></div>
        <div className="comments">
          {data.comments.map(comment =>
            <Comment
              key={comment.id}
              data={comment}
            />)}
        </div>
      </div>
    </>
  );
}

export default Post;