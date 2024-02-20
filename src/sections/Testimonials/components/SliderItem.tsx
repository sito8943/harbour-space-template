// images
import irene from "assets/images/irene.png";
import linkedin from "assets/images/linkedin.png";

// utils
import { Testimonial } from "utils";

// styles
import "./styles.css";

type SliderItemProp = Testimonial;

function SliderItem(props: SliderItemProp) {
  /* IMPORTANT AS API DOESN'T BRING TESTIMONIALS WILL US EXAMPLE ONLY FOR SHOWN */
  return (
    <div className="slider-item">
      <div className="top card-borders">
        <div className="person">
          <img
            src={irene}
            className="w-20 h-20"
            alt="A picture of an Asian girl gracefully holding her long black hair."
          />
          <div>
            <h4>Irene Pereyra</h4>
            <p>Interaction Design Fellow '19</p>
          </div>
        </div>
        <div>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin's logo" />
          </a>
        </div>
      </div>
      <div className="bottom card-borders">
        <p className="bottom-content">
          This Fellowship was a turning point in my career. I wouldn't be where
          I am today without the financial support and experienced offered
          through the program.
        </p>
        <div className="bottom-extra">
          <p>Education</p>
          <p>·</p>
          <p>B.A. Visual Design</p>
        </div>
      </div>
    </div>
  );
}

export default SliderItem;
