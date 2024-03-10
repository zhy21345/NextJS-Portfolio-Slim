import React from "react";
import Image from "next/image.js"

const Hero = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-8">
                <section>
                    <h1 className="text-3xl flex items-center justify-center font-bold mb-4 text-gray-800">
                        Welcome to My Portfolio
                    </h1>
                    <p className='flex items-center justify-center text-gray-700'>
                            Hi! My name is Haoyuan Zhang, I graduated from University of California, Irvine. I completed a major of computer science with a specialization in computer vision, I also completed a minor in statistics. Here are some selected presentations of my previous projects.
                    </p>
                </section>
            </div>
            <div className="items-center m-auto">
                <Image
                src="/images/avatar.png"
                alt="terrain project"
                width={128}
                height={128}
                />
            </div>
        </div>
    )
}

export default Hero;