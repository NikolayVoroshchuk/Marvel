/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from 'react-router-dom'
import './appHeader.scss';

const AppHeader = () => {
    const list = [
        { title: 'Characters', activeColor: '#9f0013', link: '/' },
        { title: 'Comics', activeColor: '#9f0013', link: '/comics' }
    ]
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    {list.map(({ title, activeColor, link }) => (
                        <li key={link}>
                            <NavLink
                                end
                                style={({ isActive }) => ({ color: isActive ? activeColor : 'inherit' })}
                                to={link}>{title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;