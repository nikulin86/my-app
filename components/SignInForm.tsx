"use client";


import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { FormEventHandler } from 'react'



const SignInForm = () => {

    const router = useRouter();

    const handelSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();


        const forData = new FormData(event.currentTarget);

        const res = await signIn("credentials", {
            email: forData.get('email'),
            password: forData.get('password'),
            redirect: false
        });

        if (res && !res.error) {
            router.push('/profile');
        } else {
            console.log(res)
        }
    }

    return (
        <div className='form-wrapper'>
            <form className='form' onSubmit={handelSubmit}>
                <input className='email' type="email" name="email" required />
                <input type="password" name="password" required />
            </form>
        </div>
    )
}

export default SignInForm;



