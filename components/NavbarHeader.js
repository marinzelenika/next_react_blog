import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar  from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const NavbarHeader = () => {
    return ( 
        <div>
            <Navbar expand="lg" variant="dark" bg="dark" collapseOnSelect>
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
               <Link href="/"><a><Navbar.Brand className="ml-2">Home</Navbar.Brand></a></Link>
                <Link href="/about"><a><Navbar.Brand className="ml-2">About</Navbar.Brand></a></Link> 
                <Link href="/contact"><a><Navbar.Brand className="ml-2">Contact</Navbar.Brand></a></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
                
            
        </div>
     );
}
 
export default NavbarHeader;