"use client"

import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardEvent, useState } from "react";

type Props = {
    placeholder: string;
    value?: string;
    onChange?: (newValue: string) => void;
    filled?: boolean;
    icon?: IconDefinition;
    password?: boolean;
    onEnter?: () => void;
}

export const Input = ({ placeholder, value, password, icon, filled, onChange, onEnter }: Props) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) =>{
        if(event.code.toLowerCase() === 'enter' && onEnter){
            onEnter();
        }
    }

    return (
        <div className={`flex items-center h-14 rounded-3xl border-2 border-gray-700 has-[:focus]:border-white ${filled && "bg-gray-700"}`}>

            {icon &&
                <FontAwesomeIcon
                    icon={icon}
                    className="ml-4 size-6 text-gray-500"
                />}

            <input
                type={password && !showPassword ? "password" : "text"}
                className="flex-1 outline-none bg-transparent h-full px-4"
                placeholder={placeholder}
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
                onKeyUp={handleKeyUp}

            />

            {password &&
                <FontAwesomeIcon
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? faEye : faEyeSlash}
                    className="cursor-pointer mr-4 size-6 text-gray-500"
                />}

        </div>
    );
}

