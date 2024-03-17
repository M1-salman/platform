// Courses Page
'use client'
import * as React from "react"
import Link from "next/link";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useCurrentUser } from "@/hooks/user-current-user";
import { Button } from "@/components/ui/button";
import Search from "./search";
import { Separator } from "./ui/separator";



export default function Courses() {
  // AOS Effect
  
  const session = useCurrentUser();
  const nizzyuser = session?.id === 'clrulbr1h0000x3js9ldvplex';


    return (
      <div>
          <div className="text-center pt-40">
              <h1 className="font-bold text-7xl">Courses</h1>
              <p className="text-md text-slate-100/40">Checkout our free & paid courses below!</p> 
              <div className="flex items-center justify-center">
                <Separator className="mt-8 bg-slate-100/20 h-0.5 w-40" />
              </div>
          </div>
          {nizzyuser && 
          <div className="flex items-center justify-center space-x-7 mt-6">
            <Link href='/courses/add'>
              <Button variant="default" className='font-medium py-2 mt-3'>Create</Button>
            </Link>
            <Link href='/admin'>
              <Button variant="default" className='font-medium py-2 mt-3'>Admin</Button>
            </Link>
          </div>
          }
          {/*
          <Search />
          */}
      </div>
    )
  }
  