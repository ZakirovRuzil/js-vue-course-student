function isTicketHappy(ticketNumber) {
  var halfLength = ticketNumber.length / 2;

  var firstHalf = ticketNumber.substring(0, halfLength);
  var secondHalf = ticketNumber.substring(halfLength);

  var firstHalfSum = 0;
  var secondHalfSum = 0;

  for (var i = 0; i < halfLength; i++) {
    firstHalfSum += parseInt(firstHalf.charAt(i));
    secondHalfSum += parseInt(secondHalf.charAt(i));
  }

  return firstHalfSum === secondHalfSum;
}

console.log(isTicketHappy('386926')); // true
console.log(isTicketHappy('211003')); // false
console.log(isTicketHappy('1552'));   // false
console.log(isTicketHappy('044503')); // true
console.log(isTicketHappy('00'));     // true