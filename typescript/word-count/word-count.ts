export default class Words {
  count(sentence: string): Map<string, number> {
    let words_count: { [k: string]: number } = {};
    sentence
      .trim()
      .toLowerCase()
      .split(/\s+/g)
      .forEach((word) => {
        if (word in words_count && typeof words_count[word] === "number") {
          words_count[word] += 1;
        } else {
          words_count[word] = 1;
        }
      });

    return new Map(Object.entries(words_count));
  }
}
