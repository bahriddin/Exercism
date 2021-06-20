const DNA_TO_RNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
} as const;

class Transcriptor {
  toRna(dnaStrand: string) {
    return dnaStrand.split("").reduce((rnaStrand, dnaNucleotide) => {
      if (dnaNucleotide in DNA_TO_RNA) {
        // @ts-ignore
        return rnaStrand + DNA_TO_RNA[dnaNucleotide];
      } else {
        throw new Error("Invalid input DNA.");
      }
    }, "");
  }
}

export default Transcriptor;
