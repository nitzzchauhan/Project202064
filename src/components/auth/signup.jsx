import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [loading, setLoading] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("i am submit");
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1>Sign Up</h1>
          <div className="my-2">
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" placeholder="Enter a name" name="fullname" />
          </div>
          <div className="my-2">
            <Label htmlFor="email">Email</Label>

            <Input type="email" placeholder="Enter a email" name="email" required/>
          </div>
          <div className="my-2">
            <Label htmlFor="PhoneNumber">Phone Number</Label>
            <Input
              type="number"
              placeholder="Enter a Phone Number"
              name="PhoneNumber"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="email">Password</Label>
            <Input
              type="password"
              placeholder="Enter a Password"
              name="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role"/>
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {
            loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait</Button>:<Button
            className="w-full my-4">Submit</Button>
          }
          <span className="text-sm">Already have an Account? <Link className="text-blue-600" to="/login">Login</Link></span>
        </form>
      </div>
    </div>
  );
}
