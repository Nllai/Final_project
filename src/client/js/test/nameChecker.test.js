import { checkForName } from "../nameChecker";

test('Name Checker', () => {
    expect(checkForName("Picard")).toBe("Welcome, Captain!");
  });