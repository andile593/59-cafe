import { Link } from 'react-router-dom'
import './SideBar.css'

const SideBar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sideBar-container ${isOpen ? 'open' : ''}`}>
            <div className='sideBar-element'>
                <Link to="/products" onClick={toggleSidebar}>Products</Link>
            </div>
            <div className='sideBar-element'>
                <Link to="/about" onClick={toggleSidebar}>About</Link>
            </div>
            <div className='sideBar-element'>
                <Link to="/blogs" onClick={toggleSidebar}>Blogs</Link>
            </div>
            <div className='sideBar-element'>
                <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
            </div>

            
        </div>
    )
}

export default SideBar