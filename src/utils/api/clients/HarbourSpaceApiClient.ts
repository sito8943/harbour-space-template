import { ScholarshipApiClient } from "./ScholarshipApiClient";

export class HarbourSpaceApiClient {
  public scholarshipApiClient: ScholarshipApiClient;

  constructor() {
    this.scholarshipApiClient = new ScholarshipApiClient();
  }
}
