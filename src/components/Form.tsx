import React, { useState } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import '../index.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,

};

interface User {
    firstName: string;
    lastName: string;
    dateOfBirthday: Date;
    gender: 'male' | 'female' | 'other';
    email: string;
    password: string
    checkbox: boolean

}

export default function Form() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<User>()
    const [open, setOpen] = React.useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    const onSubimit: SubmitHandler<User> = (data) => {

        console.log(data)
    }

    return (
        <>

            <form onSubmit={handleSubmit(onSubimit)}>
                <label>First name</label>
                <input type="text" {...register('firstName')} />

                <label>Last name</label>
                <input type="text" {...register('lastName')} />

                <label>Date of birthday</label>
                <input type="date" {...register('dateOfBirthday')} placeholder='YYYY-MM-DD' />

                <label>Gender</label>
                <select {...register('gender')}>
                    <option value={''}></option>
                    <option value={'male'}>Male</option>
                    <option value={'female'}>Female</option>
                    <option value={'other'}>Other</option>
                </select>

                <label>Email</label>
                <input type="email" {...register('email')} />

                <label>Password</label>
                <input type="password" {...register('password', { required: 'password is required', minLength: 6 })}
                    aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && <p style={{ color: '#fff' }} role="alert">{errors.password?.message}</p>}

                <input type='checkbox' />

               
                {
                    !errors.password ?
                        <button type='submit' onClick={handleOpen}>Submit</button> :
                        <button type='submit' hidden  >Submit</button>

                }




            </form>

            <div>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                HELLO NEW USER
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                THANK YOU FOR YOUR REGISTRATION
                            </Typography>
                            <Button onClick={handleClose} sx={{ mt: 2 }}>Close</Button>
                        </Box>

                    </Fade>
                </Modal>
            </div>
        </>
    )
}




