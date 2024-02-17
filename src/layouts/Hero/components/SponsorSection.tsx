// images
import zeptolab from "../../../assets/images/zeptolab.svg";

// components
import GridCard from "./GridCard";
import Card from "../../../components/Card/Card";
import Column from "../../../components/Column/Column";

function SponsorSection() {
  return (
    <Column>
      <div className="flex items-center gap-10 ipadPro:items-start ipadPro:flex-col-reverse ipadPro:mt-40">
        <img src={zeptolab} alt="zeptolab's logo" />
        <div className="ipadPro:flex ipadPro:items-start ipadPro:gap-1">
          <p className="text-lg">Powered by:</p>
          <p className="font-semibold ipadPro:text-lg">Zeptolab</p>
        </div>
      </div>
      <Card header="Application closes in" className="w-full">
        <p className="text-2xl ipadPro:text-xl">6 Day : 22 Hrs : 56 Min : 13 Seg</p>
      </Card>
      <GridCard />
    </Column>
  );
}

export default SponsorSection;
