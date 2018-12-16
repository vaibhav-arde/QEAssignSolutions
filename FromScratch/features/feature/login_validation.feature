Feature: Login validation
    Login to opencart and validate the error msg

    Scenario: Validate error message for incorrect login
    Given I open url of opencart
    When I click on Login
    When I enter username and password and clink to Login
    Then Error msg to be displayed

