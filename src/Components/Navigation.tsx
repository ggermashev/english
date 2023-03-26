import {Container, Nav, Navbar} from "react-bootstrap";
import "./css/Navigation.css"

export function Navigation() {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">EasyEnglish</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Learn</Nav.Link>
                    <Nav.Link href="/words">Words</Nav.Link>
                    <Nav.Link href="/progress">Progress</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}