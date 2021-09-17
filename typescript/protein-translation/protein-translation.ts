type ProteinType =
  | "Methionine"
  | "Phenylalanine"
  | "Leucine"
  | "Serine"
  | "Tyrosine"
  | "Cysteine"
  | "Tryptophan"
  | "STOP";

type CodonProteinType = {
  [key: string]: ProteinType;
};

const CODON_PROTEIN_TABLE: CodonProteinType = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

export function translate(rna: string): ProteinType[] {
  const rnaCodons = rna.match(/.{3}/g);
    const proteins: ProteinType[] = [];

    if (rnaCodons == null) {
      return proteins;
    }

    for (const codon of rnaCodons) {
      if (!(codon in CODON_PROTEIN_TABLE)) return proteins;
      if (CODON_PROTEIN_TABLE[codon] === "STOP") return proteins;

      proteins.push(CODON_PROTEIN_TABLE[codon]);
    }

    return proteins;
}
