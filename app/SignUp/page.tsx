// app/page.tsx
"use client"
import { Button } from '@nextui-org/button';
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { BsPersonPlus } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from '@nextui-org/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const URL = "http://localhost:3000/"

export default function Page() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')

  const [dup, setdup] = useState(false)

  const router = useRouter()
  /**
   * 
   * @param username 
   * @returns json
   */
  const checkDuplicates = async (username: string) => {
    try {
      const account = await fetch(`${URL}/api/accounts?` + new URLSearchParams(
        {
          username
        }), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())

      return account
    } catch (error) {
      console.log(error)
    }

  }
  /**
   * 
   * @param e 
   */
  const submitButton = async (e: any) => {
    e.preventDefault();

    setdup(false)
    try {
      await checkDuplicates(username)
      setdup(true)


    } catch (error) {

      console.log(error)

      const res = await fetch('/api/accounts', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          username,
          password,
          name,
          last,
          email
        })
      })

      if (!res.ok) {
        throw new Error("Failed to update")
      }

      router.push('/')
      console.log("submitted")
    }

  }

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Link href='/'><MdKeyboardArrowLeft size={30} className='text-slate-300' /></Link>
        <Image
          alt="logo"
          height={70}
          radius="sm"
          src="./favicon.ico"
          width={70}
        />
        <div className="flex flex-col">
          <p className="text-md">This is something new and trying out new things</p>
          <p className="text-small text-default-500">Fuck You</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <form onSubmit={submitButton} className='flex flex-col'>
          <Input isRequired isClearable label="Username"
            value={username}
            variant="bordered"
            isInvalid={dup}
            onChange={(e) => { setUsername(e.target.value) }}
            onClear={() => setUsername("")}
          />


          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 py-4">
            <Input isRequired isClearable label="Name"
              value={name}
              variant="bordered"

              onChange={(e) => { setName(e.target.value) }}
              onClear={() => setName("")}
            />
            <Input isRequired isClearable label="Last Name"
              value={last}
              variant="bordered"

              onChange={(e) => { setLast(e.target.value) }}
              onClear={() => setLast("")}
            />
          </div>

          <Input isRequired isClearable label="Password"
            value={password}
            variant="bordered"

            onChange={(e) => { setPassword(e.target.value) }}
            onClear={() => setPassword("")}
          />
          <Input isRequired isClearable className='py-4' type="email" label="Email" placeholder="Enter your email"
            value={email}
            variant="bordered"

            onChange={(e) => { setEmail(e.target.value) }}
            onClear={() => setEmail("")}
          />
          <Button type='submit' variant='solid' color='primary'> <BsPersonPlus /> Sign Up </Button>
        </form>
      </CardBody>
      <Divider />
    </Card>
  )
}