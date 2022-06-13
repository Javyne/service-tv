import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export const Navegacion = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Service TV</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="app/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="equipos"><i className="bi bi-tv"></i> Equipos</Nav.Link>
                        <Nav.Link as={Link} to="reparaciones"><i className="bi bi-tools"></i> Reparaciones</Nav.Link>
                        <NavDropdown title='Informes' id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="info/cobros"><i className="bi bi-cash-coin"></i> Cobros</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="info/historial"><i className="bi bi-clock-history"></i> Historial Equipo</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Configuraciones" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="config/usuarios"><i className="bi bi-people"></i> Usuarios</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="config/tecnicos"><i className="bi bi-person-circle"></i> Tecnicos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="config/marcas"><i className="bi bi-app-indicator"></i> Marcas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="config/tipo_equipos"><i className="bi bi-braces"></i> Tipo Equipos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav >
                        <Nav.Link as={Link} to="config/usuarios">Usuario: Usuario</Nav.Link>
                        <Nav.Link as={Link} to="../auth/login"><i class="bi bi-box-arrow-right"></i> Salir</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


        </>
    )
}
