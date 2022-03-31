import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";

function PasswordInput({ value, setValue, ...props }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        pr="4.5rem"
        type={show ? "text" : "password"}
        {...props}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
