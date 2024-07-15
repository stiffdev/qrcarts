import { options } from "@/lib/options";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Links from "./links/Links";


const Navbar = async () => {

  const session = await getServerSession(options);

  

  return (
    <div className="bg-white flex items-center justify-between px-4  my-5 w-full max-w-full">
      <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
        <Image
          src="/qr.png"
          alt="Logo"
          width={50}
          height={50}
          priority
        />
        <span>QR-CART</span>
      </div>
   
        <Links session={session} />
      
    </div>
  );
};
  
export default Navbar;