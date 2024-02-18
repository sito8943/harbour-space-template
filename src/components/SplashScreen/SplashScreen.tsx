import { css } from "@emotion/css";

// images
import logo from "assets/images/logo-primary.svg";

// styles
import "./styles.css";

type SplashScreenPropType = {
  isLoading: boolean;
  error: Error | null;
};

function SplashScreen(props: SplashScreenPropType) {
  const { isLoading, error } = props;

  return (
    <div
      className={`w-full h-screen flex items-center justify-center bg-white transition ${!isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <img
        className={`w-80 h-80 blink`}
        src={logo}
        alt="Harbour.Space's logo"
      />
    </div>
  );
}

export default SplashScreen;
