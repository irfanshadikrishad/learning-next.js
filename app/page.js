import Image from "next/image";
import cat from "@/public/cat.jpg";

export default function Homemade_Apple() {
  return (
    <div className="containor">
      <h1>Home</h1>
      <div className="image">
        <Image
          src={cat}
          // src="https://i.pinimg.com/564x/30/a1/d9/30a1d94c1e73e791f364c150c5471ce4.jpg"
          alt="cat"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={500}
          placeholder="blur"
          priority="true"
        />
      </div>
    </div>
  );
}
