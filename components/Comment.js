export default ({comment}) => (
    <div className="comment">
        <div className="comment-user">
            {comment.user}
        </div>
        <div className="comment-content" dangerouslySetInnerHTML={{__html: comment.content}}></div>
        {
            comment.comments && <div className="nested-comments">
                {
                    comment.comments.map(nestedComment => (
                        <Comment key={nestedComment.id} comment={nestedComment}/>
                    ))
                }
            </div>
        }
        <style jsx>
            {
                `
                  .comment {
                        margin-bottom: 1.5em;
                  }
                  .comment-user {
                        font-size: 0.9rem;
                        font-weight: bold;
                        margin-bottom: 0.5em;
                  }
                  .comment-content {
                        font-size: 0.9rem;      
                  }
                  .comment-content p {
                  
                  }
                `
            }
        </style>
    </div>
);