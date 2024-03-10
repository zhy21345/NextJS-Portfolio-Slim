import React from "react";
import Link from "next/link";
import Image from "next/image.js"

const NavBar = () => {
    return(
        <div>
            <div className="h-18 bg-gray-800 flex flex-wrap items-center justify-between mx-auto p-6">
                <Link href={"/"} className="text-5xl text-white font-semibold">
                    Home
                </Link>

                <Link href={"https://github.com/zhy21345/NextJS-Portfolio-Slim"}>
                    <Image 
                    src="/images/icons8-github-64.svg"
                    alt="Github Link"
                    width={64}
                    height={64}
                    />
                </Link>
            </div>
        </div>
    )
}

export default NavBar;