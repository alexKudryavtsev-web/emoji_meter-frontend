import { Box, Button, Flex, Heading, Link, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import EmailInput from "../ui/emailInput/EmailInput";
import PasswordInput from "../ui/passwordInput/PasswordInput";
import store from "../../store";
import { login } from "../../store/reducers/userReducer";
import { Link as RouterLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginBtnHandler() {
    store.dispatch(login({ email, password }));
  }

  return (
    <VStack align="stretch">
      <Box>
        <Heading textAlign="start" fontSize="1.5em">
          Login
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
        <Button onClick={loginBtnHandler} colorScheme="green">
          login
        </Button>
      </Box>
      <Flex justify="center" marginTop={10}>
        <Link as={RouterLink} color="blue.300" to="/forgotPassword">
          forgot your password?
        </Link>
      </Flex>
    </VStack>
  );
}

export default Login;
