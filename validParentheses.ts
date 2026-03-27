function isValid(s: string): boolean {
  const splited = s.split("");
  const map: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const p: string[] = [];

  for (let index = 0; index < splited.length; index++) {
    const element = s[index] as string;

    if (!map[element]) {
      p.push(element);
    } else {
      if (p.length === 0) {
        return false;
      }

      const last = p.pop();

      if (last !== map[element]) {
        return false;
      }
    }
  }

  return p.length === 0;
}
