import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RecordsService from "../../services/RecordsService";

const initialState = {
  records: [],
};

const createRecord = createAsyncThunk(
  "records/createRecord",
  async (payload) => {
    return await RecordsService.createReport(payload.emojis, payload.comment);
  }
);

const readRecords = createAsyncThunk("records/readRecords", async () => {
  return await RecordsService.readRecords();
});

const recordsSlice = createSlice({
  name: "records",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createRecord.fulfilled, (state, action) => {
      state.records.unshift(action.payload);
    });
    builder.addCase(readRecords.fulfilled, (state, action) => {
      const emojisArr = action.payload.reverse();
      state.records.push(...emojisArr);
    });
  },
});

export default recordsSlice.reducer;
export { createRecord, readRecords };
