import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import AuthService from "../../services/AuthService";
import EmailInput from "../ui/emailInput/EmailInput";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSend, setIsSend] = useState(false);

  async function sendConfirmationEmail() {
    await AuthService.resetPassword(email);
    setIsSend(true);
  }

  return (
    <VStack minWidth={300}>
      <Box>
        <Heading textAlign="center" fontSize="1.5em">
          Forgot password?
        </Heading>
      </Box>
      <Box>
        <EmailInput value={email} setValue={setEmail} />
      </Box>
      <Flex justify="center">
        <Button
          onClick={sendConfirmationEmail}
          colorScheme="green"
          variant="ghost"
        >
          send a confirmation email
        </Button>
      </Flex>
      {isSend && (
        <Box>
          <Heading size="xs">Letter sent to email {email}</Heading>
        </Box>
      )}
    </VStack>
  );
}

export default ForgotPassword;
