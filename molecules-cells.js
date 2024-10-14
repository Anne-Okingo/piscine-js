const IsDNA = (string) => {
    // Check if the string only contains valid DNA nucleotides (G, C, T, A)
    const regex = /^[GCTA]*$/; // Accepts G, C, T, A
    return regex.test(string); // Return true if the string matches the regex
};

const IsRNA = (string) => {
    // Check if the string only contains valid RNA nucleotides (C, G, A, U)
    const regex = /^[CGAU]*$/; // Accepts C, G, A, U
    return regex.test(string); // Return true if the string matches the regex
};

const RNA = (string) => {
    // Return empty string if the input is empty
    if (string.length === 0) return '';

    if (!IsDNA(string)) {
        throw new Error('Invalid DNA string: ' + string);
    }

    let rna = ''; // Initialize an empty string for RNA

    // Convert each nucleotide in the DNA strand to its RNA complement
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'G') {
            rna += 'C';
        } else if (string[i] === 'C') {
            rna += 'G';
        } else if (string[i] === 'T') {
            rna += 'A';
        } else if (string[i] === 'A') {
            rna += 'U';
        }
    }
    return rna; // Return the resulting RNA strand
};

const DNA = (string) => {
    // Return empty string if the input is empty
    if (string.length === 0) return '';

    if (!IsRNA(string)) {
        throw new Error('Invalid RNA string: ' + string);
    }

    let dna = ''; // Initialize an empty string for DNA

    // Convert each nucleotide in the RNA strand to its DNA complement
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'C') {
            dna += 'G';
        } else if (string[i] === 'G') {
            dna += 'C';
        } else if (string[i] === 'A') {
            dna += 'T';
        } else if (string[i] === 'U') {
            dna += 'A';
        }
    }
    return dna; // Return the resulting DNA strand
};