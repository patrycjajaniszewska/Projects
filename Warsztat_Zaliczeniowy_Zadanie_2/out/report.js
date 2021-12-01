$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Order.feature");
formatter.feature({
  "line": 1,
  "name": "Order",
  "description": "",
  "id": "order",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Add new Order",
  "description": "",
  "id": "order;add-new-order",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User logs in to https://mystore-testlab.coderslab.pl/",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User chooses item \u003citem\u003e and checks discount, chooses size \u003csize\u003e, chooses quantity \u003cquantity\u003e, and adds to cart",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirms address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User chooses PrestaShop as shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User chooses Pay by check as payment method",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks order with an obligation to pay",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User makes screen shot of order confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Order is made",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User goes to Order History and details",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User checks if his order has status Awaiting check payment",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "browser closed",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "order;add-new-order;",
  "rows": [
    {
      "cells": [
        "item",
        "size",
        "quantity"
      ],
      "line": 19,
      "id": "order;add-new-order;;1"
    },
    {
      "cells": [
        "Hummingbird Printed Sweater",
        "M",
        "5"
      ],
      "line": 20,
      "id": "order;add-new-order;;2"
    },
    {
      "cells": [
        "Hummingbird Printed Sweater",
        "S",
        "4"
      ],
      "line": 21,
      "id": "order;add-new-order;;3"
    },
    {
      "cells": [
        "Hummingbird Printed Sweater",
        "L",
        "3"
      ],
      "line": 22,
      "id": "order;add-new-order;;4"
    },
    {
      "cells": [
        "Hummingbird Printed Sweater",
        "XL",
        "4"
      ],
      "line": 23,
      "id": "order;add-new-order;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Add new Order",
  "description": "",
  "id": "order;add-new-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User logs in to https://mystore-testlab.coderslab.pl/",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User chooses item Hummingbird Printed Sweater and checks discount, chooses size M, chooses quantity 5, and adds to cart",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirms address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User chooses PrestaShop as shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User chooses Pay by check as payment method",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks order with an obligation to pay",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User makes screen shot of order confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Order is made",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User goes to Order History and details",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User checks if his order has status Awaiting check payment",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "browser closed",
  "keyword": "And "
});
formatter.match({
  "location": "OrderSteps.logIn()"
});
formatter.result({
  "duration": 6814964400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hummingbird Printed Sweater",
      "offset": 18
    },
    {
      "val": "M",
      "offset": 80
    },
    {
      "val": "5",
      "offset": 100
    }
  ],
  "location": "OrderSteps.addingNewOrder(String,String,String)"
});
formatter.result({
  "duration": 1794667000,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.proceedToCheckout()"
});
formatter.result({
  "duration": 663610300,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.address()"
});
formatter.result({
  "duration": 30846238500,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.shippingMethod()"
});
formatter.result({
  "duration": 1199614500,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.paymentMethod()"
});
formatter.result({
  "duration": 99904000,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.payObligation()"
});
formatter.result({
  "duration": 777819800,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.screenshot()"
});
formatter.result({
  "duration": 267446900,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.orderIsMade()"
});
formatter.result({
  "duration": 77800,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.historyAndDetails()"
});
formatter.result({
  "duration": 345485200,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.orderStatus()"
});
formatter.result({
  "duration": 253300,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.closeBrowser()"
});
formatter.result({
  "duration": 806294800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Add new Order",
  "description": "",
  "id": "order;add-new-order;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User logs in to https://mystore-testlab.coderslab.pl/",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User chooses item Hummingbird Printed Sweater and checks discount, chooses size S, chooses quantity 4, and adds to cart",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirms address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User chooses PrestaShop as shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User chooses Pay by check as payment method",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks order with an obligation to pay",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User makes screen shot of order confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Order is made",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User goes to Order History and details",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User checks if his order has status Awaiting check payment",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "browser closed",
  "keyword": "And "
});
formatter.match({
  "location": "OrderSteps.logIn()"
});
formatter.result({
  "duration": 4416119300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hummingbird Printed Sweater",
      "offset": 18
    },
    {
      "val": "S",
      "offset": 80
    },
    {
      "val": "4",
      "offset": 100
    }
  ],
  "location": "OrderSteps.addingNewOrder(String,String,String)"
});
formatter.result({
  "duration": 1759465900,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.proceedToCheckout()"
});
formatter.result({
  "duration": 704437400,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.address()"
});
formatter.result({
  "duration": 31137703800,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.shippingMethod()"
});
formatter.result({
  "duration": 1958188800,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.paymentMethod()"
});
formatter.result({
  "duration": 100022800,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.payObligation()"
});
formatter.result({
  "duration": 753914500,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.screenshot()"
});
formatter.result({
  "duration": 223551000,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.orderIsMade()"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.historyAndDetails()"
});
formatter.result({
  "duration": 343108400,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.orderStatus()"
});
formatter.result({
  "duration": 49900,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.closeBrowser()"
});
formatter.result({
  "duration": 783983800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Add new Order",
  "description": "",
  "id": "order;add-new-order;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User logs in to https://mystore-testlab.coderslab.pl/",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User chooses item Hummingbird Printed Sweater and checks discount, chooses size L, chooses quantity 3, and adds to cart",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirms address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User chooses PrestaShop as shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User chooses Pay by check as payment method",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks order with an obligation to pay",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User makes screen shot of order confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Order is made",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User goes to Order History and details",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User checks if his order has status Awaiting check payment",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "browser closed",
  "keyword": "And "
});
formatter.match({
  "location": "OrderSteps.logIn()"
});
formatter.result({
  "duration": 4367393400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hummingbird Printed Sweater",
      "offset": 18
    },
    {
      "val": "L",
      "offset": 80
    },
    {
      "val": "3",
      "offset": 100
    }
  ],
  "location": "OrderSteps.addingNewOrder(String,String,String)"
});
formatter.result({
  "duration": 1632914200,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.proceedToCheckout()"
});
formatter.result({
  "duration": 658587200,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.address()"
});
formatter.result({
  "duration": 20784518200,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.shippingMethod()"
});
formatter.result({
  "duration": 1102740500,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.paymentMethod()"
});
formatter.result({
  "duration": 97068600,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.payObligation()"
});
formatter.result({
  "duration": 773359600,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.screenshot()"
});
formatter.result({
  "duration": 209169900,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.orderIsMade()"
});
formatter.result({
  "duration": 33000,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.historyAndDetails()"
});
formatter.result({
  "duration": 355297400,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.orderStatus()"
});
formatter.result({
  "duration": 54100,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.closeBrowser()"
});
formatter.result({
  "duration": 785935200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Add new Order",
  "description": "",
  "id": "order;add-new-order;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User logs in to https://mystore-testlab.coderslab.pl/",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User chooses item Hummingbird Printed Sweater and checks discount, chooses size XL, chooses quantity 4, and adds to cart",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirms address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User chooses PrestaShop as shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User chooses Pay by check as payment method",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks order with an obligation to pay",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User makes screen shot of order confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Order is made",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User goes to Order History and details",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User checks if his order has status Awaiting check payment",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "browser closed",
  "keyword": "And "
});
formatter.match({
  "location": "OrderSteps.logIn()"
});
formatter.result({
  "duration": 4020955300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "OrderSteps.proceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSteps.address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSteps.shippingMethod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSteps.paymentMethod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSteps.payObligation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSteps.screenshot()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSteps.orderIsMade()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSteps.historyAndDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSteps.orderStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSteps.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
});