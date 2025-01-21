import React, { useState } from 'react';
import { Box, Button, Stack, TextField as MuiTextField } from '@mui/material';
import { Field, Formik, Form } from 'formik';
import { TextField } from 'formik-mui';

const MultiText = ({ item, setMultiInput, disabled }) => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    };

    const handleSave = () => {
        setMultiInput((prev) => {
            return prev.map((exist) => {
                if (exist.id == item.id) {
                    return inputs;
                }
                return exist;
            });
        });
    };

    return (
        <Box>
            <MuiTextField
                name="name"
                value={inputs.name}
                onChange={handleInputChange}
                placeholder="Name"
            />
            <MuiTextField
                name="email"
                value={inputs.email}
                onChange={handleInputChange}
                placeholder="Email"
            />
            <MuiTextField
                type="tel"
                name="phone"
                value={inputs.phone}
                onChange={handleInputChange}
                placeholder="Phone"
            />
            <Button>save</Button>
        </Box>
    );
}

const generateId = () => {
    const result = Math.floor(Math.random() * (new Date));
    return result
}
const ProductList = () => {
    const [multiInput, setMultiInput] = useState([])

    const handleSubmit = (values) => {
        console.log(values)
    }
    console.log(multiInput)
    const handleAddItem = () => {
        setMultiInput((prev) => {
            return [...prev, { 'id': generateId() }]
        })
    }


    return (
        <Box>
            <Box>
                <Formik
                    initialValues={{
                        name: '',
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Box>
                            <Field
                                component={TextField}
                                label='User Name'
                                fullWidth
                                size='small'
                                name='name' />
                        </Box>
                        <Button onClick={handleAddItem}>Add</Button>
                        {
                            multiInput.map((item, index) => {
                                return <MultiText key={index} item={item} setMultiInput={setMultiInput} />
                            })
                        }
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Formik>
            </Box>
        </Box>
    )
}

export default ProductList