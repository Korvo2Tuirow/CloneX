"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SigninForm = () => {
    const router = useRouter();
    const [emailField, setEmailField] = useState("");
    const [passwordField, setPasswordField] = useState("");

    const handleEnterButton = () =>{
        router.replace("/home")
    }

    return (
        <>
            <Input
                placeholder="Digite seu email"
                value={emailField}
                onChange={t => setEmailField(t)}
               />

            <Input
                placeholder="Digite sua senha"
                password
                value={passwordField}
                onChange={t => setPasswordField(t)} />

                <Button 
                    label="Entar"
                    onClick={handleEnterButton}
                    size={1}/>
        </>
    );
}

//instalação dos icones: npm i @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons


