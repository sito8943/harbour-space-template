import { ApplicationProcess } from "./ApplicationProcess";
import { Company } from "./Company";
import { HtmlItem } from "../HtmlItem";
import { PhotoFile } from "./PhotoFile";
import { Director } from "./Director";
import { Instructor } from "./Instructor";
import { Mentor } from "./Mentor";

export type Program = {
  id: number;
  scope: string;
  name: string;
  about: string;
  description: HtmlItem[];
  link: string;
  available_process: ApplicationProcess[];
  photos: PhotoFile[];
  program_logo: PhotoFile;
  json_logo: string;
  company: Company;
  directors: Director[];
  instructors: Instructor[];
  mentors: Mentor[];
};
