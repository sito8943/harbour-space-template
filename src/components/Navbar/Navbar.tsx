// images
import logo from "../../assets/images/logo.svg";

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
          aria-label="go to apply to the scholarship"
          className="absolute right-[120px] center-vertical mt-1 ipadPro:hidden cta-apply-now"
        >
          Apply now
        </a>
      </div>
    </header>
  );
}

export default Navbar;
