const tests = [
  {
    challenge_id: 1,
    challenge_name: "DNA Pairs",
    description:
      "Create a function that takes a string of DNA and matches each base with its pair, returning a nested array. In DNA, C pairs with G and T pairs with A.",
    example: `dnaPair("ATAG");
    // should return [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]`,
    script: "../__tests__/dna.test.js",
  },
  {
    challenge_id: 2,
    challenge_name: "Get Tweet Data",
    description: `The challenge is to implement a function which returns an object containing data from a given tweet.

    We want easy access to the following data:
    
    The length of the tweet.
    The amount of hash tags ( #awesomeNorthcoders ) in the tweet as well as an array of them.
    The amount of mentions ( @northcoders ) in the tweet as well as an array of them.
    We only want to return unique hash tags and handles mentioned.`,
    example: `getTweetData("I am #coding with @northcoders I love #coding and @northcoders");
    // should return { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 }`,
    script: "../__tests__/get-tweet-data.test.js",
  },
];

exports.module = tests;
