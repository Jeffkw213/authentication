"use client"

import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
//Display successfully logged in and display the url params folder name is [id] so the params variable name is id.
// @params id: username 
export default function LoggedIn({ params }:
    {
        params: {
            id: string
        }
    }) {
    const router = useRouter()
    const buttonHandler = () => {
        router.push('/')
    }
    return (
        <div className="flex flex-col animate-fade">
            <div className="text-5xl
                bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 
                inline-block text-transparent bg-clip-text
                py-4
                "
                >Welcome {params.id}!
            </div>
            <Button
                variant='ghost'
                onPress={buttonHandler}
                color='primary'
            >Sign Out</Button>
        </div>


    )
}