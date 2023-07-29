// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-10 w-full flex items-center px-16 xl:px-0 xl:h-[80px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4 z-1050">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={260}
              height={48}
              alt=""
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
