Feature: Example feature file

    Scenario: set timer name
    Given user has browsed to timer page
    When user sets "BDD Timer" as timer name
    Then name "BDD Timer" should be visible