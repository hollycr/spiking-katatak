describe("dnaPairs()", () => {
  const data = JSON.parse(process.env.INPUT_TO_TEST);
  const funcPart = data.slice(data.indexOf("{") + 1, data.length - 1).trim();
  const dnaPairs = new Function("dna", funcPart);

  test("returns an array", () => {
    expect(Array.isArray(dnaPairs("G"))).toBe(true);
  });
  test("returns an empty array when passed an empty string", () => {
    expect(dnaPairs("")).toEqual([]);
  });
  test("returns array with a nested array of correct pair when passed one character", () => {
    expect(dnaPairs("G")).toEqual([["G", "C"]]);
  });
  test("returns array of nested arrays when passed any number of chars", () => {
    expect(dnaPairs("ATAG")).toEqual([
      ["A", "T"],
      ["T", "A"],
      ["A", "T"],
      ["G", "C"],
    ]);
  });
});
