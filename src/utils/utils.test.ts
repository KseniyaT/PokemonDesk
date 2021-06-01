import toCapitalizeFirstLetter from './utils';

describe('utils', () => {
  describe('toCapitalizeFirstLetter', () => {
    test('should return empty string when param is empty string', () => {
      expect(toCapitalizeFirstLetter('')).toEqual('');
    });
    test('should transform line "hello World ! ," to "Hello world ! ,"', () => {
      expect(toCapitalizeFirstLetter('hello World ! ,')).toEqual('Hello world ! ,');
    });
    test('should transform line "heLlo WoRld!" to "Hello world!"', () => {
      expect(toCapitalizeFirstLetter('hello World!')).toEqual('Hello world!');
    });
  });
});
