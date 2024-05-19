import { Box, Button, Divider,  Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-mui';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo512.png'

const SignIn = () => {
    const navigate = useNavigate()
    const inputStyle = {
        '& .MuiInputBase-root': { backgroundColor: '#fff' },
        '& label[data-shrink=true] ~ .MuiInputBase-root': { backgroundColor: 'transparent' },
        '& .MuiInputBase-root input': { color: '#fff' },
        '& fieldset': { borderColor: '#ffffffa6' },
        '& :hover fieldset': { borderColor: '#ffffffa6' },
        '& label[data-shrink=true]': { color: '#fff' }
    }
    const cardStyle = {
        boxSizing: 'border-box',
        backdropFilter: 'blur(40px)',
        border: '1px solid #ffffff2b',
        position: 'relative',
        p: 3,
        minWidth: 300,
        zIndex: 1,
        borderRadius: 2,
        '&::after , &::before': {
            position: 'absolute',
            width: 100,
            height: 100,
            content: '""',
            backgroundColor: '#2065d1',
            borderRadius: '50%',
            filter: 'blur(100px)',
            zIndex: -1,
        },
        '&::after': {
            left: 0,
            top: 0,
        },
        '&::before': {
            right: 0,
            bottom: 0,
        }
    }

    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: '#000814',
            backgroundImage: `url(${Logo})`,
            backgroundSize: '500px',
            backgroundPosition: 'center',
            backgroundBlendMode: 'soft-light',
            display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', backgroundRepeat: 'no-repeat',
        }}>
            <Box sx={cardStyle}>
                <Box>
                    <Typography variant='h4' sx={{ fontSize: 30, fontFamily: 'inherit', color: '#fff' }}>Sign In</Typography>
                    <Typography variant='h4' sx={{ fontSize: 15, fontFamily: 'inherit', color: '#fff', mt: 1 }}>Keep it all together and you'll be fine</Typography>
                </Box>
                <Box sx={{ boxSizing: 'border-box', mt: 3, height: '100%', ...inputStyle }}>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            // setTimeout(() => {
                            //     setSubmitting(false);
                            //     alert(JSON.stringify(values, null, 2));
                            // }, 500);
                            navigate('/')
                        }}
                    >
                        {({ submitForm }) => (
                            <Form>
                                <Field
                                    component={TextField}
                                    name="email"
                                    type="email"
                                    label="Email"
                                    fullWidth
                                    size={'small'}
                                    sx={{ mb: 2, color: '#fff' }}
                                />
                                <Field
                                    component={TextField}
                                    type="password"
                                    label="Password"
                                    name="password"
                                    fullWidth
                                    size={'small'}
                                    sx={{ mb: 2, color: '#fff' }}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={submitForm}
                                    fullWidth
                                >
                                    Sign In
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <Divider sx={{ '&::before ,&::after': { borderColor: '#fff' }, mt: 2 }}><Typography sx={{ color: '#fff' }}>Or</Typography></Divider>
                    <Typography sx={{ color: '#fff', fontSize: 14, mt: 1.5 }}>New to CodeWebz Join now</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default SignIn