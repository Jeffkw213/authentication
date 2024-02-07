"use client"

import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
//Display successfully logged in and display the url params folder name is [id] so the params variable name is id.

const URL = "http://localhost:3000"
const getAccount = async (id: any) => {
    const account = await fetch(`${URL}/api/accounts/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json())
    return account
}

export default async function LoggedIn({ params }:
    {
        params: {
            id: string
        }
    }) {
    const router = useRouter()

    const buttonHandler = () => {
        router.push('/')
    }
    const user = await getAccount(params.id)
    return (
        <div className="flex flex-col animate-fade">
            <div className="text-5xl
                bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 
                inline-block text-transparent bg-clip-text
                py-4
                "
            >
                Welcome {user.accounts.first} {user.accounts.last}!
            </div>
            <div className='pb-4'>
                <div className='text-xl text-cyan-500'>
                    Username: {user.accounts.username}
                </div>
                <div className='text-xl text-sky-500'>
                    Email: {user.accounts.email}
                </div>
            </div>
            <Button
                variant='ghost'
                onPress={buttonHandler}
                color='primary'
            >Sign Out</Button>
        </div>


    )
}