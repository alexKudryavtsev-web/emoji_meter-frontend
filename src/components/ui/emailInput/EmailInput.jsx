import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import React from "react";
import { validateEmail } from "../../../utils/validate";

function EmailInput({ value, setValue, ...props }) {
  const isInvalid = !validateEmail(value);

  return (
    <FormControl isInvalid={isInvalid}>
      <InputGroup>
        <InputLeftElement>
          <EmailIcon />
        </InputLeftElement>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="email"
          {...props}
        />
      </InputGroup>
      {isInvalid && <FormErrorMessage>wrong email</FormErrorMessage>}
    </FormControl>
  );
}

export default EmailInput;
