import Image from "next/image.js"

export default function Home() {
    return (
      <main>
        <h1 className="text-center m-[2.5%]">3D Model Reconstruction From Photos</h1>
        <div className="flex justify-center">
          <Image
                  src="/images/mesh.png"
                  alt="terrain project"
                  width={435.82}
                  height={435.82}
                  />
        </div>
        <p>
            This project aims to reproduce a 3D mesh object of a real-world item from 2D pictures taken by normal cameras.
        </p>
        <div className="flex justify-center">
          <Image
                  src="/images/imaging.png"
                  alt="terrain project"
                  width={435.82}
                  height={435.82}
                  />
        </div>
	    <p>
            The idea of imaging is a very simple, we can use two camera to determine the distance of a certain point, therefore calulating the 3D coordinate of it. If we are able to repeat this to every point of the picture we take, idealy we should be able to calculte all the coordinates of the points on the item, therefore creating a 3D mesh. Our first job is to identify points on the two pictures. Which pair represents the same &quot;real&quot; point?
        </p>

        <p>
            One approach which is to give the point a physical coding, that our image reading tool will be able to read the identity of a vertex in the grid. After comparing the two vertices with the same identity, we can begin our reconstruction calculation.
        </p>
        <div className="flex justify-center">
          <Image
                  src="/images/gray1.png"
                  alt="terrain project"
                  width={435.82}
                  height={435.82}
                  />
        </div>
        <p>
            The physical coding we are using is called the gray code. We can project white lights on the item, and when we read the rgb of a point is light enough, we will consider this digit of the point to be represented as &quot;1&quot;. Then, we will split our projector in the middle, and creating a dark half that doesn&apos;t project white light. Vice versa, when we read a point that is dark enough, it will be considered as &quot;0&quot;. After spliting the projected light many times, we will get a series of photos showing the item being projected with different patterns, consider every photo to represent one single digit of the gray code, and when we read them in sequence, we should be able to get the full code. For example, if a certain point on the picture is captured 4 times in light, and 4 times in dark, the gray code could be something like 00101110. If we repeat this on another direction, we can get both the horizontal and vertical coordinates.
        </p>
        <div className="flex justify-center">
          <Image
                  src="/images/gray2.png"
                  alt="terrain project"
                  width={435.82}
                  height={435.82}
                  />
        </div>
        <p>
            After we get the coordinates, we can compare the identical points in both pictures, and input our known camera information such as location and direction, then we can calculate the true location of the point. We can also read the rgb information on the light surface of this point, and calculate the color. After we finish generating a surface, we can rotate the item to a different angle, and repeat the same process.
        </p>
        <div className="flex justify-center">
          <Image
                  src="/images/output.png"
                  alt="terrain project"
                  width={435.82}
                  height={435.82}
                  />
        </div>
        <p>
            With all the surfaces being collected, we need to combine them together into a single mesh. This will require us to know the rotation information between the surfaces. We need to pick some similar points on the surfaces, such as a common corner or an edge, and use SVD method to calculate their transpose matrix. After that, we can apply the reverse transpose to one surface, and combine them together.
        </p>
        <p>
            After everything is done, we need to take care of the outliers which are almost inevitable. One way to do this is to check the nearest point and we can determine a threshold distance, above which will be considered as an outlier and removed from the list. Another approach would be using a union find method, so that we can find all the outlier groups. When everything is set, the reconstructioon is finished.
        </p>
      </main>
    )
}