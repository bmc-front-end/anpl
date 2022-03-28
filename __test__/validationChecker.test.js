import { checkUrl } from "../src/client/js/validationChecker";

describe('Testing the "checkUrl" functionality', () => {
    test('Testing the function exists', () => {
        expect(checkUrl).toBeDefined();
    })
});