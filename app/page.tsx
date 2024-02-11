"use client"
import { Card, CardHeader, CardBody, Divider, Image, Link } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from '@nextui-org/button';
import { useState } from "react";
import { useRouter } from 'next/navigation';

const URL = "http://localhost:3000/"


export default function Page() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userValid, setuserValid] = useState(false)
    const [passValid, setpassValid] = useState(false)
    const router = useRouter()

    // save accounts that are logged in local. Website needs to know who is logged in.

    const getAccount = async (username: string) => {
        console.log(`SEARCHING FOR ${username}`)
        try {
            const findAccount = await fetch(`${URL}/api/accounts?` + new URLSearchParams(
                {
                    username
                }), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json())
            return findAccount
        } catch (error) {
            console.log(error)
        }
    }



    const submitButton = async (e: any) => {
        e.preventDefault()
        const user = await getAccount(username)
        try {
            
            setuserValid(false)
            if (user.account.password != password) {
                setpassValid(true)
            } else {
                setpassValid(false)
                router.push( `./${user.account._id}`)
            }

            //error 404 user does not exist in the database
        } catch (error) {
            setuserValid(true)
            console.log("username not found")
        }



    }

    return (
        <Card>
            <CardHeader className="flex gap-3 w-96">
                <Image
                    alt="logo"
                    height={70}
                    radius="sm"
                    src="/favicon.ico"
                    width={70}
                />
                <div className="flex flex-col">
                    <p className="text-md">Login</p>
                    <p className="text-small text-default-500"> Welcome </p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <form onSubmit={submitButton} className="flex flex-col">
                    <Input isRequired isClearable className='pb-4' label="Username" placeholder=""
                        value={username}
                        variant="bordered"
                        isInvalid={userValid}
                        errorMessage={userValid && "username not found"}
                        onChange={(e) => { setUsername(e.target.value) }}
                        onClear={() => { setUsername("") }}
                    />


                    <Input isRequired isClearable className='pb-4' type="password" label="Password"
                        value={password}
                        variant="bordered"
                        isInvalid={passValid}
                        errorMessage={passValid && "Invalid Password"}
                        onChange={(e) => { setPassword(e.target.value) }}
                        onClear={() => { setPassword("") }}
                    />


                    <Button type='submit' variant='solid' color='primary'> Sign In </Button>
                    <div className="flex items-center justify-center p-4"> <Link href="./SignUp"> NO ACCOUNT? NO PROBLEM </Link> </div>
                </form>
            </CardBody>
            <Divider />
        </Card>
    )
}