import ParentComponent from "@/components/ParentComponent";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [asideOpen, setAsideOpen] = useState(false);
  const AsideClickOpen = () => {
    // console.log(asideOpen);
    setAsideOpen(!asideOpen);
  };

  return (
    <>
      <ParentComponent appOpen={asideOpen} appAsideOpen={AsideClickOpen} />
      <main className="">
        <div className=" flex ">
          <div className={asideOpen ? "mycontainer active" : "mycontainer  "}>
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </>
  );
}
