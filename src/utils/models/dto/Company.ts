import { HtmlItem } from "../HtmlItem";
import { PhotoFile } from "./PhotoFile";

export type Company = {
  id: number;
  scope: string;
  name: string;
  type: string;
  color: string;
  website: string | null;
  rank: number;
  description: HtmlItem[];
  photos: PhotoFile[];
  color_logo: PhotoFile;
  logo_light: PhotoFile;
  logo_dark: PhotoFile;
};
