/*
My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe.
All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—that's not good for business!

To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
Each customer order (from either register) as it was finished by the kitchen. (servedOrders)

Given all three arrays, write a function to check that my service is first-come, first-served.
All food should come out in the same order customers requested it.

We'll represent each customer order as a unique integer.

As an example,

Take Out Orders: [1, 3, 5]
Dine In Orders: [2, 4, 6]
Served Orders: [1, 2, 4, 6, 5, 3]
would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

But,

Take Out Orders: [17, 8, 24]
Dine In Orders: [12, 19, 2]
Served Orders: [17, 8, 12, 19, 24, 2]
would be first-come, first-served.

Note: Order numbers are arbitrary. They do not have to be in increasing order.
*/

const takeOut = [17, 8, 24]; // [3, 5]

const dineIn = [12, 19, 2]; // [ ]

const servedOrders = [17, 8, 12, 19, 24, 2];
//                                i

function checkOrders(takeOut, dineIn, served) {
  let takeOutIndex = 0;
  let dineInIndex = 0;

  for (let i = 0; i < served.length; i++) {
    let order = served[i];

    if (takeOutIndex < takeOut.length && order == takeOut[takeOutIndex]) {
      takeOutIndex++;
    } else if (dineInIndex < dineIn.length && order == dineIn[dineInIndex]) {
      dineInIndex++;
    } else {
      return false;
    }
  }

  return takeOutIndex === takeOut.length && dineInIndex === dineIn.length;
}

console.log(checkOrders(takeOut, dineIn, servedOrders));

// Time Complexity O(n) n is the length of servedOrders
// Space Complexity O(1) inline

function isFirstComeFirstServeRecursive(
  takeOutOrders,
  dineInOrders,
  servedOrders,
) {
  // base case
  if (servedOrders.length === 0) {
    return true;
  }

  if (takeOutOrders.length && takeOutOrders[0] === servedOrders[0]) {
    return isFirstComeFirstServe(
      takeOutOrders.slice(1),
      dineInOrders,
      servedOrders.slice(1),
    );
  } else if (dineInOrders.length && dineInOrders[0] === servedOrders[0]) {
    return isFirstComeFirstServe(
      takeOutOrders,
      dineInOrders.slice(1), // This is O(n) because we are creating a new array. Shallow copy
      servedOrders.slice(1),
    );
  } else {
    return false;
  }
}

// we can optimize this a bit further, although given the nature of the input this probably won't be very resource-intensive anyway...should we talk about optimizations
// This takes O(n^2) time and O(n^2) space
// We sine we are doing this recursive its "looping in the callstack" N^2  since on each "loop" we create a new array N^2 space

function isFirstComeFirstServed(
  takeOutOrders,
  dineInOrders,
  serverdOrders,
  takeOutOrdersIndex,
  dineInOrdersIndex,
  servedOrdersIndex,
) {
  servedOrdersIndex = servedOrdersIndex ?? 0;
  takeOutOrdersIndex = takeOutOrdersIndex ?? 0;
  dineInOrdersIndex = dineInOrdersIndex ?? 0;

  if (servedOrders === 0) {
    return true;
  }

  if (
    takeOutOrdersIndex < takeOutOrders.length &&
    takeOutOrders[takeOutOrdersIndex] === servedOrders[servedOrdersIndex]
  ) {
    takeOutOrdersIndex++;
  } else if (
    dineInOrdersIndex < dineInOrders.length &&
    dineInOrders[dineInOrdersIndex] === serverdOrders[servedOrdersIndex]
  ) {
    dineInOrdersIndex++;
  } else {
    return false;
  }

  isFirstComeFirstServed(
    takeOutOrders,
    dineInOrders,
    serverdOrders,
    takeOutOrdersIndex,
    dineInOrdersIndex,
    servedOrdersIndex,
  );
}

// Time O(n) space O(n) because of recursion
