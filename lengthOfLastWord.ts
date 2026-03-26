function lengthOfLastWord(s: string): number {
  const trim = s.trim();
  const split = trim.split(" ");
  const last = split.pop();
  return last?.length as number;
}
