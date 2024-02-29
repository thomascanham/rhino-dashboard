export default function generateRandomId() {
  const timestamp = Date.now().toString(36);
  const randomNum = Math.random().toString(36).substr(2);

  return timestamp + randomNum;
}
