/* eslint-disable react/no-unescaped-entities */ 
'use client';

import Image from "next/image"
import printlogo from "../images/printing-company-logo-design-template-vector.jpg";
import { ShoppingCart } from 'lucide-react';

export default function Navbar () {
    return (
        <>
            <nav className="w-full h-[50px] justify-between flex items-center px-24">
                <div>
                    <Image src={printlogo} className="w-[120px] h-[50px]" alt="printlogo" />
                </div>
                <ul className="flex gap-4 text-white">
                    <li>Brand</li>
                    <li>Print</li>
                    <li>Package</li>
                    <li>Solutions</li>
                    <li>Help Desk</li>
                </ul>
                <div className="flex gap-4 items-center">
                    <ShoppingCart />
                    <button className="px-3 py-2 bg-customDarkblue text-white">Request a Quote</button> 
                </div>
            </nav>
        </>
    )
}