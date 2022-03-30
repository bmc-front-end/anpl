import { checkUrl } from "../src/client/js/validationChecker";

describe('Testing the "checkUrl" functionality', () => {
    const url_empty = "";
    const url_valid = "https://www.udacity.com/";
    const url_invalid = "httpz:/ww.udacity";


    test('Testing the function exists', () => {
        expect(checkUrl).toBeDefined();
    })

    test('Testing returns true when provided a valid url', () => {
        expect(checkUrl(url_valid)).toBeTruthy();
    })

    test('Testing returns false when provided a invalid url', () => {
        expect(checkUrl(url_invalid)).toBeFalsy();
    })

    test('Testing returns false when provided a empty url', () => {
        expect(checkUrl(url_empty)).toBeFalsy();
    })
});