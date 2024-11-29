import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Navbar() {
  let [user, setUser] = useState({
    fullname: "cetpa",
    password: "123",
    role: "student",
  });
  user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-around  h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job
            <span className="text-red-500">Portal</span>
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex items-center font-medium gap-4">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li>
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/job">Jobs</Link>
                </li>
                <li>
                  <Link to="/browser">Browse</Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/signup">
                <Button varient="outline">SignUp</Button>
              </Link>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </div>
          ) : (
            <>
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar>
                    <AvatarImage src="https://images.pexels.com/photos/3276302/pexels-photo-3276302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent>
                  Place content for the popover here.
                </PopoverContent>
              </Popover>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
