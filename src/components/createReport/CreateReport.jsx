import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { BsFillSaveFill } from "react-icons/bs";
import Picker from "emoji-picker-react";
import joinEmojiArray from "../../utils/joinEmojiArray";
import store from "../../store";
import { createRecord } from "../../store/reducers/recordsReducer";

function CreateReport() {
  const [inputEmojis, setInputEmojis] = useState([]);
  const [comment, setComment] = useState(" ");

  function pickerClickHandler(event, emojiObject) {
    setInputEmojis((prev) => [...prev, emojiObject]);
  }

  function removeEmoji(index) {
    setInputEmojis((prev) =>
      prev.filter((_, currentIndex) => currentIndex !== index)
    );
  }

  function createReportBtnHandler() {
    const emojis = joinEmojiArray(inputEmojis);
    store.dispatch(createRecord({ emojis, comment }));

    setInputEmojis([]);
    setComment(" ");
  }

  useEffect(() => {
    console.log(inputEmojis);
  }, [inputEmojis]);

  return (
    <VStack>
      <Box>
        <Heading size="md">Create report</Heading>
      </Box>
      <HStack>
        {inputEmojis.map((emoji, index) => (
          <Tooltip hasArrow label="You can click on an emoji and delete it">
            <Box
              cursor="pointer"
              key={index}
              onClick={() => removeEmoji(index)}
              fontSize="1.5em"
            >
              {emoji.emoji}
            </Box>
          </Tooltip>
        ))}
      </HStack>
      <Box>
        <Picker onEmojiClick={pickerClickHandler} />
      </Box>
      <Flex>
        <Box marginRight={2}>
          <IconButton
            colorScheme="red"
            variant="solid"
            icon={<BsFillSaveFill />}
            onClick={createReportBtnHandler}
          />
        </Box>
        <Box>
          <Input
            placeholder="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Box>
      </Flex>
    </VStack>
  );
}

export default CreateReport;
