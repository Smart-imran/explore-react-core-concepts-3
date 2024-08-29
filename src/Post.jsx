import './Post.css'
 
 export default function Post({post}){

   

    const {title,body,id,userId} = post;

    return(
        <div className='post'>
            <h5>PostTitle : {title}</h5>            
            <p><small>userId :{id} </small></p>
            <p><small>postId : {userId}</small></p>
            <p>{body}</p>
        </div>
    )
 }  