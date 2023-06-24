import { useNavigate, useParams } from 'react-router-dom'
import './commentPage.css'
import { useContext } from 'react'
import { ForumContext } from '../../context/forumContext'
import { PostCard } from '../../components/postCard/postCard'
import { BiComment, BiShareAlt } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineArrowBackIos } from 'react-icons/md'

export const CommentPage = () => {
    const { postID } = useParams()

    const { forumData } = useContext(ForumContext)

    const navigate = useNavigate()

    return (
        <div className="comment-page page">
            <div className="header">
                <button className="back" onClick={() => navigate(-1)}><MdOutlineArrowBackIos /></button>
                <p className="head">Comment</p>
            </div>
            <PostCard postData={forumData?.posts?.find((post) => post?.postId === postID)} />
            <div className="comment-section">
                {forumData?.posts?.find((post) => post?.postId === postID)?.comments?.map((comment) => (
                    <div className="comment" key={comment?.commentId}>
                        <div className="flex-div">
                            <div className="profile-pic-container">
                                <img src={comment?.picUrl} alt="" />
                            </div>
                            <div>
                                <div className="name-username-date">
                                    <p className="name"><span className="color">{comment?.name}</span></p>
                                    <p className="username">{comment?.username}</p>
                                    <p className="date">{new Date(comment?.createdAt).toDateString()}</p>
                                </div>
                                <p className="posted-by">Replying to <span className="color">{forumData?.posts?.find((post) => post?.postId === postID)?.name}</span></p>
                            </div>
                        </div>
                        <p className="comment-txt">{comment?.comment}</p>
                        <div className="btn-container">
                            <button className="like"><AiOutlineHeart /></button>
                            <button className="comment"><BiComment /></button>
                            <button className="share"><BiShareAlt /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}