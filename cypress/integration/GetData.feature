Feature: Validating Information About Cars

    I want to find registration plates embedded in a text file

    Scenario: Extracting registration plates from Input Data
        Given The file contains Registration Plates
        When I search through the Data
        Then The registration plates should be returned