import { useLocation } from 'react-router-dom'
import './rightSideBar.css'
import { useContext } from 'react'
import { ForumContext } from '../../context/forumContext'

export const RightSideBar = () => {
    const location = useLocation()

    const { forumData, setForumData,setOption } = useContext(ForumContext)

    const selectChangeHandler = (eventVal) => {
        setOption(eventVal)
        if (eventVal === 'latest') {
            setForumData({
                ...forumData,
                posts: (forumData?.posts?.sort((a, b) => {
                    let da = new Date(a.createdAt),
                        db = new Date(b.createdAt);
                    return db - da;
                }))
            })
        } else {
            setForumData({
                ...forumData,
                posts: (forumData?.posts?.sort((b, a) => (a.upvotes - a.downvotes) - (b.upvotes - b.downvotes) ))
            })
        }
    }

    return (
        <div className='right-bar'>
            <div className="container above-margin">
                {location?.pathname === '/' &&
                    <select name="" id="" onChange={(event) => selectChangeHandler(event.target.value)}>
                        <option value="hide" disabled selected>Sort</option>
                        <option value="latest">Latest Posts</option>
                        <option value="upvoted">Most Upvoted</option>
                    </select>}
            </div>
        </div>
    )
}