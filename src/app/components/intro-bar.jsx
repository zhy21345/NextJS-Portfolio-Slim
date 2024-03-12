import React from "react";
import Hero from "./hero.jsx"
import Image from "next/image.js"
import Link from "next/link"

const IntroBar = () => {
    return(
        <div className="flex-grow p-8">
          
          <Hero/>

          <div className="flex justify-center gap-8">
            {/* work 1 */}
            <Link href="/Terrain">
              <div className="w-[435.82px] h-[255.36px] bg-gray-300">
                <Image
                src="/images/terrain_sample.jpg"
                alt="terrain project"
                width={435.82}
                height={435.82}
                />
              </div>
            </Link>

            {/* work 2 */}
            <Link href="/Reconstruction">
              <div className="w-[435.82px] h-[255.36px] bg-gray-300 flex items-center justify-center m-auto text-gray-600">
              <Image
                  src="/images/mesh.png"
                  alt="reconstruction project"
                  width={435.82}
                  height={435.82}
                  />
              </div>
            </Link>

            {/* work 3 */}
            <div className="w-[435.82px] h-[255.36px] bg-gray-300 flex items-center justify-center m-auto text-gray-600">
              collecting reports
            </div>
          </div>
        </div>
    )
}

export default IntroBar;