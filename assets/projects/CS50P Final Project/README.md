# EUR to EGP Converter
#### Video Demo:  https://youtu.be/cTPR6FFIdks
#### Description:
Welcome to the EUR to EGP Live Exchange Rate Converter! This application serves as my final project for CS50's Introduction to Programming with Python (CS50P). The primary goal of this project is to provide a fast, reliable, and user-friendly command-line interface for converting Euros (EUR) to Egyptian Pounds (EGP) using real-time, up-to-date exchange rate data fetched directly from a public web API.

When designing this project, I wanted to build something practical that mimics the kind of data extraction and transformation tasks seen in real-world software engineering and data analysis. Rather than hardcoding a static exchange rate that would become outdated within a day, this application dynamically connects to the open.er-api.com endpoint, ensuring that the conversions are always based on the most current financial data available.

The application is built entirely in Python and leverages the popular requests library to handle HTTP communication over the network. The design philosophy centers around simplicity, modularity, and robust error handling. Since we are dealing with external network requests and human input, the program is deliberately structured to anticipate and elegantly handle potential failures—such as network timeouts, missing data, or the user typing alphabetical characters when a numeric value is required.

## Project Architecture and File Structure

The project is divided into two primary files to separate the core application logic from the testing suite, adhering to standard software engineering best practices.

### 1. project.py
This is the main executable script that houses the core functionality of the application. It is broken down into modular functions to ensure that each block of code has a single, well-defined responsibility:

- main(): This function serves as the central brain of the program. It orchestrates the flow of data by first prompting the user to input a numeric amount in Euros via the terminal. It utilizes a try-except block to ensure that if the user enters invalid data (like text instead of a number), the program catches the ValueError and exits gracefully with an informative error message rather than crashing abruptly. Once a valid number is captured, main() calls the fetching function, triggers the mathematical conversion, and finally passes the results to the formatter before printing the final output to the screen.
- get_rate(): This function is strictly responsible for data extraction. It sends a GET request to the ExchangeRate-API endpoint for the Euro base currency. After receiving the HTTP response, it parses the incoming JSON payload into a Python dictionary and drills down into the nested structure to extract the specific float value corresponding to the Egyptian Pound (EGP) exchange rate. If the network request fails, it intercepts the requests.RequestException and returns None, allowing main() to inform the user of the connection issue.
- convert(amount, rate): A purely mathematical function that takes the user's requested amount and multiplies it by the live exchange rate. It utilizes Python's built-in round() function to ensure the resulting calculation is strictly rounded to two decimal places, which is the standard convention for representing currency.
- format_output(amount, rate, converted): This function acts as the presentation layer. It takes the raw numerical data and injects it into a formatted f-string. It applies thousands separators (commas) and enforces a strict two-decimal display for all numeric values, ensuring the output reads clearly like a professional financial ticker (e.g., 1,000.50 EUR = 60,500.00 EGP).

### 2. test_project.py
To guarantee the reliability of the core logic, I implemented a comprehensive suite of unit tests using the pytest framework.

- test_convert(): This test suite feeds various inputs into the convert function, including standard integers, floating-point numbers, and edge cases like zero, to assert that the mathematical output is always perfectly accurate.
- test_format_output(): This test suite asserts that the string formatting function correctly injects the commas and decimal places exactly as expected, ensuring the user interface remains clean and consistent.

## Dependencies and Installation

To run this program, you will need to install the following external libraries:
- requests: Used for sending HTTP requests to the API.
- pytest: Used for running the automated unit tests.

You can install them via pip:
pip install requests pytest

## Execution

To use the converter, simply run the main file in your terminal:
python project.py

To verify the integrity of the application's logic, run the test suite:
python -m pytest test_project.py
