"use client";


import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const GoogleButton = () => {
const serchParams = useSearchParams();
const callbackUrl = serchParams.get("callbackUrl") || "/profile";


  return (
    <button onClick={() => signIn("google", {callbackUrl})}>GoogleButton</button>
  )
}

export {GoogleButton};