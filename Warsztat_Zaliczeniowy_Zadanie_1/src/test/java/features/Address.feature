Feature: Addresses

  Scenario Outline: Add new address

    Given User logs in to https://mystore-testlab.coderslab.pl/
    And User goes to Addresses
    And User clicks Create new address
    When User fills address form with alias <alias>, address <address>, city <city>, postal code <postalCode>, country <country>, phone <phone>
    And User saves new address
    Then new address is added
    And User deletes new address <address>
    And New address is deleted
    And browser closed

    Examples:
    | alias | address | city | postalCode| country | phone |
    | star | trek | final frontier | 00-000| United Kingdom | 000000000 |
    | sher | locked | london | 00-111| United Kingdom | 111111111 |
    | doctor | who | tardis | 22-222| United Kingdom |123456789 |