
import { capitalize } from "./funC";

test("string is capitalized", () => {
    //expect(capitalize('xedfgv')).toBe("Xedfgv");//error
    expect(capitalize('xedfgv')).toBe("XEDFGV");
});
