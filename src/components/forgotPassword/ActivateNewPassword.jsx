import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AuthService from "../../services/AuthService";
import PasswordInput from "../ui/passwordInput/PasswordInput";

function ActivateNewPassword() {
  const { link } = useParams();
  const [password, setPassword] = useState("");
  const [isSend, setIsSend] = useState(false);

  async function activateNewPasswordBtnHandler() {
    await AuthService.activateNewPassword(link, password);
    setIsSend(true);
  }

  return (
    <VStack minWidth={300}>
      <Box>
        <Heading textAlign="center" fontSize="1.5em">
          Reset Password
        </Heading>
      </Box>
      <Box>
        <PasswordInput value={password} setValue={setPassword} />
      </Box>
      <Flex justify="center">
        <Button
          onClick={activateNewPasswordBtnHandler}
          colorScheme="green"
          variant="ghost"
        >
          set new password
        </Button>
      </Flex>
      {isSend && (
        <Box>
          <Heading size="xs">new password set</Heading>
        </Box>
      )}
    </VStack>
  );
}

export default ActivateNewPassword;
