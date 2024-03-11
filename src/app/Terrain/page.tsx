import Image from "next/image.js"
import Link from "next/link"

export default function terrain() {
    return (
      <div>
        <h1 className="text-center m-[2.5%]">Terrain Generation Based On Blender Python API</h1>
        <div className="flex justify-center">
          <Image
                  src="/images/terrain_sample.jpg"
                  alt="terrain project"
                  width={435.82}
                  height={435.82}
                  />
        </div>
        <Link href={"https://github.com/zhy21345/Python-Blender-Terrain-Model-Generator"} className="flex justify-center text-blue-500 font-semibold">
          Github Link
        </Link>

        <p>The terrain generation project explores python code generated scene in Blender,
          and the target is to produce a randomly generated rendered scene from a python script.
        </p>
        <p>
          The procedure is that it will first clear a workspace, and then generate the raw model of the terrain.
          Then it will generate the material used to render that model, and the camera settings to do the final generation.
          Everything here is executed completely inside the project file and regardless of extra settings instead of parameters taken in the script to enable different modes.
        </p>
        <p>
          The basic idea of terrain generation algorithm is apply a location masking to a plane object, therefore manipulates the location of each vertices.
          Our approach is inspired by the natural noise, which we can overlap a certain number of waves to create a noise pattern, which is similar to the terrain pattern as we know. We will do this by generating random amplitudes and frequencies, Here let&apos;s go down into the code a little bit.
        </p>
        <p>
          First let&apos;s discuss a little bit on the iterations. The idea is to generate a grid and apply random edition to it.
          However, if we just generate a random number to every vertex, the outcome would be shaky and chaotic. Also, it cost too much to apply this algorithm to every vertices over and over again. Instead, think about it in this way: 
          We can use waves with low frequency and large amplitude as the basic module of our terrain, and each iteration we will decrease the amplitude and increase the frequency, so that we will not need to look after every vertices in lower frequency iterations.
          Luckily, this can be easily done with the help of the plain mesh in Blender.
        </p>
        <p>
          The implementation of this script would require bpy, aka Blender Python API.
          First we will need to create an empty scene to prepare our generated objects.
          Then a plane mesh will be generated and we will going to divide it each iteration to simulate low frequency to high.
          Each iteration after we apply a random number to the vertices, we will use a bpy command to submesh this plane, also decrease the modifier by a certain multiplier. In this way we can control the number of vertices to be processed, and only take care of the bunch of vertices under the current frequency.
          Finally, we will use an optional if statement to set the ground surface, creating a water surface for the terrain.
          After the mesh is set, we will also need to use bpy to blend a material to the mesh.
          The basic idea is to use a height mapping to apply different colors to the model, this is also provided by the Blender shader. After the material is applied to the model, it will finish the generation function.
        </p>
      </div>
    )
}