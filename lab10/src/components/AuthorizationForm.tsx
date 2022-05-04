import React from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'

const AuthorizationForm = (props: React.HTMLProps<HTMLInputElement>) => {


    return(
        <Container className='mx-auto col-md-3 m-5'>
            <Form className='mx-auto'>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalTel">
                    <Form.Label column sm={4}>Номер телефона</Form.Label>
                    <Col sm={7}>
                        <Form.Control type="tel" placeholder="Введите номер телефона" />
                    </Col>                   
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={4}>Пароль</Form.Label>
                    <Col sm={7}>
                        <Form.Control type="password" placeholder="password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-5" controlId="formHorizontalCheck">
                    <Col sm={5}>
                    <Form.Check label="Запомнить пароль" />
                    </Col>
                </Form.Group>

                <Button type="submit">Войти</Button>

            </Form>
        </Container>
    );
}

export default AuthorizationForm;

