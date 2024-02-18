import { ApplicationProcess } from "./ApplicationProcess";
import { Company } from "./Company";
import { HtmlItem } from "../HtmlItem";
import { PhotoFile } from "./PhotoFile";

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
};
