import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import EmailInput from "../ui/emailInput/EmailInput";
import PasswordInput from "../ui/passwordInput/PasswordInput";
import getUserSignUpError from "../../store/selector/getUserSignUpError";
import ErrorAlert from "../ui/errorAlert/ErrorAlert";
import store from "../../store";
import { signUp } from "../../store/reducers/userReducer";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSendEmail, setIsSendEmail] = useState(false);
  const errorMessage = useSelector(getUserSignUpError);

  async function signUpBtnHandler() {
    store.dispatch(signUp({ email, password }));
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
      <ErrorAlert message={errorMessage} />
      <Box>
        {isSendEmail && !errorMessage && (
          <Heading size="xs">Letter sent to email {email}</Heading>
        )}
      </Box>
    </VStack>
  );
}

export default SignUp;
