# C# Y'all

C# happens in .cs files. Whitespace seems to mean nothing here,
every line must be finished with a ";". 
New variables must be explicitly cast.

Comments are established with "//"

Make an new project for C# with the terminal command: 

    dotnet new console -o app
cd into the new project folder, titled "app" here, and run your program in the terminal with

    dotnet run
To compile a C# file, create an .exe file with the command:

    dotnet build

# Types

## Strings
Printing happens with Console.WriteLog()

    Console.WriteLine("Hello World!");
New Strings are established like-

    string aFriend = "Bill";
    Console.WriteLine(aFriend);
Concatenate with-

    Console.WriteLine("Hello " + aFriend);
    Console.WriteLine($"Hello {aFriend}");
### TRIMMING
Eliminate extra whitespace as needed.

    string greeting = "      Hello World!       ";
    Console.WriteLine($"[{greeting}]");

    string trimmedGreeting = greeting.TrimStart();
    Console.WriteLine($"[{trimmedGreeting}]");

    trimmedGreeting = greeting.TrimEnd();
    Console.WriteLine($"[{trimmedGreeting}]");

    trimmedGreeting = greeting.Trim();
    Console.WriteLine($"[{trimmedGreeting}]");
The brackets help denote the removal of space on either or both sides. Start trims the front, End trims the end, Trim() handles both ends of whitespace.

Other methods include things like .Replace("current text", "new text");
and things like .ToUpper()

Use Contains() to return a boolean if a string match is found.

    string songLyrics = "You say goodbye, and I say hello";
    Console.WriteLine(songLyrics.Contains("goodbye")); // True
    Console.WriteLine(songLyrics.Contains("greetings")); // False

## Numbers
### Int
C# utilizes ints for whole numbers.

    int a = 18;
    int b = 6;
    int c = a + b;
    Console.WriteLine(c); // 24

When dividing with integers, a whole number will always be the result as a limit of integers.

    int a = 10;
    int b = 3;
    Console.WriteLine(a / b); 
    // 3

Remember with general coding math, using % modulo will provide the remainder.

    int a = 7;
    int b = 4;
    int c = 3;
    int d = (a + b) / c;
    int e = (a + b) % c;
    Console.WriteLine($"quotient: {d}");
    Console.WriteLine($"remainder: {e}");
    // quotient: 3
    // remainder: 2
A Unique quality of the C# int is that there is an inherent minimum and maximum value. These can be called with Min/MaxValue. 

    int max = int.MaxValue;
    int min = int.MinValue;
    Console.WriteLine($"The range of integers is {min} to {max}");
As this program will tell you, the range is **-2147483648** to **2147483647**
If a number wraps around the min or max, you get **overflow**.

    int what = max + 3;
    Console.WriteLine($"An example of overflow: {what}");
gives you **-2147483646**, equivalent to `min + 2`.

### Doubles
A double precision float has twice the amount of binary values than a single precision float.

    double a = 5;
    double b = 4;
    double c = 2;
    double d = (a + b) / c;
    Console.WriteLine(d);
    // 4.5

    double e = 19;
    double f = 23;
    double g = 8;
    double h = (e + f) / g;
    Console.WriteLine(h);
    // 5.25
There is also an inherent Min/MaxValue that can be called with doubles.

The range of doubles is **-1.79769313486232E+308** to **1.79769313486232E+308**

### Decimals
Decimals have smaller range than doubles, but greater precision.
The range of the decimal type is **-79228162514264337593543950335** to **79228162514264337593543950335**

In the following code:

    double a = 1.0;
    double b = 3.0;
    Console.WriteLine(a / b);

    decimal c = 1.0M;
    decimal d = 3.0M;
    Console.WriteLine(c / d);
You would see `0.333333333333333` and `0.3333333333333333333333333333` respectively, showcasing the more specified rounding in a Decimal.

There are additionally System built in math foundations, called by functions like Math.PI
All built in math functions are based on **Doubles**, so utilize doubles if using these functions.

# Conditional Logic
## IF statements

    int a = 5;
    int b = 6;
    if (a + b > 10)
        Console.WriteLine("The answer is greater than 10.");
    else
        Console.WriteLine("The answer is not greater than 10");
If you require multiple lines of code for an outcome, use brackets to denote this.

    if (a + b > 10)
    {
        Console.WriteLine("The answer is greater than 10");
        Console.WriteLine("This is a second line.")
    }