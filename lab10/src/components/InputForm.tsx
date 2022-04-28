import React, { MouseEventHandler, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const InputForm = (props: React.HTMLProps<HTMLInputElement>) => {

    const [value, setValue] = useState<number>();
    const [result, setResult] = useState<number>()
    // let result: number = 0;


    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(parseInt(e.target.value, 10))
    }

    const getResult = () => {
        if(value !== undefined){
            // console.log('value: ' + value)
            // console.log(factorial(value))
            setResult(factorial(value))
        }
        // else console.log('undef')
        else setResult(0)
    }

    return(
        <Form className='m-5' >
            <Container fluid="sm p-5">
                <Row className='align-items-center m-3'>
                    <Col md="auto">
                        <input 
                            type='number'
                            value={value}
                            onChange={onChange}
                            {...props}
                        />
                    </Col>
                    <Col  className='h3' md="auto">! = </Col>
                    <Col  className='h3'md="auto">{result}</Col>
                </Row>
                <Row className='m-3'>
                    <Button onClick={getResult} variant="danger">Расчитать</Button>
                </Row>
            </Container>
        </Form>
        
    );
}


function factorial(num: number): number{
    if (num === 0) return 1
    else return num * factorial(num - 1)
}


export default InputForm;