import React from "react";
import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import formatDate from "../../utils/formatDate";

function ProfileRecord({ emojis, comment, date }) {
  return (
    <>
      <Flex align="center">
        <Box fontWeight="bold">{formatDate(date)}</Box>
        <Flex wrap="wrap" maxWidth="75vw" flex={1} p={2}>
          <Heading size="lg">{emojis}</Heading>
        </Flex>
        <Box textAlign="end">{comment}</Box>
      </Flex>
      <Divider />
    </>
  );
}

export default ProfileRecord;
