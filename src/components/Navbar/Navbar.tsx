// images
import logo from "../../assets/logo.svg";

// styles
import "./styles.css";

function Navbar() {
  return (
    <header className="w-full h-[130px] relative">
      <div className="bg-primary flex items-center justify-between h-[65px] px-10 text-white">
        <div className="flex items-start gap-2">
          <img src={logo} alt="Harbour.Space's logo" />
          <span className="uppercase leading-[18px]">/Interaction Design</span>
        </div>
        <div>
          <button name="menu-button"></button>
        </div>
        <a
          href="#"
          className="absolute right-[120px] center-vertical pt-2"
        >
          <button className="cta-apply-now">Apply now</button>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
