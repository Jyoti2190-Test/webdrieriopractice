Feature: To test the purchasing categories in Taxonomy

    Background:
        Given user is on homepage

    Scenario: User should be able to see create New category Window
        When Create Category is available
        Then Click on Create Category
        Then New Category Tab should be available

    Scenario Outline: User should be able to create New Category
        Then Click on Create Category
        Then Enter the "<categoryname>" , "<parentcategory>"
        Then Input the details for search name "<categoryname>" and click Search
        Examples:
            | categoryname | parentcategory |
            | abc12       | a24            |







