import { HtmlItem, HtmlList } from "../HtmlItem";
import { Program } from "./Program";
import { Location } from "./Location";

export enum DegreeEnum {
  master = "Master",
}

export type Scholarship = {
  scope: string;
  id: number;
  name: string;
  description: HtmlItem[];
  location: Location;
  scholarship_start_date: string;
  application_end_date: string;
  duration: 1;
  position: "";
  about: HtmlItem[];
  tuition: number;
  total_value: number;
  stipend_per_month: number;
  stipend_per_year: number;
  remaining: number;
  study_commitment: number;
  internship_commitment: number;
  study_commitment_text: string;
  internship_commitment_text: string;
  work_commitment: number;
  work_commitment_duration: string;
  work_commitment_type: string;
  credits: number;
  courses: number;
  degree: DegreeEnum;
  what_you_will_learn: {};
  internship_description: HtmlItem;
  internship_expectation: HtmlList;
  program_director_ids: number[];
  program_instructor_ids: number[];
  who_should_apply_text: HtmlItem[];
  university_requirements: HtmlList;
  internship_requirements: HtmlList;
  encourage_text: HtmlItem[];
  program: Program;
};
