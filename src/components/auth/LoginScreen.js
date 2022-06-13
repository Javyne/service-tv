import React from 'react'
import '../../styles/login.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export const LoginScreen = () => {
  return (
    <div className="contenedor">
      <Card style={{ width: '20rem' }} className="login">
        <Card.Body>
          <Form>
            <h3 className='text-center'>SERVICIO TECNICO</h3>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Control type="text" placeholder="Usuario" name="Usuario" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Contraseña" name="Password"/>
            </Form.Group>
            <Form.Group className="text-center" controlId="button">
              <Button variant="link" type="submit" as={Link} to="../../app/home">
                Ingresar
              </Button>
            </Form.Group>

          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}
