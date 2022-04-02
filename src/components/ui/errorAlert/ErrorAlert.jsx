import { Heading } from "@chakra-ui/react";
import React from "react";

function ErrorAlert({ message, ...args }) {
  return (
    <Heading color="red" size="xs" textAlign="center" {...args}>
      {message}
    </Heading>
  );
}

export default ErrorAlert;
