export default function terrain() {
    return (
      <div>
        <h1>Hello world!</h1>
        <p>This is the terrain page</p>
        <p>The terrain generation project explores python code generated scene in Blender.
          The target is to produce a randomly generated rendered scene from a python script.
        </p>
        <p>
          The procedure is that it will first clear a workspace, and then generate the raw model of the terrain.
          Then it will generate the material used to render that model, and the camera settings to do the final generation.
          everything here is executed completely inside the project file and regardless of extra settings instead of parameters taken in the script to enable different modes.

        </p>
        {/* to be done */}
        <p>
          The basic idea of terrain generation algorithm is apply a location masking to a plane object, therefore manipulates the location of each vertices.
          The first algorithm is the naive generation. It will add a random vertical displacement to the vertices, and through each iterations the displacement will be slighter and slighter.
          With certain thresold settings to the horizon, it can create the water surface of this terrain.
          Another option is to use the Perlin noise. We can manipulate the frequency and amplitude to create the height map of our terrain.
          The Perlin noise algorithm is implemented in the script, and we have another option that uses blender&apos;s noise generation function to achive the same goal.
        </p>
        <p>
          First let&apos;s discuss a little bit on the iterations. The idea is to generate a grid and apply random edition to it.
          However, if we just generate a random number to every vertex, the outcome would be shaky and chaotic.
          Instead, our approach would be overlapping different waves. Some with low frequency and large amplitude, some with high frequency and small amplitude.
          By doing this, we should be able to create a terrain-like object.
        </p>
        <p>
          The implementation of this script would require bpy, aka Blender Python API.
          First we will need to create an empty scene to prepare our generated objects.
          Then a plane mesh will be generated and we will going to divide it each iteration to simulate low frequency to high.
          Each iteration after we apply a random number to the vertices, we will use a bpy command to submesh this plane, also decrease the modifier by a certain multiplier.
          Finally, we will use an optional if statement to set the ground surface, creating a water surface for the terrain.
          After the mesh is set, we will also need to use bpy to blend a material to the mesh.
          The basic idea is to use a height mapping to apply differnt color to the model.
        </p>
      </div>
    )
}