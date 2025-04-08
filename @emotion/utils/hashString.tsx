export default function hashString(keys: string) {
  let val = 10000000;
  for (let i = 0; i < keys.length; i++) {
    val += keys.charCodeAt(i);
  }
  return val.toString(16).slice(0, 6);
}