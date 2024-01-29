"use client"
import { Card, CardHeader, CardBody, Divider, Image, Link } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from '@nextui-org/button';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { fetchAccount } from "../libs/data";


export default function Page() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userValid, setuserValid] = useState(false)
    const [passValid, setpassValid] = useState(false)
    const router = useRouter()


    const getAccount = async () => {
        try {
            const res = await fetch("")
            if (!res.ok) {
                throw Error("hello")
            }

            return res.json()
        } catch {
        }
    }

    const validUser = (username: String, password: String) => {
        //if username exists in database: 
        // check if the the password is correct
        if (true) {
            if (true) {
                return true
            }
            setpassValid(true)
        }
        setuserValid(true)
        return false
    }

    const correctPass = (username: String, password: String) => {
        return false
    }
    function submitButton(e: any) {
        e.preventDefault()
        if (validUser(username, password)) {
            router.push(`./${username}`)
        } else {
            console.log("account not found")
        }
        console.log(`username: ${username} password: ${password}`)

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
                    <p className="text-md">Trying out some Authentication stuff</p>
                    <p className="text-small text-default-500">Fuck You</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <form onSubmit={submitButton} className="flex flex-col">
                    <Input isRequired isClearable className='pb-4' label="Username" placeholder=""
                        value={username}
                        variant="bordered"
                        isInvalid={userValid}
                        errorMessage={userValid && "Please enter a valid email"}
                        onChange={(e) => { setUsername(e.target.value) }}
                        onClear={() => { setUsername("") }}
                    />


                    <Input isRequired isClearable className='pb-4' type="password" label="Password"
                        value={password}
                        variant="bordered"
                        isInvalid={passValid}
                        errorMessage={passValid && "Please enter a valid email"}
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