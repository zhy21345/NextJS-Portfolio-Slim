import Link from "next/link";
import React from "react";

const NavBar = () => {
    return(
        <div>
            <div className="h-18 bg-gray-800 flex flex-wrap items-center justify-between mx-auto p-6">
                <Link href={"/"} className="text-5xl text-white font-semibold">
                    Home
                </Link>

                <div className="text-xl">
                    Menu
                </div>
            </div>
        </div>
    )
}

export default NavBar;