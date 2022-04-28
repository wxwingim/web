import React, { useState } from 'react';
import { Container } from 'react-bootstrap';


const InputNum = (props: React.HTMLProps<HTMLInputElement>) => {
    const [value, setValue] = useState<number>();

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(parseInt(e.target.value, 10))
    }

    return(
        <input
            type='number'
            value={value}
            onChange={onChange}
            {...props}
        />

    );
}


export default InputNum;