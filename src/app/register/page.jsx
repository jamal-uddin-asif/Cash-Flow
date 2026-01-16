'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUplodePhoto } from "@/Hooks/useUplodePhoto";

const Register = () => {

    const HandleSubmit = (e) =>{
       e.preventDefault()
       const name = e.target.name.value;
       const photo = e.target.photo.files[0];
       const email = e.target.email.value;
       const password = e.target.password.value;

        console.log({name, photo, email, password})

        useUplodePhoto(photo)
    }

  return (
    <div className=" min-h-screen flex justify-center items-center">
      <Card  className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create a CashFlow account</CardTitle>
          <CardDescription>
            Enter your email below to register
          </CardDescription>
          <CardAction>
            <Button variant="link">LogIn</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={HandleSubmit} id="register-form">
            <div className="flex flex-col gap-6">

              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name='name'
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="photo">Photo</Label>
                <Input
                  id="photo"
                  type="file"
                  name='photo'
                  placeholder="Photo"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/* <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a> */}
                </div>
                <Input id="password" type="password" name='password' placeholder='Password' required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button form='register-form'  type="submit" className="w-full">
            Register
          </Button>
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
