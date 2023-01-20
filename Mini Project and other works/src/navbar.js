import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom';

function NavBar()
{
    return(
        <>
            <div className="navbar col-sm" >
                
                <NavLink className='indexLink' to="/"><i class="bi bi-person-circle"></i>About Me</NavLink><br/><br/>
                <NavLink className='indexLink' to="/Education"><i class="bi bi-book"></i>Education</NavLink><br/><br/>
                <NavLink className='indexLink' to="/Pro"><i class="bi bi-person-workspace"></i>Professional</NavLink><br/><br/>
                <NavLink className='indexLink' to="/Project"><i class="bi bi-journals"></i>Projects</NavLink><br/><br/>
                <NavLink className='indexLink' to="/Contact" ><i class="bi bi-telephone"></i>Contact</NavLink><br/><br/>
                    
                
                
            
            </div>
        </>

    )
}

function CustomLink({to, children, ...props})
{
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return(
    <li className={isActive? "active" : ""}>
      <Link to ={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default NavBar;
