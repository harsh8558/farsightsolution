import React, { useState, useRef, useEffect } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import '../../assets/scss/components/_navbar.scss'

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [hoveredDropdown, setHoveredDropdown] = useState(null)
  const timeoutRef = useRef(null)

  const closeNavbar = () => {
    setExpanded(false)
  }

  const handleDropdownMouseEnter = (dropdownId) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setHoveredDropdown(dropdownId)
  }

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <Navbar expand="lg" expanded={expanded} className="main-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Farsight Solutions Logo"
            className="d-inline-block align-top navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={closeNavbar}>
              Home
            </Nav.Link>
            
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownMouseEnter('about')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <NavDropdown 
                title="About Us" 
                id="about-dropdown" 
                className="nav-dropdown"
                show={hoveredDropdown === 'about'}
              >
                <NavDropdown.Item as={Link} to="/about-farsight" onClick={closeNavbar}>
                  About Farsight Solutions
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/career" onClick={closeNavbar}>
                  Career
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownMouseEnter('it-solutions')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <NavDropdown 
                title="IT Solutions" 
                id="it-solutions-dropdown" 
                className="nav-dropdown"
                show={hoveredDropdown === 'it-solutions'}
              >
                <NavDropdown.Item as={Link} to="/software-development" onClick={closeNavbar}>
                  Software Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/app-development" onClick={closeNavbar}>
                  App Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/marketing-branding" onClick={closeNavbar}>
                  Marketing & Branding
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/website-development" onClick={closeNavbar}>
                  Website Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/web-hosting" onClick={closeNavbar}>
                  Web Hosting
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownMouseEnter('bpo-services')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <NavDropdown 
                title="BPO Services" 
                id="bpo-services-dropdown" 
                className="nav-dropdown"
                show={hoveredDropdown === 'bpo-services'}
              >
                <NavDropdown.Item as={Link} to="/customer-support" onClick={closeNavbar}>
                  Customer Support Service
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/back-office" onClick={closeNavbar}>
                  Back Office Service
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/content-management" onClick={closeNavbar}>
                  Content Management Services
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/it-helpdesk" onClick={closeNavbar}>
                  IT Help Desk
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/backend-outsourcing" onClick={closeNavbar}>
                  Backend Outsourcing Services
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownMouseEnter('hr-outsource')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <NavDropdown 
                title="HR Outsource" 
                id="hr-outsource-dropdown" 
                className="nav-dropdown"
                show={hoveredDropdown === 'hr-outsource'}
              >
                <NavDropdown.Item as={Link} to="/rpo" onClick={closeNavbar}>
                  Recruitment Process Outsourcing (RPO)
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/training-development" onClick={closeNavbar}>
                  Training & Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/talent-development" onClick={closeNavbar}>
                  Talent Development
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <Nav.Link as={Link} to="/products" onClick={closeNavbar}>
              Products
            </Nav.Link>
            
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownMouseEnter('explore-more')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <NavDropdown 
                title="Explore More" 
                id="explore-more-dropdown" 
                className="nav-dropdown"
                show={hoveredDropdown === 'explore-more'}
              >
                <NavDropdown.Item as={Link} to="/legal-compliance" onClick={closeNavbar}>
                  Legal & Compliance (LPO)
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/financial-services" onClick={closeNavbar}>
                  Financial Services (FPO)
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/business-consultancy" onClick={closeNavbar}>
                  Business Consultancy
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/angel-investors" onClick={closeNavbar}>
                  Angel Investors
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <Nav.Link as={Link} to="/blogs" onClick={closeNavbar}>
              Blogs
            </Nav.Link>
            <Nav.Link 
  as={Link} 
  to="/contact-us" 
  onClick={closeNavbar} 
  className="custom-btn btn-12"
>
  <span>Contact Us</span>
  <span>Contact Us</span>
</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar