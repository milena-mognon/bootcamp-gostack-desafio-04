import React from 'react';

function Comment({ data }) {

  return (
    <>
      <div className='comment'>
        <img
          src={data.author.avatar}
          alt="Imagem do usuário"
          className="avatar"
        />
        <div className="comment-block">

          <div className='comment-content'>
            <p className='comment-author'>{data.author.name}</p>
            {data.content}
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;