// app/page.tsx
"use client"
import { Button } from '@nextui-org/button';
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { BsPersonPlus } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from '@nextui-org/react';
import { useState } from 'react';


export default function Page() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  

  
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
        <form action="" className='flex flex-col'>
          <Input isRequired isClearable label="Username" />
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 py-4">
            <Input isRequired isClearable label="Name" />
            <Input isRequired isClearable label="Last Name" />
          </div>
          <Input isRequired isClearable label="Password" />
          <Input isRequired isClearable onClear={() => console.log("input cleared")} className='py-4' type="email" label="Email" placeholder="Enter your email" />
          <Button type='submit' variant='shadow' color='primary'> <BsPersonPlus /> Sign Up </Button>
        </form>
      </CardBody>
      <Divider />
    </Card>
  )
}