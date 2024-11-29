export const units = [
    {
        title: "Unit I: Setting Up and Basic Programming in Python",
        youtube: "https://youtu.be/AkffMtK5oHs?feature=shared",
        quizlink: "",
        lessons: [
            { name: "Installing Python and Running 'Hello World'", lessonkey: "python_install_hello" },
            { name: "Understanding Variables and Expressions", lessonkey: "variables_expressions" },
            { name: "Naming Rules and Avoiding Name Errors", lessonkey: "naming_rules" },
            { name: "Types, Keywords, and Statements", lessonkey: "types_keywords_statements" },
            { name: "Operators and Order of Operations", lessonkey: "operators_order" },
            { name: "String Operations and Composition", lessonkey: "string_operations" },
            { name: "Using Comments in Python", lessonkey: "comments_python" }
        ]
    },
    {
        title: "Unit II: Control Flow and Iteration",
        youtube: "https://youtu.be/z5nBbx1fwGc?feature=shared",
        quizlink: "",
        lessons: [
            { name: "Conditional Statements and Modulus Operator", lessonkey: "conditionals_modulus" },
            { name: "Using Random Numbers in Programs", lessonkey: "random_numbers" },
            { name: "Boolean Expressions and Logic Operators", lessonkey: "boolean_logic" },
            { name: "Conditional and Nested Conditionals", lessonkey: "nested_conditionals" },
            { name: "Looping with 'while' and 'for'", lessonkey: "loops" },
            { name: "Nested Loops and Encapsulation", lessonkey: "nested_loops" }
        ]
    },
    {
        title: "Unit III: Functions and Recursion",
        youtube: "https://youtu.be/kTjTqjM5u_0?feature=shared",
        quizlink: "",
        lessons: [
            { name: "Defining and Calling Functions", lessonkey: "function_calls" },
            { name: "Type Conversion and Coercion", lessonkey: "type_conversion" },
            { name: "Using Math Functions", lessonkey: "math_functions" },
            { name: "Creating Functions with Parameters", lessonkey: "function_parameters" },
            { name: "Understanding and Using Recursion", lessonkey: "recursion" }
        ]
    },
    {
        title: "Unit IV: Working with Strings, Lists, and Dictionaries",
        youtube: "https://youtu.be/x3BUKq54e-M?feature=shared",
        quizlink: "",
        lessons: [
            { name: "String Basics and Traversal", lessonkey: "string_basics" },
            { name: "Slicing, Comparing, and Finding in Strings", lessonkey: "string_slicing" },
            { name: "Lists: Accessing and Manipulating Elements", lessonkey: "list_basics" },
            { name: "Looping through and Modifying Lists", lessonkey: "list_loops" },
            { name: "Understanding Tuples and Dictionaries", lessonkey: "tuples_dictionaries" }
        ]
    },
    {
        title: "Unit V: Object-Oriented Programming Concepts",
        youtube: "https://youtu.be/HQnoYzxOHMw?feature=shared",
        quizlink: "",
        lessons: [
            { name: "Creating Classes and Instances", lessonkey: "classes_instances" },
            { name: "Class Inheritance and Method Overriding", lessonkey: "inheritance" },
            { name: "Data Hiding and Function Overloading", lessonkey: "data_hiding_overloading" }
        ]
    },
    {
        title: "Unit VI: File Handling and Regular Expressions",
        youtube: "https://youtu.be/9oLkWF_tOtk?feature=shared",
        quizlink: "",
        lessons: [
            { name: "Reading and Writing Files", lessonkey: "file_io" },
            { name: "Handling Exceptions and Error Types", lessonkey: "exceptions" },
            { name: "Using Regular Expressions", lessonkey: "regex_basics" },
            { name: "Web Scraping with Regular Expressions", lessonkey: "web_scraping_regex" }
        ]
    }
];

export const lessonData = {
    'python_install_hello': {
        title: "Installing Python and Running 'Hello World'",
        description: "Learn how to set up Python on your computer and run your first 'Hello World' program.",
        sections: [
            {
                title: "Installing Python",
                content: "Python can be installed from the official website at https://python.org. Download the latest version compatible with your system and follow the installation instructions. Ensure to check the option to add Python to your PATH during installation.",
            },
            {
                title: "Running Python and Writing Your First Program",
                content: "Once Python is installed, you can run it by typing `python` or `python3` in the terminal. To write a program, open a text editor, enter the following code, and save it with a `.py` extension.",
                code: `print("Hello, World!")`
            },
            {
                title: "Executing Python Programs",
                content: "To execute a Python file, navigate to the file location in the terminal and type `python filename.py`. This will display any output from the program in the terminal.",
            }
        ],
        pitfalls: [
            "Ensure Python is added to your system path during installation, or you may not be able to run Python commands.",
            "Check for typos in the print statement; 'print' is case-sensitive."
        ],
        summary: "Installing Python and writing your first program is the first step to ensure your environment is ready.",
        practiceQuestions: [
            {
                question: "Download and install Python, then open a terminal and check the installed version.",
                hint: "Type `python --version` or `python3 --version` in your terminal."
            },
            {
                question: "Write a Python program that prints your name.",
                hint: "Use the `print()` function with your name as a string."
            }
        ]
    },
    'variables_expressions': {
        title: "Understanding Variables and Expressions",
        description: "Learn about using variables to store values and create expressions in Python.",
        sections: [
            {
                title: "Defining Variables",
                content: "A variable is a named location that holds a value. In Python, variables are created by assigning a value to a name using the `=` symbol.",
                code: `name = "Alice"
    age = 25`
            },
            {
                title: "Expressions and Arithmetic",
                content: "An expression is a combination of values, variables, and operators. Python supports basic arithmetic operations such as addition (+), subtraction (-), multiplication (*), and division (/).",
                code: `result = 3 + 5 * 2`
            },
            {
                title: "Using Variables in Expressions",
                content: "You can use variables within expressions. For example, if `x` and `y` are variables, you can create an expression like `x + y` to add their values.",
                code: `x = 10
    y = 5
    total = x + y`
            }
        ],
        pitfalls: [
            "Variable names cannot start with numbers or contain spaces.",
            "Avoid using Python keywords as variable names; it will cause syntax errors."
        ],
        summary: "Variables store information, while expressions evaluate values, forming the basics of Python programming.",
        practiceQuestions: [
            {
                question: "Create two variables, `x` and `y`, assign them values, and print their sum.",
                hint: "Use `print(x + y)` to output the sum."
            },
            {
                question: "Write a program that calculates the area of a rectangle given its length and width.",
                hint: "Define variables for length and width, then multiply them."
            }
        ]
    },
    'naming_rules': {
        title: "Naming Rules and Avoiding Name Errors",
        description: "Learn Python's rules for naming variables and how to avoid errors when using them.",
        sections: [
            {
                title: "Variable Naming Rules",
                content: "In Python, variable names can only contain letters, numbers, and underscores, and they cannot start with a number. Avoid using Python keywords as variable names.",
                code: `my_var = 10  # Valid
    1st_var = 5   # Invalid`
            },
            {
                title: "Avoiding Name Errors",
                content: "Name errors occur when you try to use a variable that hasn't been defined. Always check your variable names for typos and ensure they're defined before use.",
                code: `print(my_var)  # Make sure 'my_var' is defined`
            }
        ],
        pitfalls: [
            "Check your spelling carefully; Python is case-sensitive.",
            "Avoid reusing names of built-in functions, like `print`."
        ],
        summary: "Following naming rules prevents errors and keeps your code readable.",
        practiceQuestions: [
            {
                question: "Create a variable called `age`, assign it a value, and print it.",
                hint: "Make sure you define the variable `age` before using it in `print()`."
            },
            {
                question: "Try using a reserved word like `class` as a variable name and observe the error.",
                hint: "Python will show a syntax error when you use reserved words as variable names."
            }
        ]
    },
    'types_keywords_statements': {
        title: "Types, Keywords, and Statements",
        description: "Learn about the different data types, keywords, and types of statements in Python.",
        sections: [
            {
                title: "Data Types in Python",
                content: "Python has various data types like integers, floats, strings, and booleans. Each data type serves a specific purpose.",
                code: `age = 25             # Integer
    height = 5.9         # Float
    name = "Alice"       # String
    is_student = True    # Boolean`
            },
            {
                title: "Python Keywords",
                content: "Keywords are reserved words with special meanings, like `if`, `else`, `while`, `for`. They cannot be used as variable names.",
                code: `if = 10  # Invalid`
            },
            {
                title: "Python Statements",
                content: "A statement is an instruction that Python can execute, such as an assignment or a print statement.",
                code: `x = 10
    print(x)`
            }
        ],
        pitfalls: [
            "Trying to assign values to keywords will cause syntax errors.",
            "Mixing data types incorrectly, like adding a string and integer, will cause errors."
        ],
        summary: "Understanding types, keywords, and statements forms a foundation for building more complex programs.",
        practiceQuestions: [
            {
                question: "Define a variable of each data type (int, float, str, bool) and print their values.",
                hint: "Use print() to display each variable."
            }
        ]
    },
    'operators_order': {
        title: "Operators and Order of Operations",
        description: "Learn about using operators in Python and the order in which they are executed.",
        sections: [
            {
                title: "Basic Operators",
                content: "Python supports various operators such as + (addition), - (subtraction), * (multiplication), and / (division).",
                code: `result = 3 + 5 * 2`
            },
            {
                title: "Order of Operations (PEMDAS)",
                content: "Python follows PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction) for evaluating expressions.",
                code: `result = (3 + 5) * 2`
            }
        ],
        pitfalls: [
            "Forgetting parentheses can lead to unintended results due to the order of operations.",
            "Using division (`/`) between integers returns a float, which may not be expected in certain calculations."
        ],
        summary: "Operators and order of operations are essential for accurate calculations.",
        practiceQuestions: [
            {
                question: "Write an expression that uses each of the operators and print the result.",
                hint: "Try mixing operators like `5 + 3 * 2` to see the order."
            }
        ]
    },
    'string_operations': {
        title: "String Operations and Composition",
        description: "Explore basic operations on strings and how to use them in Python.",
        sections: [
            {
                title: "Concatenation",
                content: "You can combine strings using the `+` operator, known as concatenation.",
                code: `greeting = "Hello, " + "world!"`
            },
            {
                title: "String Multiplication",
                content: "Strings can be repeated by multiplying them by an integer.",
                code: `laugh = "ha" * 3`
            }
        ],
        pitfalls: [
            "Using `+` to combine strings and numbers causes a TypeError; use `str()` to convert numbers first.",
            "Ensure all opening quotes have a matching closing quote."
        ],
        summary: "String operations allow for flexible, formatted outputs useful in user interaction.",
        practiceQuestions: [
            {
                question: "Concatenate your first and last name and print the result.",
                hint: "Use the `+` operator to combine the strings."
            }
        ]
    },
    'comments_python': {
        title: "Using Comments in Python",
        description: "Learn how to write comments in Python code to explain and organize it.",
        sections: [
            {
                title: "Single-line Comments",
                content: "Use the `#` symbol for single-line comments in Python.",
                code: `# This is a comment`
            },
            {
                title: "Multi-line Comments",
                content: "For multi-line comments, use triple quotes.",
                code: `"""
    This is a multi-line comment.
    It can span multiple lines.
    """ `
            }
        ],
        pitfalls: [
            "Avoid excessive commenting; only explain complex logic or purpose behind sections.",
            "Ensure comments are up-to-date if you change the code."
        ],
        summary: "Comments clarify code functionality and purpose, useful for maintenance and collaboration.",
        practiceQuestions: [
            {
                question: "Write a Python script with comments explaining each line.",
                hint: "Use `#` for each line's explanation."
            }
        ]
    },
    'conditionals_modulus': {
        title: "Conditional Statements and Modulus Operator",
        description: "Learn how to use conditional statements to control program flow and explore the modulus operator for remainder calculations.",
        sections: [
            {
                title: "Introduction to Conditional Statements",
                content: "Conditional statements allow you to execute code based on specific conditions. The `if`, `elif`, and `else` statements are used to evaluate conditions and execute corresponding code blocks.",
                code: `age = 18
    if age >= 18:
        print("You are an adult.")
    else:
        print("You are not an adult.")`
            },
            {
                title: "Using the Modulus Operator",
                content: "The modulus operator `%` returns the remainder of a division. It's useful for checking divisibility or performing operations that need a remainder.",
                code: `remainder = 10 % 3  # This gives 1, as 10 divided by 3 has a remainder of 1`
            },
            {
                title: "Using Conditionals with the Modulus Operator",
                content: "You can use the modulus operator within conditionals. For example, to check if a number is even or odd, use `num % 2 == 0`.",
                code: `num = 4
    if num % 2 == 0:
        print("Even number")
    else:
        print("Odd number")`
            }
        ],
        pitfalls: [
            "Remember to use the correct comparison operators; `=` is for assignment, while `==` is for comparison.",
            "Be cautious with indentation in conditional statements; incorrect indentation can lead to unexpected behavior."
        ],
        summary: "Conditional statements enable decision-making in your programs, while the modulus operator helps you work with remainders.",
        practiceQuestions: [
            {
                question: "Write a program that checks if a number is divisible by 5.",
                hint: "Use `num % 5 == 0` to check for divisibility by 5."
            },
            {
                question: "Create a program that categorizes a number as positive, negative, or zero.",
                hint: "Use if-elif-else to check the number's value."
            }
        ]
    },
    'random_numbers': {
        title: "Using Random Numbers in Programs",
        description: "Learn how to generate random numbers in Python using the `random` module to add unpredictability to programs.",
        sections: [
            {
                title: "Importing the Random Module",
                content: "To use random numbers, first import the `random` module, which contains functions to generate random values.",
                code: `import random`
            },
            {
                title: "Generating Random Integers",
                content: "Use `random.randint(a, b)` to generate a random integer between `a` and `b`, inclusive.",
                code: `random_num = random.randint(1, 10)
    print(random_num)  # Outputs a random number between 1 and 10`
            },
            {
                title: "Generating Random Floats",
                content: "`random.random()` generates a float between 0 and 1. This can be scaled to any range as needed.",
                code: `random_float = random.random()
    print(random_float)  # Outputs a random float between 0 and 1`
            }
        ],
        pitfalls: [
            "Ensure to import the `random` module before using it; otherwise, you will encounter a NameError.",
            "Avoid relying on random numbers for security-sensitive applications; consider using secure random functions."
        ],
        summary: "Using random numbers adds unpredictability to your programs, useful in games and simulations.",
        practiceQuestions: [
            {
                question: "Create a program that simulates rolling a six-sided die.",
                hint: "Use `random.randint(1, 6)` to represent each roll."
            },
            {
                question: "Write a program that generates a random decimal between 1 and 10.",
                hint: "Use `random.random()` and multiply by 10."
            }
        ]
    },
    'boolean_logic': {
        title: "Boolean Expressions and Logic Operators",
        description: "Understand how to work with boolean expressions and logic operators to build complex conditions.",
        sections: [
            {
                title: "Boolean Expressions",
                content: "A boolean expression evaluates to either `True` or `False`. For example, `5 > 3` is `True`.",
                code: `is_greater = 5 > 3  # True`
            },
            {
                title: "Logical Operators: and, or, not",
                content: "`and`, `or`, and `not` are logical operators used to combine boolean expressions. `and` returns `True` only if both operands are true; `or` returns `True` if at least one operand is true; `not` negates the expression.",
                code: `x = True
    y = False
    print(x and y)  # False
    print(x or y)   # True
    print(not x)    # False`
            }
        ],
        pitfalls: [
            "Remember that `and` requires both conditions to be True; `or` requires only one.",
            "Check the order of operations; use parentheses to clarify complex expressions."
        ],
        summary: "Boolean logic allows for sophisticated decision-making and conditions in your programs.",
        practiceQuestions: [
            {
                question: "Write a program that checks if a number is both positive and even.",
                hint: "Use `num > 0 and num % 2 == 0`."
            },
            {
                question: "Create a program that checks if a user is either over 18 or has parental consent.",
                hint: "Use `age >= 18 or has_consent`."
            }
        ]
    },
    'nested_conditionals': {
        title: "Conditional and Nested Conditionals",
        description: "Learn to write programs with multiple levels of conditional statements using nested conditionals.",
        sections: [
            {
                title: "Understanding Nested Conditionals",
                content: "A nested conditional is when you place an `if` statement within another `if` statement. This allows for more detailed control of program logic.",
                code: `age = 20
    if age >= 18:
        print("You are an adult.")
        if age >= 21:
            print("You can also legally drink alcohol.")
    else:
        print("You are not an adult.")`
            }
        ],
        pitfalls: [
            "Avoid excessive nesting, which can make code hard to read; consider using functions for clarity.",
            "Ensure proper indentation to avoid logical errors in nested statements."
        ],
        summary: "Nested conditionals enhance decision-making capabilities in your programs, enabling complex logic.",
        practiceQuestions: [
            {
                question: "Write a program that categorizes a person's age group: child, teenager, or adult.",
                hint: "Use nested `if` statements for each category."
            },
            {
                question: "Create a program that checks if a number is positive, and if it's even or odd within the positive check.",
                hint: "Nest the even/odd check inside the positive condition."
            }
        ]
    },
    'loops': {
        title: "Looping with 'while' and 'for'",
        description: "Learn how to repeat actions using `while` and `for` loops in Python.",
        sections: [
            {
                title: "Using a 'while' Loop",
                content: "A `while` loop repeats as long as its condition is `True`. Remember to update any variables in the loop to avoid infinite loops.",
                code: `count = 1
    while count <= 5:
        print("Hello", count)
        count += 1`
            },
            {
                title: "Using a 'for' Loop",
                content: "`for` loops in Python iterate over a sequence (like a list or a range of numbers).",
                code: `for i in range(5):
        print("Loop iteration:", i)`
            }
        ],
        pitfalls: [
            "Ensure loop conditions will eventually be false to avoid infinite loops.",
            "Be careful with modifying loop variables inside the loop, as it may lead to unexpected behavior."
        ],
        summary: "Loops are powerful tools for automating repetitive tasks, enhancing program efficiency.",
        practiceQuestions: [
            {
                question: "Write a `while` loop that counts down from 10 to 1.",
                hint: "Use `count -= 1` inside the loop to decrease the counter."
            },
            {
                question: "Create a `for` loop that prints the first 10 even numbers.",
                hint: "Use `range(start, end, step)` to control the loop."
            }
        ]
    },
    'nested_loops': {
        title: "Nested Loops and Encapsulation",
        description: "Learn how to use nested loops and understand encapsulation to organize your code.",
        sections: [
            {
                title: "Working with Nested Loops",
                content: "A nested loop is a loop inside another loop. For example, you can use nested loops to print a pattern of numbers or stars.",
                code: `for i in range(1, 4):
        for j in range(1, 4):
            print(i, j)`
            },
            {
                title: "Understanding Encapsulation",
                content: "Encapsulation in Python involves organizing code into functions or modules, keeping related actions together. It helps to make your code more readable and reusable.",
                code: `def greet(name):
        print("Hello,", name)
        
    greet("Alice")`
            }
        ],
        pitfalls: [
            "Be mindful of performance; deeply nested loops can slow down your program significantly.",
            "Ensure proper indentation for clarity and correctness."
        ],
        summary: "Nested loops enable you to work with complex data structures, while encapsulation improves code organization.",
        practiceQuestions: [
            {
                question: "Write a nested loop to display a 5x5 grid of asterisks (*).",
                hint: "Use `for` loops for both rows and columns."
            },
            {
                question: "Create a function that prints a greeting 5 times using a loop inside the function.",
                hint: "Define a function, and use a loop within it."
            }
        ]
    },
    'function_calls': {
        title: "Defining and Calling Functions",
        description: "Learn the basics of defining functions in Python and how to call them, with examples to solidify your understanding.",
        sections: [
            {
                title: "What is a Function?",
                content: `A function is a reusable block of code that performs a specific task. Functions help to keep code organized, make it more readable, and reduce repetition. 
                
Functions are defined once and can be called (or executed) many times throughout a program.`,
                code: `# Defining a simple function
def greet():
    print("Hello, world!")`
            },
            {
                title: "Calling a Function",
                content: `Once a function is defined, you can call it to execute its code. To call a function, use its name followed by parentheses.

In this example, calling \`greet()\` will execute the code inside the \`greet\` function, displaying "Hello, world!" to the user.`,
                code: `# Calling the function
greet()`
            },
            {
                title: "Why Use Functions?",
                content: `Functions make it easy to organize code and avoid repeating the same logic in multiple places. This makes the code shorter, less error-prone, and easier to update. 

For example, instead of printing "Hello, [name]!" in many places throughout a program, you could create a function to do this, allowing you to change the greeting in just one place.`,
                code: `def greet_user(name):
    print("Hello, " + name + "!")

# Call greet_user with different names
greet_user("Alice")
greet_user("Bob")`
            },
            {
                title: "Function Arguments",
                content: `Functions can take arguments—values you pass into the function when calling it. These arguments allow functions to be dynamic and reusable.

In the example below, the \`greet_user\` function takes an argument \`name\`, making it easy to personalize the greeting.`,
                code: `def greet_user(name):
    print("Hello, " + name + "!")

# Example calls
greet_user("Charlie")
greet_user("Dana")`
            },
            {
                title: "Returning Values from a Function",
                content: `Some functions return a value after they finish executing. To return a value, use the \`return\` keyword. Returning values allows functions to pass information back to where they were called.`,
                code: `def add(a, b):
    return a + b

# Store result in a variable
result = add(3, 5)
print(result)  # Output: 8`
            }
        ],
        pitfalls: [
            "Forgetting parentheses when calling a function.",
            "Returning a value but forgetting to store or use it."
        ],
        summary: `In this lesson, you learned how to define and call functions in Python, including passing arguments and returning values. Functions help to make code modular and reusable, reducing duplication and improving organization.`,
        practiceQuestions: [
            {
                question: "Write a function called `multiply` that takes two numbers as arguments and returns their product.",
                hint: "Use the `return` keyword to return the product of `a` and `b`."
            },
            {
                question: "Create a function called `divide` that takes two numbers and returns their division result. Handle cases where the divisor is zero.",
                hint: "Use an `if` statement to check if the divisor is zero before dividing."
            },
            {
                question: "Define a function `greet_and_age` that takes a name and age and prints a message like 'Hello, [name]! You are [age] years old.'",
                hint: "Use two arguments in the function and an f-string or concatenation to create the message."
            }
        ]
    },
    'type_conversion': {
        title: "Type Conversion and Coercion",
        description: "Learn how to convert between data types in Python and understand implicit and explicit type conversion.",
        sections: [
            {
                title: "What is Type Conversion?",
                content: `Type conversion, also known as typecasting, is the process of converting a value from one data type to another. This can be done explicitly by the programmer or automatically by Python.

For example, you might want to convert a string containing a number (e.g., "123") into an integer for calculations.`,
                code: `# Convert a string to an integer
number_str = "123"
number_int = int(number_str)
print(number_int + 5)  # Output: 128`
            },
            {
                title: "Explicit Type Conversion",
                content: `In Python, you can explicitly convert types using functions like \`int()\`, \`float()\`, \`str()\`, etc.

Explicit conversion allows you to specify the type you want, which is especially useful when dealing with user input or data that may not be in the format you expect.`,
                code: `# Convert float to integer explicitly
value = 7.8
converted_value = int(value)
print(converted_value)  # Output: 7`
            },
            {
                title: "Implicit Type Conversion (Coercion)",
                content: `Python sometimes performs type conversion automatically, which is called implicit type conversion or coercion. 

For instance, when you add an integer and a float, Python converts the integer to a float automatically.`,
                code: `# Implicit conversion of int to float
num_int = 10
num_float = 2.5
result = num_int + num_float
print(result)  # Output: 12.5 (float)`
            },
            {
                title: "Common Type Conversion Functions",
                content: `Python provides built-in functions for type conversion:

- \`int()\`: Converts a value to an integer.
- \`float()\`: Converts a value to a float.
- \`str()\`: Converts a value to a string.
- \`bool()\`: Converts a value to a boolean.
                
Each function works only if the input can be meaningfully converted.`,
                code: `# Examples of type conversion
string_num = "456"
int_num = int(string_num)
print(int_num + 1)  # Output: 457

float_str = "3.14"
float_num = float(float_str)
print(float_num * 2)  # Output: 6.28`
            },
            {
                title: "Converting User Input",
                content: `When working with user input, the input is always taken as a string by default. You often need to convert it into an integer, float, or other types depending on the task.`,
                code: `# Converting user input to integer
age = input("Enter your age: ")
age = int(age)  # Convert age to an integer
print("In 5 years, you will be", age + 5)`
            }
        ],
        pitfalls: [
            "Trying to convert a string with non-numeric characters to an integer or float.",
            "Forgetting to convert input values before performing arithmetic operations."
        ],
        summary: `In this lesson, you learned about explicit and implicit type conversion in Python. Type conversion helps ensure that data is in the expected format, enabling you to perform calculations and comparisons accurately.`,
        practiceQuestions: [
            {
                question: "Write a program that takes an input of hours worked (integer) and hourly wage (float), then calculates total earnings.",
                hint: "Use `float()` to convert the wage input if needed, and multiply it with hours worked."
            },
            {
                question: "Create a program that takes two numbers as strings and prints their sum as an integer.",
                hint: "Convert both inputs to integers before adding them."
            },
            {
                question: "Write a program that prompts the user for their age and outputs whether they are a teenager (between 13 and 19).",
                hint: "Convert the input to an integer and use comparison operators to check the age."
            }
        ]
    },
    'math_functions': {
        title: "Using Math Functions",
        description: "Explore Python’s built-in math functions to perform various mathematical operations.",
        sections: [
            {
                title: "Introduction to Math Functions",
                content: `Python provides several built-in functions to perform common mathematical operations. These functions can simplify calculations and are accessible without additional imports.`,
                code: `# Examples of basic math functions
print(abs(-5))      # Output: 5
print(pow(2, 3))    # Output: 8 (2 raised to the power 3)`
            },
            {
                title: "Common Math Functions",
                content: `Some frequently used math functions in Python include:
                
- \`abs(x)\`: Returns the absolute value of x.
- \`pow(x, y)\`: Raises x to the power of y.
- \`round(x, n)\`: Rounds x to n decimal places.
- \`max(a, b, ...)\` and \`min(a, b, ...)\`: Returns the largest or smallest value from a set.`,
                code: `# Examples
print(max(3, 7, 2, 9))  # Output: 9
print(min(3, 7, 2, 9))  # Output: 2
print(round(3.14159, 2)) # Output: 3.14`
            },
            {
                title: "Using the math Module",
                content: `For more complex functions, Python provides a \`math\` module, which includes advanced functions such as trigonometric and logarithmic functions.
                
To use these functions, you’ll need to import the module with \`import math\`.`,
                code: `import math

print(math.sqrt(16))       # Output: 4.0
print(math.log10(100))     # Output: 2.0
print(math.sin(math.pi/2)) # Output: 1.0`
            },
            {
                title: "Math Constants",
                content: `The \`math\` module also provides useful constants, such as:

- \`math.pi\`: The value of π (3.14159…).
- \`math.e\`: The value of e (2.71828…).
                
These can be used in calculations that require precise values.`,
                code: `import math

# Calculate the area of a circle with radius 5
radius = 5
area = math.pi * radius ** 2
print(area)  # Output: 78.5398`
            }
        ],
        pitfalls: [
            "Trying to convert a string with non-numeric characters to an integer or float.",
            "Forgetting to convert input values before performing arithmetic operations."
        ],
        summary: `In this lesson, you learned about Python's math functions and the math module, which provide essential functions and constants to perform calculations in your programs.`,
        practiceQuestions: [
            {
                question: "Write a program that calculates the hypotenuse of a right triangle given the other two sides.",
                hint: "Use `math.sqrt()` and the Pythagorean theorem."
            },
            {
                question: "Create a program that calculates the natural logarithm of a given number.",
                hint: "Use `math.log()` to calculate the natural log."
            },
            {
                question: "Find the maximum of three numbers entered by the user.",
                hint: "Use the `max()` function."
            }
        ]
    },
    'function_parameters': {
        title: "Creating Functions with Parameters",
        description: "Learn how to create functions with parameters to make your code modular and reusable.",
        sections: [
            {
                title: "What are Parameters?",
                content: `Parameters are variables listed inside the parentheses in a function definition. When a function is called, arguments are passed to the parameters, allowing the function to work with different inputs.`,
                code: `# Define a function with parameters
def greet(name):
    print("Hello,", name)

greet("Alice")  # Output: Hello, Alice`
            },
            {
                title: "Multiple Parameters",
                content: `You can define a function with multiple parameters, allowing it to receive more than one argument. Separate parameters with commas.`,
                code: `# Function with multiple parameters
def add(a, b):
    return a + b

result = add(3, 4)
print(result)  # Output: 7`
            },
            {
                title: "Default Parameters",
                content: `Python allows you to assign default values to parameters. If an argument is not provided for a parameter with a default value, the default value is used.`,
                code: `# Function with default parameter
def greet(name="Guest"):
    print("Hello,", name)

greet()           # Output: Hello, Guest
greet("Alice")    # Output: Hello, Alice`
            },
            {
                title: "Keyword Arguments",
                content: `When calling a function, you can specify arguments by parameter name. This is called a keyword argument and makes the code easier to read.`,
                code: `# Using keyword arguments
def display_info(name, age):
    print(f"Name: {name}, Age: {age}")

display_info(age=25, name="Alice")  # Output: Name: Alice, Age: 25`
            }
        ],
        pitfalls: [
            "Not providing all required arguments when calling a function with multiple parameters.",
            "Forgetting to use the default parameter value when one is defined.",
            "Mixing up the order of arguments in a function call without using keyword arguments."
        ],
        summary: `In this lesson, you learned how to create functions with parameters and utilize default values and keyword arguments, making your code more versatile and modular.`,
        practiceQuestions: [
            {
                question: "Create a function that takes a list and a number, then returns a new list with the number added to each item.",
                hint: "Use a loop and add the number to each element in the list."
            },
            {
                question: "Write a function that takes two numbers and an operation (+, -, *, /) and performs the operation.",
                hint: "Use if statements to check the operation type."
            },
            {
                question: "Implement a function that takes a string and returns it in reverse.",
                hint: "Use string slicing or a loop."
            }
        ]
    },
    'recursion': {
        title: "Understanding and Using Recursion",
        description: "Explore recursion, a technique where a function calls itself to solve a problem.",
        sections: [
            {
                title: "What is Recursion?",
                content: `Recursion is when a function calls itself. Each recursive call breaks down the problem into smaller parts until a base condition is met.`,
                code: `# Example of recursion
def countdown(n):
    if n <= 0:
        print("Blast off!")
    else:
        print(n)
        countdown(n - 1)

countdown(5)  # Output: 5, 4, 3, 2, 1, Blast off!`
            },
            {
                title: "Base Case in Recursion",
                content: `Every recursive function needs a base case to stop recursion; otherwise, it will continue indefinitely and cause a stack overflow (a memory error).`,
                code: `# Base case example
def factorial(n):
    if n == 1:  # Base case
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))  # Output: 120`
            },
            {
                title: "Using Recursion vs. Loops",
                content: `While loops can often achieve similar results, recursion provides a cleaner approach for problems that can be broken down into smaller, similar sub-problems (e.g., factorial, Fibonacci sequence).`,
                code: `# Recursive Fibonacci sequence
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(5))  # Output: 5`
            }
        ],
        pitfalls: [
            "Forgetting to include a base case in a recursive function.",
            "Using recursion when a loop would be more efficient.",
            "Causing a stack overflow by calling the recursive function too many times without stopping."
        ],
        summary: `In this lesson, you learned about recursion, a powerful technique that enables functions to solve complex problems by calling themselves with modified arguments. Recursion often simplifies code but should be used with caution to avoid infinite loops.`,
        practiceQuestions: [
            {
                question: "Write a recursive function that takes an integer and returns its sum of digits.",
                hint: "The sum of digits in 1234 is 1 + 2 + 3 + 4 = 10."
            },
            {
                question: "Create a recursive function that returns the nth Fibonacci number.",
                hint: "Use the Fibonacci recurrence relation: fib(n) = fib(n-1) + fib(n-2)."
            },
            {
                question: "Implement a recursive function to check if a string is a palindrome.",
                hint: "Check the first and last characters and call the function on the substring in between."
            }
        ]
    },
    'string_basics': {
        title: "String Basics and Traversal",
        description: "Learn how to create, access, and iterate through strings in Python.",
        sections: [
            {
                title: "What is a String?",
                content: `A string is a sequence of characters used to represent text in Python. Strings are defined by enclosing text in single ('') or double ("") quotes.`,
                code: `# Examples of strings
name = "Alice"
greeting = 'Hello, world!'`
            },
            {
                title: "Accessing Characters in a String",
                content: `You can access individual characters in a string using their index (starting at 0 for the first character). Use square brackets to access a character by its index.`,
                code: `name = "Alice"
print(name[0])  # Output: A
print(name[1])  # Output: l`
            },
            {
                title: "Traversing a String with a Loop",
                content: `A loop can be used to iterate over each character in a string. This is known as string traversal.`,
                code: `name = "Alice"
for char in name:
    print(char)

# Output:
# A
# l
# i
# c
# e`
            }
        ],
        pitfalls: [
            "Index out of range: Accessing a character at an index beyond the string length causes an IndexError.",
            "Strings are immutable: Attempting to modify a character directly, like `name[0] = 'B'`, will lead to an error.",
            "Off-by-one errors: Remember string indices start at 0, so `name[1]` refers to the second character, not the first."
        ],
        summary: `This lesson introduced strings, how to access their characters by index, and how to traverse them using loops. With these basics, you can begin manipulating and analyzing text data in Python.`,
        practiceQuestions: [
            {
                question: "Write a program that counts the number of vowels in a given string.",
                hint: "Use a loop to check each character and a condition to count vowels."
            },
            {
                question: "Create a program that reverses a given string using a loop.",
                hint: "Append each character from the end to a new string."
            }
        ]
    },
    'string_slicing': {
        title: "Slicing, Comparing, and Finding in Strings",
        description: "Explore slicing strings, comparing them, and finding substrings in Python.",
        sections: [
            {
                title: "String Slicing",
                content: `Slicing allows you to extract a part of a string by specifying a start and end index. The syntax is \`string[start:end]\`. The end index is not included in the slice.`,
                code: `text = "Hello, World!"
print(text[0:5])   # Output: Hello
print(text[7:12])  # Output: World`
            },
            {
                title: "Comparing Strings",
                content: `Strings can be compared using comparison operators like \`==\`, \`!=\`, \`<\`, \`>\`. Comparisons are case-sensitive and use alphabetical order.`,
                code: `print("apple" == "apple")   # Output: True
print("apple" < "banana")  # Output: True`
            },
            {
                title: "Finding Substrings",
                content: `The \`in\` operator checks if a substring exists within a string, while \`find()\` returns the index of the first occurrence of a substring (or -1 if not found).`,
                code: `text = "Hello, World!"
print("World" in text)         # Output: True
print(text.find("World"))      # Output: 7`
            }
        ],
        pitfalls: [
            "End index is exclusive: Slicing excludes the end index, so `\"Hello\"[0:2]` returns 'He' instead of 'Hel'.",
            "Case-sensitive comparisons: Comparisons like `\"apple\" == \"Apple\"` return False due to case sensitivity.",
            "Negative index misuse: Negative indices count from the end, which can cause confusion if misunderstood."
        ],
        summary: `You learned about slicing to extract portions of strings, comparing strings with operators, and finding substrings. Mastering these techniques enables you to handle and manipulate text data effectively.`,
        practiceQuestions: [
            {
                question: "Write a function that takes a string and a word, and returns True if the word is in the string.",
                hint: "Use the `in` operator."
            },
            {
                question: "Create a program that extracts the first and last names from a full name using slicing.",
                hint: "Use the `split()` method to help with slicing."
            }
        ]
    },
    'list_basics': {
        title: "Lists: Accessing and Manipulating Elements",
        description: "Learn about lists, a versatile data structure in Python, and how to access and manipulate their elements.",
        sections: [
            {
                title: "What is a List?",
                content: `A list is a collection of elements stored in a specific order. Lists are defined by enclosing elements in square brackets, separated by commas.`,
                code: `fruits = ["apple", "banana", "cherry"]`
            },
            {
                title: "Accessing Elements in a List",
                content: `You can access list elements by their index (starting at 0 for the first element).`,
                code: `fruits = ["apple", "banana", "cherry"]
print(fruits[0])   # Output: apple
print(fruits[2])   # Output: cherry`
            },
            {
                title: "Modifying Elements in a List",
                content: `Lists are mutable, meaning you can change their elements. Use assignment to modify values.`,
                code: `fruits = ["apple", "banana", "cherry"]
fruits[1] = "blueberry"
print(fruits)   # Output: ["apple", "blueberry", "cherry"]`
            }
        ],
        pitfall: [
            "Index out of range: Accessing a non-existent index, like `fruits[5]` in a list of three items, causes an IndexError.",
            "Unexpected behavior when modifying lists while iterating: Modifying elements during iteration can lead to unpredictable results.",
            "Confusion with mutable vs. immutable: Lists are mutable, unlike strings, which can cause confusion when modifying elements."
        ],
        summary: `This lesson covered the basics of creating lists, accessing elements by index, and modifying list values. Lists are fundamental data structures and allow efficient storage and access of data in Python.`,
        practiceQuestions: [
            {
                question: "Write a program that changes the first item of a list to 'orange'.",
                hint: "Use list indexing to assign a new value to the first item."
            },
            {
                question: "Create a program to add two new elements to the end of a list.",
                hint: "Use the `append()` method to add items."
            }
        ]
    },
    'list_loops': {
        title: "Looping through and Modifying Lists",
        description: "Learn to iterate through lists and modify them using loops.",
        sections: [
            {
                title: "Looping through a List",
                content: `You can use a \`for\` loop to go through each element in a list.`,
                code: `fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`
            },
            {
                title: "Using List Comprehensions",
                content: `List comprehensions provide a concise way to create new lists by applying an expression to each element.`,
                code: `squares = [x**2 for x in range(5)]
print(squares)   # Output: [0, 1, 4, 9, 16]`
            },
            {
                title: "Modifying Lists During Iteration",
                content: `When modifying a list as you loop through it, avoid adding/removing elements directly. Instead, use list comprehensions or create a new list.`,
                code: `numbers = [1, 2, 3, 4]
doubled = [x*2 for x in numbers]
print(doubled)   # Output: [2, 4, 6, 8]`
            }
        ],
        pitfalls: [
            "Modifying a list during iteration: Changing a list while iterating over it can lead to unexpected results; use list comprehensions or a copy instead.",
            "Confusion between list comprehension and loops: Mixing up list comprehension syntax with standard loops, especially with conditionals.",
            "Incorrect use of range in list comprehension: Off-by-one errors can occur when not accounting for `range(n)` excluding `n`."
        ],
        summary: `This lesson introduced list looping and list comprehensions, a powerful tool for iterating and modifying lists concisely. These methods allow efficient transformations and are widely used in Python programming.`,
        practiceQuestions: [
            {
                question: "Write a program that removes all odd numbers from a list.",
                hint: "Use a list comprehension with a conditional statement."
            },
            {
                question: "Create a list comprehension to get the square of each even number in a given list.",
                hint: "Use a conditional inside the comprehension."
            }
        ]
    },
    'tuples_dictionaries': {
        title: "Understanding Tuples and Dictionaries",
        description: "Explore tuples and dictionaries, two other versatile data structures in Python.",
        sections: [
            {
                title: "What is a Tuple?",
                content: `A tuple is an immutable sequence of elements, defined by enclosing elements in parentheses.`,
                code: `point = (3, 4)`
            },
            {
                title: "Accessing Elements in a Tuple",
                content: `You access elements in a tuple by their index, like with lists.`,
                code: `point = (3, 4)
print(point[0])  # Output: 3`
            },
            {
                title: "What is a Dictionary?",
                content: `A dictionary stores key-value pairs, defined by enclosing elements in curly braces with key-value pairs separated by colons.`,
                code: `person = {"name": "Alice", "age": 25}`
            },
            {
                title: "Accessing Dictionary Values",
                content: `You access dictionary values using keys.`,
                code: `person = {"name": "Alice", "age": 25}
print(person["name"])  # Output: Alice`
            }
        ],
        pitfalls: [
            "Attempting to modify tuples: Tuples are immutable, so trying to alter elements will raise a TypeError.",
            "Duplicate keys in dictionaries: Re-assigning the same key in a dictionary keeps only the last occurrence, causing potential data loss.",
            "Key errors in dictionaries: Accessing a non-existent key results in a KeyError; use `get()` to avoid this issue."
        ],
        summary: `You explored tuples, which are immutable, and dictionaries, which store key-value pairs. Both data structures are useful for organizing and structuring data in Python.`,
        practiceQuestions: [
            {
                question: "Create a dictionary for a student's grades in three subjects, then retrieve a specific grade using its subject name.",
                hint: "Use key names for subjects and values for grades."
            },
            {
                question: "Write a program that tries to modify an element in a tuple. What happens?",
                hint: "Tuples are immutable, meaning you cannot change their elements directly."
            }
        ]
    },
    'classes_instances': {
        title: "Creating Classes and Instances",
        description: "Learn the basics of defining classes and creating instances to represent objects in Python.",
        sections: [
            {
                title: "What is a Class?",
                content: `A class is a blueprint for creating objects. Classes encapsulate data (attributes) and behaviors (methods) that describe an object. In Python, you define a class using the 'class' keyword.`,
                code: `class Dog:
    species = "Canis familiaris"  # Class attribute

    def __init__(self, name, age):
        self.name = name  # Instance attribute
        self.age = age    # Instance attribute`
            },
            {
                title: "Creating an Instance",
                content: `An instance is a specific object created from a class. Each instance has its own set of data attributes.`,
                code: `my_dog = Dog("Buddy", 3)
print(my_dog.name)  # Output: Buddy
print(my_dog.age)   # Output: 3`
            },
            {
                title: "Calling Methods",
                content: `A class can have methods (functions defined inside a class) that operate on its data. Define a method using 'def', and call it using the instance name.`,
                code: `class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        return f"{self.name} says woof!"

my_dog = Dog("Buddy")
print(my_dog.bark())  # Output: Buddy says woof!`
            }
        ],
        pitfalls: [
            "A class is a blueprint for creating objects. Classes encapsulate data (attributes) and behaviors (methods) that describe an object. In Python, you define a class using the 'class' keyword.",
            "An instance is a specific object created from a class. Each instance has its own set of data attributes.",
            "A class can have methods (functions defined inside a class) that operate on its data. Define a method using 'def', and call it using the instance name."
        ],
        summary: `This lesson introduced classes, instances, and methods, key building blocks for organizing and structuring data in Python.`,
        practiceQuestions: [
            {
                question: "Create a class 'Car' with attributes 'make', 'model', and 'year'. Instantiate it with values for a car.",
                hint: "Use the __init__ method to define attributes."
            },
            {
                question: "Add a method to 'Car' that returns a description of the car.",
                hint: "Define a method that uses the car's attributes to create a descriptive string."
            }
        ]
    },
    'inheritance': {
        title: "Class Inheritance and Method Overriding",
        description: "Explore class inheritance to create specialized classes and learn about method overriding.",
        sections: [
            {
                title: "What is Inheritance?",
                content: `Inheritance allows a class to inherit attributes and methods from another class, known as the parent or base class. Inheritance promotes code reuse and helps create hierarchical class structures.`,
                code: `class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "Some sound"

class Dog(Animal):  # Dog inherits from Animal
    def speak(self):
        return "Woof!"`
            },
            {
                title: "Overriding Methods",
                content: `A subclass can override a method from its superclass by defining a method with the same name. The subclass's version of the method will be used instead.`,
                code: `dog = Dog("Buddy")
print(dog.speak())  # Output: Woof! (overrides Animal's speak method)`
            },
            {
                title: "Using super() to Call Parent Methods",
                content: `The 'super()' function allows you to call a method from the parent class, useful for extending rather than replacing functionality.`,
                code: `class Cat(Animal):
    def speak(self):
        sound = super().speak()  # Calls Animal's speak
        return sound + " Meow!"

cat = Cat("Whiskers")
print(cat.speak())  # Output: Some sound Meow!`
            }
        ],
        pitfalls: [
            "Inheritance allows a class to inherit attributes and methods from another class, known as the parent or base class. Inheritance promotes code reuse and helps create hierarchical class structures.",
            "A subclass can override a method from its superclass by defining a method with the same name. The subclass's version of the method will be used instead.",
            "The 'super()' function allows you to call a method from the parent class, useful for extending rather than replacing functionality."
        ],
        summary: `This lesson introduced inheritance, a powerful tool for creating class hierarchies, and method overriding, which allows specialized behavior in subclasses.`,
        practiceQuestions: [
            {
                question: "Create a 'Bird' class that inherits from 'Animal' and overrides the 'speak' method to return 'Chirp'.",
                hint: "Define a new class 'Bird' with a method 'speak' that returns 'Chirp'."
            },
            {
                question: "Using 'super()', create a 'Parrot' class that calls Animal's 'speak' method and adds 'Squawk' to it.",
                hint: "Use 'super().speak()' inside the Parrot's speak method."
            }
        ]
    },
    'data_hiding_overloading': {
        title: "Data Hiding and Function Overloading",
        description: "Learn about data hiding in Python and how to overload functions to achieve flexible functionality.",
        sections: [
            {
                title: "Data Hiding with Encapsulation",
                content: `Encapsulation is the practice of restricting access to certain details of an object. In Python, you can indicate private attributes using an underscore prefix (_ or __). These are intended for internal use only and should not be accessed directly outside the class.`,
                code: `class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Private attribute
    
    def get_balance(self):
        return self.__balance  # Accessor method`
            },
            {
                title: "Accessing Private Attributes with Accessor and Mutator Methods",
                content: `To read or modify private data, use accessor (getters) and mutator (setters) methods instead of direct access.`,
                code: `account = BankAccount("Alice", 1000)
print(account.get_balance())  # Output: 1000`
            },
            {
                title: "Function Overloading in Python",
                content: `Python doesn’t support traditional function overloading as in other languages, but you can achieve similar behavior with default arguments or *args and **kwargs.`,
                code: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))           # Output: Hello, Alice!
print(greet("Alice", "Hi"))     # Output: Hi, Alice!`
            }
        ],
        pitfall: [
            "Encapsulation is the practice of restricting access to certain details of an object. In Python, you can indicate private attributes using an underscore prefix (_ or __). These are intended for internal use only and should not be accessed directly outside the class.",
            "To read or modify private data, use accessor (getters) and mutator (setters) methods instead of direct access.",
            "Python doesn’t support traditional function overloading as in other languages, but you can achieve similar behavior with default arguments or *args and **kwargs."
        ],
        summary: `This lesson covered data hiding for encapsulation and function overloading techniques for flexible function behavior in Python. These concepts promote secure and modular code.`,
        practiceQuestions: [
            {
                question: "Create a class 'Person' with a private attribute '_age' and an accessor method 'get_age'.",
                hint: "Define '_age' in the constructor, then create a method to return it."
            },
            {
                question: "Write a function that takes one or two numbers and returns their sum. If only one number is given, return its double.",
                hint: "Use a default argument or *args to achieve flexible behavior."
            }
        ]
    },
    "file_io": {
        title: "Reading and Writing Files",
        description: "Learn how to read from and write to files in Python, enabling you to store and retrieve data.",
        sections: [
            {
                title: "Introduction to File I/O",
                content: "File I/O (Input/Output) operations allow us to read from and write data to files. This is useful for saving data permanently, beyond the runtime of a program. In Python, we use the built-in `open()` function to interact with files.",
                code: `# Opening a file in read mode
file = open("example.txt", "r")`
            },
            {
                title: "Reading from Files",
                content: "To read content from a file, use methods like `read()`, `readline()`, or `readlines()`. Make sure to open the file in 'r' (read) mode.",
                code: `file = open("example.txt", "r")
content = file.read()
print(content)
file.close()`
            },
            {
                title: "Writing to Files",
                content: "To write to a file, open it in 'w' (write) or 'a' (append) mode. 'w' mode overwrites existing content, while 'a' mode adds to the file's end.",
                code: `file = open("example.txt", "w")
file.write("Hello, World!")
file.close()`
            },
            {
                title: "File Context Managers",
                content: "Using `with open(...) as file:` allows Python to manage file opening and closing automatically.",
                code: `with open("example.txt", "r") as file:
    content = file.read()
    print(content)`
            }
        ],
        pitfalls: [
            "File I/O (Input/Output) operations allow us to read from and write data to files. This is useful for saving data permanently, beyond the runtime of a program. In Python, we use the built-in `open()` function to interact with files.",
            "To read content from a file, use methods like `read()`, `readline()`, or `readlines()`. Make sure to open the file in 'r' (read) mode.",
            "To write to a file, open it in 'w' (write) or 'a' (append) mode. 'w' mode overwrites existing content, while 'a' mode adds to the file's end.",
            "Using `with open(...) as file:` allows Python to manage file opening and closing automatically."
        ],
        summary: "File I/O in Python allows data to be saved and retrieved through reading and writing operations. Using context managers ensures that files are properly managed.",
        practiceQuestions: [
            {
                question: "Write a program that writes user input to a file and then reads it back.",
                hint: "Use 'w' mode to write input and 'r' mode to read the content."
            },
            {
                question: "Write a program to count the number of lines in a file.",
                hint: "Use a loop to read lines and a counter to keep track."
            }
        ]
    },
    "exceptions": {
        title: "Handling Exceptions and Error Types",
        description: "Learn to handle unexpected errors in Python using exceptions, making your code more robust and error-tolerant.",
        sections: [
            {
                title: "What are Exceptions?",
                content: "Exceptions are errors that disrupt the normal flow of a program. Using `try` and `except` blocks allows you to catch and handle exceptions gracefully.",
                code: `try:
    number = int(input("Enter a number: "))
except ValueError:
    print("That's not a valid number!")`
            },
            {
                title: "Common Exceptions in Python",
                content: "Common exceptions include `ValueError`, `TypeError`, `ZeroDivisionError`, and `FileNotFoundError`. Each exception type has a specific cause.",
                code: `try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")`
            },
            {
                title: "Using finally",
                content: "The `finally` block runs no matter what, allowing for cleanup actions, like closing files.",
                code: `try:
    file = open("example.txt", "r")
except FileNotFoundError:
    print("File not found.")
finally:
    print("This always executes.")`
            }
        ],
        pitfalls: [
            "Exceptions are errors that disrupt the normal flow of a program. Using `try` and `except` blocks allows you to catch and handle exceptions gracefully.",
            "Common exceptions include `ValueError`, `TypeError`, `ZeroDivisionError`, and `FileNotFoundError`. Each exception type has a specific cause.",
            "The `finally` block runs no matter what, allowing for cleanup actions, like closing files."
        ],
        summary: "Exception handling in Python enables graceful error recovery, allowing programs to continue running or terminate with useful messages.",
        practiceQuestions: [
            {
                question: "Write a program that catches division by zero and prints an error message.",
                hint: "Use `try` with `except ZeroDivisionError`."
            },
            {
                question: "Handle a file not found error and prompt the user to check the file name.",
                hint: "Use `FileNotFoundError` in an `except` block."
            }
        ]
    },
    "regex_basics": {
        title: "Using Regular Expressions",
        description: "Understand regular expressions (regex) to search for patterns in strings, useful for validating input and text processing.",
        sections: [
            {
                title: "Introduction to Regular Expressions",
                content: "Regex is a sequence of characters defining a search pattern. Use the `re` module in Python to work with regex.",
                code: `import re
pattern = r"hello"
text = "hello world"
match = re.search(pattern, text)
print(match)`
            },
            {
                title: "Common Regex Patterns",
                content: "Learn basic patterns like `\\d` (digits), `\\w` (words), `\\s` (whitespace), and modifiers like `+`, `*`, and `.`",
                code: `pattern = r"\\d+"
text = "There are 123 apples"
match = re.findall(pattern, text)
print(match)`
            },
            {
                title: "Using Regex in Real Applications",
                content: "Regex can validate emails, find specific patterns, and more.",
                code: `pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
text = "Contact us at example@test.com"
match = re.search(pattern, text)
print(match.group())`
            }
        ],
        pitfalls: [
            "Regex is a sequence of characters defining a search pattern. Use the `re` module in Python to work with regex.",
            "Learn basic patterns like `\\d` (digits), `\\w` (words), `\\s` (whitespace), and modifiers like `+`, `*`, and `.`",
            "Regex can validate emails, find specific patterns, and more."
        ],
        summary: "Regular expressions provide powerful text matching capabilities, useful for data validation and extraction.",
        practiceQuestions: [
            {
                question: "Write a regex to match all words starting with 'a' in a string.",
                hint: "Use `\\ba\\w+` to match words beginning with 'a'."
            },
            {
                question: "Write a regex to validate phone numbers in the format (123) 456-7890.",
                hint: "Use `\\(\\d{3}\\) \\d{3}-\\d{4}` to match this format."
            }
        ]
    },
    "web_scraping_regex": {
        title: "Web Scraping with Regular Expressions",
        description: "Use Python and regular expressions to extract specific information from websites.",
        sections: [
            {
                title: "Introduction to Web Scraping",
                content: "Web scraping is extracting data from websites. We can use `requests` to fetch HTML and `re` to find patterns in the HTML source.",
                code: `import requests
response = requests.get("https://example.com")
html = response.text`
            },
            {
                title: "Finding Patterns in HTML",
                content: "Use regex to locate data, like titles or emails, in HTML.",
                code: `import re
pattern = r"<title>(.*?)</title>"
title = re.search(pattern, html)
print(title.group(1))`
            },
            {
                title: "Extracting Data with Regex",
                content: "Regex can pull emails, phone numbers, or other details from web pages.",
                code: `pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
emails = re.findall(pattern, html)
print(emails)`
            }
        ],
        pitfalls: [
            "Web scraping is extracting data from websites. We can use `requests` to fetch HTML and `re` to find patterns in the HTML source.",
            "Use regex to locate data, like titles or emails, in HTML.",
            "Regex can pull emails, phone numbers, or other details from web pages."
        ],
        summary: "Web scraping with regex allows for targeted data extraction from HTML, though dedicated libraries may be more effective for complex structures.",
        practiceQuestions: [
            {
                question: "Write a script that scrapes all the headings (like <h1>) from a webpage.",
                hint: "Use the pattern `<h1>(.*?)</h1>` to match heading content."
            },
            {
                question: "Extract all URLs from a webpage that follow the pattern `http://` or `https://`.",
                hint: "Match URLs using the pattern `https?://\\S+`."
            }
        ]
    }
}