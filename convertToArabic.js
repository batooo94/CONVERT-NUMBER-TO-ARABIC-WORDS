
var ONE_THOUSAND = Math.pow(10, 3);
var ONE_MILLION = Math.pow(10, 6);
var ONE_BILLION = Math.pow(10, 9);
var ONE_TRILLION = Math.pow(10, 12);
var ONE_QUADRILLION = Math.pow(10, 15);
var ONE_QUINTILLION = Math.pow(10, 18);

function integerToWord(integer) {
  var prefix = '';
  var suffix = '';

  if (!integer){ return "صفر "; }
  
  if(integer < 0){
    prefix = "سالب ";
    suffix = integerToWord(-1 * integer);
    return prefix + " " + suffix;
  }
  if(integer <= 90){
    switch (integer) {
      case integer < 0:
        prefix = "سالب";
        suffix = integerToWord(-1 * integer);
        return prefix + " "  + suffix;
      case 1: return "واحد";
      case 2: return "اثنان";
      case 3: return "ثلاثة";
      case 4:  return "أربعة";
      case 5: return "خمسة";
      case 6: return "ستة";
      case 7: return "سبعة";
      case 8: return "ثمانية";
      case 9: return "تسعة";
      case 10: return "عشرة";
      case 11: return "أحدعشر";
      case 12: return "اثناعشر";
      case 13: return "ثلاثةعشر";
      case 14: return "أربعة عشر";
      case 15: return "خمسة عشر";
      case 16: return "ستة عشر";
      case 17: return "سبعة عشر";
      case 18: return "ثمانية عشر";
      case 19: return "تسعة عشر";
      case 20: return "عشرون";
case 21: return "واحد وعشرون";
case 22: return "اثنان وعشرون";
case 23: return "ثلاثة وعشرون";
case 24: return "أربعة وعشرون";
case 25: return "خمسة وعشرون";
case 26: return "ستة وعشرون";
case 27: return "سبعة وعشرون";
case 28: return "ثمانية وشعرون";
case 29: return "تسعة وعشرون";

      case 30: return "ثلاثون";
case 31: return "واحد وثلاثون";
case 32: return "اثنان وثلاثون";
case 33: return "ثلاثة وثلاثون";
case 34: return "أربعة وثلاثون";
case 35: return "خمسة وثلاثون";
case 36: return "ستة وثلاثون";
case 37: return "سبعة وثلاثون";
case 38: return "ثمانية وثلاثون";
case 39: return "تسعة وثلاثون";

      case 40: return "أربعون";
 case 41: return "واحد وأربعون";
 case 42: return "اثنان وأربعون";
 case 43: return "ثلاثة وأربعون";
 case 44: return "أربعة وأبعون";
 case 45: return "خمسة وأربعون";
 case 46: return "ستة وأربعون";
 case 47: return "سبعة وأربعون";
 case 48: return "ثمانية وأربعون";
 case 49: return "تسعة وأربعون";

      case 50: return "خمسون";
 case 51: return "واحد وخمسون";
 case 52: return "اثنان وخمسون";
 case 53: return "ثلاثة وخمسون";
 case 54: return "أربعة وخمسون";
 case 55: return "خمسة وخمسون";
 case 56: return "ستة وخمسون";
 case 57: return "سبعة وخمسون";
 case 58: return "ثمانية وخمسون";
 case 59: return "تسعة وخمسون";

      case 60: return "ستون";
case 61: return "واحد  وستون";
case 62: return "اثنان وستون";
case 63: return "ثلاثة وستون";
case 64: return "أربعة وستون";
case 65: return "خمسة وستون";
case 66: return "ستة وستون";
case 67: return "سبع وستون";
case 68: return "ثمانية وستون";
case 69: return "تسعة وستون";

      case 70: return "سبعون";
case 71: return "واحد وسبعون";
case 72: return "اثنان وسبعون";
case 73: return "ثلاثة وسبعون";
case 74: return "اربعة وسبعون";
case 75: return "خمسة وسبعون";
case 76: return "ستة وسبعون";
case 77: return "سبعة وسبعون";
case 78: return "ثمانية وسبعون";
case 79: return "تسعة وسبعون";

      case 80: return "ثمانون";
  case 81: return "واحد وثمانون";
  case 82: return "اثنان وثمانون";
  case 83: return "ثلاثة وثمانون";
  case 84: return "أربعة وثمانون";
  case 85: return "خمسة وثمانون";
  case 86: return "ستة وثمانون";
  case 87: return "سبعة وثمانون";
  case 88: return "ثمانية وثمانون";
  case 89: return "تسعة وثمانون";

      case 90: return "تسعون";
case 91: return "واحد وتسعون";
case 92: return "اثنان وتسعون";
case 93: return "ثلاثة وتسعون";
case 94: return "أربعة وتسعون";
case 95: return "خمسة وتسعون";
case 96: return "ستة وتسعون";
case 97: return "سبعة وتسعون";
case 98: return "ثمانية وتسعون";
case 99: return "تسعة وتسعون";
      default: break;
    }
  }

  if(integer < 100){
    prefix = integerToWord(integer - integer % 10);
    suffix = integerToWord(integer % 10);
    return prefix + "-"  + suffix;
  }

  if(integer < ONE_THOUSAND){
    prefix = integerToWord(parseInt(Math.floor(integer / 100), 10) )  + " مائة";
    if (integer % 100){ suffix = " و"  + integerToWord(integer % 100); }
    return prefix + suffix;
  }

  if(integer < ONE_MILLION){
    prefix = integerToWord(parseInt(Math.floor(integer / ONE_THOUSAND), 10))  + " ألف";
    if (integer % ONE_THOUSAND){ suffix = integerToWord(integer % ONE_THOUSAND); }
  }
  else if(integer < ONE_BILLION){
    prefix = integerToWord(parseInt(Math.floor(integer / ONE_MILLION), 10))  + " مليون";
    if (integer % ONE_MILLION){ suffix = integerToWord(integer % ONE_MILLION); }
  }
  else if(integer < ONE_TRILLION){
    prefix = integerToWord(parseInt(Math.floor(integer / ONE_BILLION), 10))  + " بليون";
    if (integer % ONE_BILLION){ suffix = integerToWord(integer % ONE_BILLION); }
  }
  else if(integer < ONE_QUADRILLION){
    prefix = integerToWord(parseInt(Math.floor(integer / ONE_TRILLION), 10))  + " ترليون";
    if (integer % ONE_TRILLION){ suffix = integerToWord(integer % ONE_TRILLION); }
  }
  else if(integer < ONE_QUINTILLION){
    prefix = integerToWord(parseInt(Math.floor(integer / ONE_QUADRILLION), 10))  + " كوادريليون";
    if (integer % ONE_QUADRILLION){ suffix = integerToWord(integer % ONE_QUADRILLION); }
  } else {
    return '';
  }
  return prefix + " "  + suffix;
}

function moneyToWord(value){
  var decimalValue = (value % 1);
  var integer = value - decimalValue;
  decimalValue = Math.round(decimalValue * 100);
  var decimalText = !decimalValue? '': integerToWord(decimalValue) + ' ' + (decimalValue === 1? '': 'هللة');
  var integerText= !integer? '': integerToWord(integer) + ' ريال سعودي' + (integer === 1? '': '');
  return (
    integer && !decimalValue? integerText:
    integer && decimalValue? integerText + ' و ' + decimalText:
    !integer && decimalValue? decimalText:
    'صفر '
  );
}

function floatToWord(value){
  var decimalValue = (value % 1);
  var integer = value - decimalValue;
  decimalValue = Math.round(decimalValue * 100);
  var decimalText = !decimalValue? '':
    decimalValue < 10? "و' " + integerToWord(decimalValue):
    decimalValue % 10 === 0? 'و ' + integerToWord(decimalValue / 10):
    'و ' + integerToWord(decimalValue);
  return (
    integer && !decimalValue? integerToWord(integer):
    integer && decimalValue? [integerToWord(integer),  decimalText].join(' '):
    !integer && decimalValue? decimalText:
    integerToWord(0)
  );
}