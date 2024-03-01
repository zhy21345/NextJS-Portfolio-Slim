import React from "react";
import Image from "next/image.js"

const Hero = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7">
                <section>
                    <h1 className="text-3xl flex items-center justify-center font-bold mb-4 text-gray-800">
                        Welcome to My Portfolio
                    </h1>
                    <p className='flex items-center justify-center text-gray-700'>
                        this is the body paragraph will be discussed soon about my works.
                    </p>
                </section>
            </div>
            <div>
                <Image
                src="/images/avatar.png"
                alt="terrain project"
                width={435.82}
                height={435.82}
                />
            </div>
        </div>
    )
}

export default Hero;