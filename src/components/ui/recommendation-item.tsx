"use client"
import { User } from "@/types/user"
import Link from "next/link"
import { Button } from "./button"
import { useState } from "react"
type Props = {
    user: User
}

export const RecommendationItem = ({ user }: Props) => {

    const [following, setFollowing] = useState(false);

    const handleFollowButton = () => {
        setFollowing(true)
    }



    return (
        <div className="flex items-center ">

            <div className="size-10 mr-2 rounded-full overflow-hidden">
                <Link href={`/${user.slug}`}>
                    <img
                        src={user.avatar}
                        alt={user.name}
                    />
                </Link>
            </div>

            <div className="flex-1 overflow-hidden">
                <Link
                    href={`${user.slug}`}
                    className="block truncate">
                    {user.name}
                </Link>

                <div className="truncate text-sm text-gray-400">{`@${user.slug}`}</div>
            </div>

            <div className="pl-2 w-20">
                {!following &&
                    <Button
                        label="Seguir"
                        size={3}
                        onClick={handleFollowButton}
                    />
                }
            </div>


        </div>
    )
}

export const RecommendationItemSkeleton = () =>{
    return(
        <div className="animate-pulse flex flex gap-1">
            <div className="rounded-full size-10 mr-2 bg-gray-600"></div>
            <div className="flex flex-1 flex-col gap-1">
                <div className="bg-gray-600 w-3/4 h-4"></div>
                <div className="bg-gray-600 w-2/4 h-4"></div>
            </div>
        </div>
    )
}