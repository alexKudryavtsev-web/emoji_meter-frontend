import $api from "../http";

class RecordsService {
  static async createReport(emojis, comment) {
    const { data } = await $api.post("/report/create", { emojis, comment });
    return data;
  }

  static async readRecords() {
    const { data } = await $api.get("/report/read");
    return data;
  }
}

export default RecordsService;
