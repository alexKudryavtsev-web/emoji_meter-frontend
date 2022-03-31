import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../../store";
import { logout } from "../../store/reducers/userReducer";
import getIsAuth from "../../store/selector/getIsAuth";

function Header() {
  const isAuth = useSelector(getIsAuth);

  async function logoutHandler() {
    store.dispatch(logout());
  }

  return (
    <Flex
      bg="gray.50"
      position="sticky"
      top="0"
      zIndex={9999}
      p={2}
      marginBottom={4}
      alignItems="center"
    >
      <Heading size="lg">emoji meter</Heading>
      <Spacer />
      {isAuth ? (
        <Link to="/">
          <Button variant="ghost" onClick={logoutHandler} colorScheme="green">
            log out
          </Button>
        </Link>
      ) : (
        <>
          <Link to="/">
            <Button variant="ghost" colorScheme="green">
              login
            </Button>
          </Link>
          <Link to="signup">
            <Button variant="ghost" colorScheme="red">
              sign up
            </Button>
          </Link>
        </>
      )}
    </Flex>
  );
}

export default Header;
