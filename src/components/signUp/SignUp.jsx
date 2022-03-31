import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import AuthService from "../../services/AuthService";
import EmailInput from "../ui/emailInput/EmailInput";
import PasswordInput from "../ui/passwordInput/PasswordInput";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSendEmail, setIsSendEmail] = useState(false);

  async function signUpBtnHandler() {
    await AuthService.registration(email, password);
    setIsSendEmail(true);
  }

  return (
    <VStack align="stretch">
      <Box>
        <Heading textAlign="start" fontSize="1.5em">
          Sign Up
        </Heading>
      </Box>
      <Box>
        <EmailInput value={email} setValue={setEmail} />
      </Box>
      <Box>
        <PasswordInput
          value={password}
          setValue={setPassword}
          placeholder="password"
        />
      </Box>
      <Box>
        <Button onClick={signUpBtnHandler} colorScheme="red">
          sing up
        </Button>
      </Box>
      <Box>
        {isSendEmail && (
          <Heading size="xs">Letter sent to email {email}</Heading>
        )}
      </Box>
    </VStack>
  );
}

export default SignUp;
