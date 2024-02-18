export class ScholarshipApiClient {
  getBaseUrl() {
    return "https://pre-prod.harbour.space/api/v1/scholarship_pages/";
  }

  async getBySlug(slug: string) {
    return fetch(`${this.getBaseUrl()}${slug}`).then((response) =>
      response.json()
    );
  }
}
