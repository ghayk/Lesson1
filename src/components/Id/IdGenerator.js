
export default function IdGenerator () {
   return Math.floor(Math.random() * 9000 + 1000).toString(16);
}