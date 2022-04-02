import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import store from "../../store";
import { resetPassword } from "../../store/reducers/userReducer";
import EmailInput from "../ui/emailInput/EmailInput";
import getUserResetPasswordError from "../../store/selector/getUserResetPasswordError";
import ErrorAlert from "../ui/errorAlert/ErrorAlert";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSend, setIsSend] = useState(false);
  const errorMessage = useSelector(getUserResetPasswordError);

  async function sendConfirmationEmail() {
    store.dispatch(resetPassword({ email }));
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
      <ErrorAlert message={errorMessage} />
      {isSend && !errorMessage && (
        <Box>
          <Heading size="xs">Letter sent to email {email}</Heading>
        </Box>
      )}
    </VStack>
  );
}

export default ForgotPassword;
