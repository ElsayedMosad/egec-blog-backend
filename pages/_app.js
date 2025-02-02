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
        <div className="">
          <div className={asideOpen ? "container active" : "container"}>
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </>
  );
}
