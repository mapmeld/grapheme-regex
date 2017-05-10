const accents_and_vowels = "[:\u0300-\u036F" + // Combining Diacritical Marks
"\u0A01-\u0A03\u0A3C-\u0A4C\u0A51" + // Gurmukhi
"\u0A81-\u0A83\u0ABC\u0ABE-\u0ACC\u0AE2\u0AE3" + // Gujarati
"\u0B01-\u0B03\u0B3C\u0B3E-\u0B4C\u0B56\u0B57\u0B62\u0B63" + // Oriya
"\u0B82\u0BBE-\u0BCD\u0BD7" + // Tamil
"\u0C00-\u0C03\u0C3E-\u0C4C\u0C55\u0C56\u0C62\u0C63" + // Telugu
"\u0D82\u0D83\u0DCA-\u0DDF\u0DF2\u0DF3" + // Sinhala
"\u102B-\u1038\u103A-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D" + // Burmese
"\u1A55-\u1A5E\u1A61-\u1A7C" + // Tai Tham
"\u1DC0-\u1DFF" + // Combining Diacritical Marks Supplement
"\u20D0-\u20FF" + // Combining Diacritical Marks for Symbols
"\u17B4-\u17D1\u17D3" + // Khmer
"\u0C80-\u0C83\u0CBC\u0CBE-\u0CCC\u0CD5\u0CD6\u0CE2\u0CE3" + // Kannada
"\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD" + // Lao
"]";
const combo_characters = "[\u094D\u09CD\u1039\u17D2\u0A4D\u0ACD\u0C4D\u0CCD\u0B4D\u1A60\u1A7F\u0DCA]";
const graphemeRegex = new RegExp("^.(?:" + accents_and_vowels + "+)?" + "(" + combo_characters + "\\W(?:" + accents_and_vowels + "+)?)?");

module.exports = function(block) {
  return graphemeRegex.exec(block)[0];
};
