/* eslint-disable react/no-unescaped-entities */ 
'use client';

import Image from "next/image"
import print from "../images/Apparel-Hoodie-Mockup-On-Hanger-1-1.png";

export default function Hero () {
    return (
        <>
            <div className="flex py-[60px] px-[100px] bg-customSlightblue">
                <div className="flex flex-col w-1/2">
                    <div className="text-6xl bricolage text-white">Elevate Your Brand With Our Digital Print Services</div>
                    <div className="mt-5 text-white">Order everything you need for business, gifts, events and exhibitions online and have them delivered
                        in 3-5 business days! Send your print-ready artwork or hire our experts to do the job. We provide digital
                        marketing tools, design and print qaulity business cards, flyers, posters, calendars, bronchures, books,
                        rollup banners, custom t-shirts, mugs, awards, promotional materials, wedding sourvenirs, packaging labels,
                        vinyl stickers, paper bags, personalized photo frames and wallpapers.
                    </div>
                    <button className="bg-customGreen mt-5 w-[300px] text-white px-4 py-3 rounded-md">Get Started</button>
                </div>
                <div className="w-1/2 ">
                    <Image className="ml-72" src={print} alt="" />
                </div>

            </div>
        </>
    )
}