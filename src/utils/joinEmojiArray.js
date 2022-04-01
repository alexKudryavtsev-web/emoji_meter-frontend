export default function joinEmojiArray(array) {
  return array.map((emojiObj) => emojiObj.emoji).join("");
}
