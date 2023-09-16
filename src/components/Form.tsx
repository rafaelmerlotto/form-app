import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import NestedModal from './Modal';


declare global {
    namespace JSX {
        interface IntrinsicElements {
            modal: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

interface User {
    firstName: string;
    lastName: string;
    dateOfBirthday: Date;
    gender: 'male' | 'female' | 'other';
    email: string;
    password: string

}

export default function Form() {
    const { register, handleSubmit } = useForm<User>()
    const onSubimit: SubmitHandler<User> = (data) => {
        console.log(data)
        alert('THANK YOU FOR YOUR REGISTRATION')
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubimit)}>
                <label>First name</label>
                <input type="text" {...register('firstName')} />

                <label>Last name</label>
                <input type="text" {...register('lastName')} />

                <label>Date of birthday</label>
                <input type="date" {...register('dateOfBirthday')} />

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
                <input type="password" {...register('password')} />

                <button type='submit' >Submit</button>

            </form>

        </>
    )
}


