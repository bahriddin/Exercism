const DNA_TO_RNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

class Transcriptor {
  toRna(dnaStrand: string) {
    return dnaStrand
      .split("")
      .map((nucleotide) => {
        if (nucleotide in DNA_TO_RNA) {
          // @ts-ignore
          return DNA_TO_RNA[nucleotide];
        } else {
          throw new Error("Invalid input DNA.");
        }
      })
      .join("");
  }
}

export default Transcriptor;
