// next image
import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-20 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
      <Image src="/KatapultX.png" width={400} height={400} alt="" />
    </div>
  );
};

export default TopLeftImg;
