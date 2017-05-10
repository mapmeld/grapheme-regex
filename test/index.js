const assert = require('chai').assert;
const blocker = require('../index.js');

describe('different Unicode sequences', () => {
  it('does Burmese', (done) => {
    var txt = '(မင်္ဂလာပါ)';
    var idealSegments = ['(', 'မ', 'င်္ဂ', 'လာ', 'ပါ', ')'];
    while (txt.length) {
      var firstBlock = blocker(txt);
      assert.equal(firstBlock, idealSegments[0]);
      txt = txt.substring(firstBlock.length);
      idealSegments.splice(0, 1);
    }
    done();
  });

  it('does Khmer', (done) => {
    var txt = "វិថី កោះពេជ្រ";
    var idealSegments = ["វិ", "ថី", " ", "កោះ", "ពេ", "ជ្រ"];
    while (txt.length) {
      var firstBlock = blocker(txt);
      assert.equal(firstBlock, idealSegments[0]);
      txt = txt.substring(firstBlock.length);
      idealSegments.splice(0, 1);
    }
    done();
  });

  it('does Sinhala', (done) => {
    var txt = 'ඉඹුල්ගස්දෙනිය - රඹුක්කන පාර';
    var idealSegments = ['ඉ', 'ඹු', 'ල්', 'ග', 'ස්', 'දෙ', 'නි', 'ය', ' ', '-', ' ', 'ර', 'ඹු', 'ක්', 'ක', 'න', ' ', 'පා', 'ර'];
    while (txt.length) {
      var firstBlock = blocker(txt);
      assert.equal(firstBlock, idealSegments[0]);
      txt = txt.substring(firstBlock.length);
      idealSegments.splice(0, 1);
    }
    done();
  });
});