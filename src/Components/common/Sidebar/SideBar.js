import { Link } from 'react-router-dom'
import './SideBar.css'

const SideBar = ({ isOpen, toggleSidebar }) => {
//fix the sidebar functionality

    return (
        <div className={`sideBar-container ${isOpen ? 'open' : ''}`}>
            <div className='sideBar-element'>
                {/* Insert an icon here*/}
                <Link to="/products" onClick={toggleSidebar}>Products</Link>
            </div>
            <div className='sideBar-element'>
                {/* Insert an icon here*/}
                <Link to="/about" onClick={toggleSidebar}>About</Link>
            </div>
            <div className='sideBar-element'>
                {/* Insert an icon here*/}
                <Link to="/blogs" onClick={toggleSidebar}>Blogs</Link>
            </div>
            <div className='sideBar-element'>
                {/* Insert an icon here*/}
                <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
            </div>

            {/* the Dashboard elemt is rendered conditionally */}
            <div className='sideBar-element'>
                {/* Insert an icon here*/}
                <Link to="/admin-dashboard" onClick={toggleSidebar}>Dashboard</Link>
            </div>
        </div>
    )
}

export default SideBar