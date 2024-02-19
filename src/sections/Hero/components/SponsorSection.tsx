import { useMemo } from "react";

// images
import zeptolab from "assets/images/zeptolab.svg";

// providers
import { useScholarship } from "providers";

// components
import { Card, Column, Countdown } from "components";
import GridCard from "./GridCard";

function SponsorSection() {
  const { scholarship } = useScholarship();

  const difference = useMemo(
    () =>
      new Date(scholarship.scholarship_start_date).getTime() -
      new Date(scholarship.application_end_date).getTime(),
    [scholarship]
  );

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
        <Countdown start={difference} className="text-2xl ipadPro:text-xl"/>
      </Card>
      <GridCard />
    </Column>
  );
}

export default SponsorSection;
