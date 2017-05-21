const accents_and_vowels = "[:\u0300-\u036F" + // Combining Diacritical Marks
"\u0900-\u0903\u093A-\u094C\u094E\u094F\u0951-\u0957\u0962\u0963" + // Devanagari
"\u0981-\u0983\u09BC\u09BE-\u09CC\u09D7\u09E2\u09E3" + // Bengali
"\u0A01-\u0A03\u0A3C-\u0A4C\u0A51" + // Gurmukhi
"\u0A81-\u0A83\u0ABC\u0ABE-\u0ACC\u0AE2\u0AE3" + // Gujarati
"\u0B01-\u0B03\u0B3C\u0B3E-\u0B4C\u0B56\u0B57\u0B62\u0B63" + // Oriya
"\u0B82\u0BBE-\u0BCD\u0BD7" + // Tamil
"\u0C00-\u0C03\u0C3E-\u0C4C\u0C55\u0C56\u0C62\u0C63" + // Telugu
"\u0C81-\u0C83\u0CBC\u0CBE-\u0CCC\u0CD5\u0CD6\u0CE2\u0CE3" + // Kannada
"\u0D01-\u0D03\u0D3E-\u0D4C\u0D4E\u0D57\u0D62\u0D63" + // Malayalam
"\u0D82\u0D83\u0DCA-\u0DDF\u0DF2\u0DF3" + // Sinhala
"\u0E31\u0E34-\u0E3A\u0E47-\u0E4E" + // Thai
"\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD" + // Lao
"\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F83\u0F86\u0F87\u0F8D-\u0FBC\u0FC6" + // Tibetan
"\u102B-\u1038\u103A-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D" + // Burmese
"\u17B4-\u17D1\u17D3" + // Khmer
"\u1A55-\u1A5E\u1A61-\u1A7C" + // Tai Tham
"\u1DC0-\u1DFF" + // Combining Diacritical Marks Supplement
"\u20D0-\u20FF" + // Combining Diacritical Marks for Symbols
"]";
const combo_characters = "[\u094D\u09CD\u0A4D\u0ACD\u0B4D\u0C4D\u0CCD\u0D4D\u0F84\u1039\u17D2\u1A60\u1A7F]";
const graphemeRegex = new RegExp("^.(?:" + accents_and_vowels + "+)?" + "(" + combo_characters + "\\W(?:" + accents_and_vowels + "+)?)*");

module.exports = function(block) {
  return graphemeRegex.exec(block)[0];
};
