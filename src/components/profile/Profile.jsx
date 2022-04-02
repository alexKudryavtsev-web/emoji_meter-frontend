import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import getRecords from "../../store/selector/getRecords";
import ProfileRecord from "./ProfileRecord";
import store from "../../store";
import { readRecords } from "../../store/reducers/recordsReducer";

function Profile() {
  const records = useSelector(getRecords);

  useEffect(() => {
    if (records.length === 0) {
      store.dispatch(readRecords());
    }
  }, []);

  return (
    <Flex direction="column" minWidth="60vw">
      {records.map((record) => (
        <Box m={1} key={record.id}>
          <ProfileRecord {...record} />
        </Box>
      ))}
    </Flex>
  );
}

export default Profile;
