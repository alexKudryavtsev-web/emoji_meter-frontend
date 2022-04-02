import { Button, Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../../store";
import { logout } from "../../store/reducers/userReducer";
import getIsAuth from "../../store/selector/getIsAuth";
import { AiOutlineUser, AiFillEdit } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { clearReports } from "../../store/reducers/recordsReducer";

function Header() {
  const isAuth = useSelector(getIsAuth);

  async function logoutHandler() {
    store.dispatch(logout());
    store.dispatch(clearReports());
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
        <>
          <Link to="/">
            <IconButton
              icon={<AiOutlineUser />}
              variant="ghost"
              colorScheme="blue"
              isRound
              fontSize="1.5em"
            />
          </Link>
          <Link to="create">
            <IconButton
              icon={<AiFillEdit />}
              variant="ghost"
              colorScheme="green"
              isRound
              fontSize="1.5em"
            />
          </Link>
          <Link to="/">
            <IconButton
              icon={<BiExit />}
              variant="ghost"
              onClick={logoutHandler}
              colorScheme="red"
              fontSize="1.5em"
              isRound
            />
          </Link>
        </>
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
