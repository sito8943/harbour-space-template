import { Country } from "./Country";
import { PhotoFile } from "./PhotoFile";

export type Director = {
  id: number;
  scope: string;
  name: string;
  first_name: string;
  last_name: string;
  slug: string;
  category: string;
  small_picture: PhotoFile;
  current_position: string;
  country: Country;
};
