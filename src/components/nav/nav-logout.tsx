"use client"

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const NavLogout = () => {

    const router = useRouter()
    const handleClick = () => {
        router.replace("/signin")
    }

    return (
        <div
            className={`flex items-center gap-6 py-3 cursor-pointer opacity-50 hover:opacity-100`}
            onClick={handleClick}
        >
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="size-6" />
            <div className="text-lg">Sair</div>
        </div>
    );
}

export default NavLogout;