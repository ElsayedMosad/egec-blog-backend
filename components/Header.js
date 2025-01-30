import { RiBarChartHorizontalLine } from "react-icons/ri";
import { BiExitFullscreen } from "react-icons/bi";

export default function Header() {
  return (
    <>
      <header className="header flex flex-sb">
        <div className="logo flex gap-2">
          <h1>ADMIN</h1>
          <div className="headerham flex flex-center">
            <RiBarChartHorizontalLine />
          </div>
        </div>
        <div className="rightnav flex gap-2">
          <div>
            <BiExitFullscreen />
          </div>
        </div>
      </header>
    </>
  );
}
