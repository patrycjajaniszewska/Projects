Feature: Order

  Scenario Outline: Add new Order

    Given User logs in to https://mystore-testlab.coderslab.pl/
    When User chooses item <item> and checks discount, chooses size <size>, chooses quantity <quantity>, and adds to cart
    And User proceed to checkout
    And User confirms address
    And User chooses PrestaShop as shipping method
    And User chooses Pay by check as payment method
    And User clicks order with an obligation to pay
    And User makes screen shot of order confirmation
    Then Order is made
    And User goes to Order History and details
    And User checks if his order has status Awaiting check payment
    And browser closed

    Examples:
      |item|size|quantity|
      |Hummingbird Printed Sweater|M|5|
      |Hummingbird Printed Sweater|S|4|
      |Hummingbird Printed Sweater|L|3|
      |Hummingbird Printed Sweater|XL|4|



