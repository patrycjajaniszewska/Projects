$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Address.feature");
formatter.feature({
  "line": 1,
  "name": "Addresses",
  "description": "",
  "id": "addresses",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Add new address",
  "description": "",
  "id": "addresses;add-new-address",
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
  "name": "User goes to Addresses",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks Create new address",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User fills address form with alias \u003calias\u003e, address \u003caddress\u003e, city \u003ccity\u003e, postal code \u003cpostalCode\u003e, country \u003ccountry\u003e, phone \u003cphone\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User saves new address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "new address is added",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User deletes new address \u003caddress\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "New address is deleted",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "browser closed",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "addresses;add-new-address;",
  "rows": [
    {
      "cells": [
        "alias",
        "address",
        "city",
        "postalCode",
        "country",
        "phone"
      ],
      "line": 16,
      "id": "addresses;add-new-address;;1"
    },
    {
      "cells": [
        "star",
        "trek",
        "final frontier",
        "00-000",
        "United Kingdom",
        "000000000"
      ],
      "line": 17,
      "id": "addresses;add-new-address;;2"
    },
    {
      "cells": [
        "sher",
        "locked",
        "london",
        "00-111",
        "United Kingdom",
        "111111111"
      ],
      "line": 18,
      "id": "addresses;add-new-address;;3"
    },
    {
      "cells": [
        "doctor",
        "who",
        "tardis",
        "22-222",
        "United Kingdom",
        "123456789"
      ],
      "line": 19,
      "id": "addresses;add-new-address;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Add new address",
  "description": "",
  "id": "addresses;add-new-address;;2",
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
  "name": "User goes to Addresses",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks Create new address",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User fills address form with alias star, address trek, city final frontier, postal code 00-000, country United Kingdom, phone 000000000",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User saves new address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "new address is added",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User deletes new address trek",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "New address is deleted",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "browser closed",
  "keyword": "And "
});
formatter.match({
  "location": "NewAddressPageSteps.logIn()"
});
formatter.result({
  "duration": 7098454900,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.clickAddressesPage()"
});
formatter.result({
  "duration": 407188700,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.createNewAddress()"
});
formatter.result({
  "duration": 291530300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "star",
      "offset": 35
    },
    {
      "val": "trek",
      "offset": 49
    },
    {
      "val": "final frontier",
      "offset": 60
    },
    {
      "val": "00-000",
      "offset": 88
    },
    {
      "val": "United Kingdom",
      "offset": 104
    },
    {
      "val": "000000000",
      "offset": 126
    }
  ],
  "location": "NewAddressPageSteps.fillAddressForm(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1318971600,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.saveNewAddress()"
});
formatter.result({
  "duration": 365207900,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.addressAdded()"
});
formatter.result({
  "duration": 8508700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trek",
      "offset": 25
    }
  ],
  "location": "NewAddressPageSteps.deleteNewAddress(String)"
});
formatter.result({
  "duration": 427889400,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.addressIsDeleted()"
});
formatter.result({
  "duration": 59900,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.closeBrowser()"
});
formatter.result({
  "duration": 826780800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Add new address",
  "description": "",
  "id": "addresses;add-new-address;;3",
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
  "name": "User goes to Addresses",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks Create new address",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User fills address form with alias sher, address locked, city london, postal code 00-111, country United Kingdom, phone 111111111",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User saves new address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "new address is added",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User deletes new address locked",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "New address is deleted",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "browser closed",
  "keyword": "And "
});
formatter.match({
  "location": "NewAddressPageSteps.logIn()"
});
formatter.result({
  "duration": 3914814400,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.clickAddressesPage()"
});
formatter.result({
  "duration": 334149900,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.createNewAddress()"
});
formatter.result({
  "duration": 310803800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sher",
      "offset": 35
    },
    {
      "val": "locked",
      "offset": 49
    },
    {
      "val": "london",
      "offset": 62
    },
    {
      "val": "00-111",
      "offset": 82
    },
    {
      "val": "United Kingdom",
      "offset": 98
    },
    {
      "val": "111111111",
      "offset": 120
    }
  ],
  "location": "NewAddressPageSteps.fillAddressForm(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1180226500,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.saveNewAddress()"
});
formatter.result({
  "duration": 367559800,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.addressAdded()"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locked",
      "offset": 25
    }
  ],
  "location": "NewAddressPageSteps.deleteNewAddress(String)"
});
formatter.result({
  "duration": 431042200,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.addressIsDeleted()"
});
formatter.result({
  "duration": 36300,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.closeBrowser()"
});
formatter.result({
  "duration": 772954400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Add new address",
  "description": "",
  "id": "addresses;add-new-address;;4",
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
  "name": "User goes to Addresses",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks Create new address",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User fills address form with alias doctor, address who, city tardis, postal code 22-222, country United Kingdom, phone 123456789",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User saves new address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "new address is added",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User deletes new address who",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "New address is deleted",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "browser closed",
  "keyword": "And "
});
formatter.match({
  "location": "NewAddressPageSteps.logIn()"
});
formatter.result({
  "duration": 3803884700,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.clickAddressesPage()"
});
formatter.result({
  "duration": 327527400,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.createNewAddress()"
});
formatter.result({
  "duration": 309475200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doctor",
      "offset": 35
    },
    {
      "val": "who",
      "offset": 51
    },
    {
      "val": "tardis",
      "offset": 61
    },
    {
      "val": "22-222",
      "offset": 81
    },
    {
      "val": "United Kingdom",
      "offset": 97
    },
    {
      "val": "123456789",
      "offset": 119
    }
  ],
  "location": "NewAddressPageSteps.fillAddressForm(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1186799300,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.saveNewAddress()"
});
formatter.result({
  "duration": 355190000,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.addressAdded()"
});
formatter.result({
  "duration": 39100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "who",
      "offset": 25
    }
  ],
  "location": "NewAddressPageSteps.deleteNewAddress(String)"
});
formatter.result({
  "duration": 443452300,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.addressIsDeleted()"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressPageSteps.closeBrowser()"
});
formatter.result({
  "duration": 821378400,
  "status": "passed"
});
});