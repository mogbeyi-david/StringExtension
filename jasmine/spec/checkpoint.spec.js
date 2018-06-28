describe('Checkpoint Testing', function () {
  it('tests if a string has a vowel', function () {
    var testValue = 'Hello';
    expect(testValue.hasVowels()).toBeTruthy();
  });

  it('converts a given string in all lower case to upper case', function () {
    var testValue = 'hello';
    expect(testValue.toUpper()).toBe('HELLO');
  });

  it('converts a given string in all upper case to lower case', function () {
    var testValue = 'HELLO';
    expect(testValue.toLower()).toBe('hello');
  });

  it('capitalizes the first letter of a given word', function () {
    var testValue = 'hello';
    expect(testValue.ucFirst()).toBe('Hello');
  });

  it('checks if the given string is a question', function () {
    var testValue = '?';
    expect(testValue.isQuestion()).toBeTruthy();
  });

  it('returns the list of words in the string', function () {
    var testValue = 'This is a sentence';
    expect(testValue.in()).toEqual(['This', 'is', 'a', 'sentence']);
  });

  it('returns the number of words in a string', function () {
    var testValue = 'This is another sentence';
    expect(testValue.wordCount()).toBe(4);
  });

  it('checks if a given letter is a capital letter', function () {
    var testValue = 'A';
    expect(testValue.isCapitalLetter()).toBeTruthy();
  });

  it('checks if a given letter is a small letter', function () {
    var testValue = 'a';
    expect(testValue.isSmallLetter()).toBeTruthy();
  });

  it('returns the inverse case of the given string', function () {
    var testValue = 'aBaBaB'
    expect(testValue.inverseCase()).toBe('AbAbAb');
  });

  it('returns the string with alternating character cases', function () {
    var testValue = 'abcdef';
    expect(testValue.alternatingCase()).toBe('aBcDeF');
  });

  it('returns the character in the middle of the given string of add number length', function () {
    var testValue = 'inthemiddle';
    expect(testValue.getMiddle()).toBe('m');
  });

  it('returns the characters in the middle of the give string', function () {
    var testValue = 'Davidson';
    expect(testValue.getMiddle()).toBe('id');
  });

  it('returns the numbers in the strings in word form', function () {
    var testValue = '345';
    expect(testValue.numberWords()).toEqual('three four five');
  });

  it('checks if an input is a single digit', function () {
    var testValue = '3';
    expect(testValue.isDigit()).toBeTruthy();
  });
});