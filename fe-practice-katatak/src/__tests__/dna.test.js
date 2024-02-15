//import React from "react";
import { render, screen } from "@testing-library/react";
import dnaPairs from "../components/sandbox";

describe("dnaPairs()", () => {
  test("returns an array", () => {
    // render(<Sandbox />);
    expect(Array.isArray(dnaPairs("G"))).toBe(true);
  });
  //   test("returns an empty array when passed an empty string", () => {
  //     expect(dnaPairs("")).toEqual([]);
  //   });
  //   test("returns array with a nested array of correct pair when passed one character", () => {
  //     expect(dnaPairs("G")).toEqual([["G", "C"]]);
  //   });
  //   test("returns array of nested arrays when passed any number of chars", () => {
  //     expect(dnaPairs("ATAG")).toEqual([
  //       ["A", "T"],
  //       ["T", "A"],
  //       ["A", "T"],
  //       ["G", "C"],
  //     ]);
  //   });
});
