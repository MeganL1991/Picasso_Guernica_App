import { Children } from "react"
import "./Styles.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    
    return <nav className="nav">
       <Link to="/" className="site-title">
        Pablo Picasso, Guernica, 1937
        </Link>
       <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/quiz">Quiz</CustomLink>
       </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
    <li className={isActive ? "active" : ""}> 
      <Link to={to} {...props}>
        {children}
        </Link>
    </li>
    )
}