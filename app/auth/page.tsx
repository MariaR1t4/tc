'use client'

import React from "react";
import { setCookie,  } from 'cookies-next';


interface TokenResponse{
    data: {
        token: string;
    }
};
function Page(){
    const [loading, setLoading] = React.useState<boolean>(false);
    const [form, setForm ] = React.useState<any>({email:'', password:''})
    const getData = (e: any) => {
        const {name, value} = e.target;
        setForm{{...form, [name]: value}};

    }

    const submit = async (e: any) => {
        setLoading(true);
        e.preventDefault();
        const tokenResponse: TokenResponse = await api.post("/auth/login", form);

       // localStorage.setItem("token", tokenResponse.data.token);
       setCookie('token', tokenResponse.data.token);
        setLoading(false);

    }
}