export default function formatDate(timestamp) {
  const dateCreated = new Date(timestamp);
  const formatedDateCreated = dateCreated.toLocaleDateString("en-EN", {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return formatedDateCreated;
}
