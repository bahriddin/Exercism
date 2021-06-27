class Bob {
  hey(sentence: string): string {
    sentence = sentence.trim();
    if (sentence.length == 0) return "Fine. Be that way!";

    const question = sentence.endsWith("?");
    const yell =
      sentence.match(/[a-z]/gi) && sentence.toUpperCase() === sentence;

    if (yell && question) return "Calm down, I know what I'm doing!";
    if (question) return "Sure.";
    if (yell) return "Whoa, chill out!";

    return "Whatever.";
  }
}

export default Bob;
