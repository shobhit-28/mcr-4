import { useNavigate } from 'react-router-dom'
import './header.css'

export const HeaderComponent = () => {
    const navigate = useNavigate()

    return (
        <div className="header-component">
            <p className="title" onClick={() => navigate('/')}>MyForum</p>
        </div>
    )
}