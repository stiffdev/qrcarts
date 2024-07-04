import Image from "next/image";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Cuenta Page",
  description: "Detalles de tu cuenta",
};

const CuentaPage = () => {
  // const a = Math.random();

  // console.log(a);

  return (
    <div >
      <div >
      <h1>Mi cuenta</h1>
        <Image src="/contact.png" alt="" fill />
      </div>
      <div >
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" >
          <input type="text" placeholder="Name or company" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default CuentaPage;