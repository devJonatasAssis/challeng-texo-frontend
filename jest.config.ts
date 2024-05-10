/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  // preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/components/$1",
  },
};

export default createJestConfig(config);
