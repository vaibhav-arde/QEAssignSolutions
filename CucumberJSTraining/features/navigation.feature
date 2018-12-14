Feature: Login scenario for facebook

    Scenario: Test login feature
    Given Launch opencart url
    Then Verify title
    Given Click on Login link and Enter invalid values in username and password
    When Click on Login button
    Then Verify the error message
    Then Close the browser
