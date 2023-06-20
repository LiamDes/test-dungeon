# Java ☕
Java is a language that has been around since 1995.
The language runs on the JVM - Java Virtual Machine. Because of this system, there are no OS differences per running code. In your IDE, the JVM will run as its own terminal.

File types for Java are, conveniently, `.java`

Single line comments in Java are denoted with `//`

Multi line comments are denoted with `/* comment here */`

Within VSCode you can denote a new Java Project within the Explorer tab options.

## Writing Java - **BASICS**
The basic structure of a java file starts off with a class. For this, Java can be considered a **Class based language**. A class is set to acheive a single concept.

    public class HelloWorld {
    
    }
The class name, obviously, is **HelloWorld**. Class names, like in many other languages, are denoted with **PascalCase**.

Inside the HelloWorld class will go a `main()` function:

    public class HelloYou {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }

- `public` - DEFINE
- `static` - DEFINE
- `void` - DEFINE
- `String[] args` - A placeholder for information we want to pass into our program. This syntax is necessary for the program to run.
- `System.out.println();` - The equivalency of print(), console.log(), Console.WriteLine();, etc. Set the string or variable to be printed as the outcome here.
    - `System` is a built-in Java class that contains useful tools for our programs.
    - `out` is short for “output”.
    - `println` is short for “print line”.

System.out holds other print methods as well, eg. `System.out.print();` will print within the same line.

Because this is the primary class of the file, in order to run, the file name hold this class **must** match the class- eg, the examples here must be held in either `HelloWorld.java` or `HelloYou.java`

You may also notice through the use of `;` that Java does not interpret whitespace. Any usage of such is purely for **user readability**.
You might also notice that class definitions and methods do **not** end with a `;`.

### A Note About Compiling
Java must compile before executing. Much like Python, if Java runs into an error, it will cease compiling at that line and provide the error.

# Running a Java File
There are two steps to running a single Java file.
Direct yourself to the location of, example file `HelloWorld.java`, and use the terminal to produce a corresponding class file.

    javac HelloWorld.java
once the class file is compiled, you can run the file through:

    java HelloWorld
This should execute the compiled code in your terminal.

**Errors** will look like this in your terminal if there is an issue making the class file:

    javac Compiling.java
    Compiling.java:6: error: ';' expected
        System.out.println("Java statements end with a semicolon.")

## Types and Variables
Reference help: [Code Academy Cheatsheet](https://www.codecademy.com/learn/learn-java/modules/learn-java-variables/cheatsheet)

Java understands the following Primitive Types:
- `int` - allows values between -2,147,483,648 and 2,147,483,647, inclusive.
- `char` - a single string character, eg. `'y'`
- `boolean` - utilizes lowercase, `true` or `false`
- `byte`
- `long`
- `short`
- `double` - can hold decimals as well as very large and very small numbers. The maximum value is 1.797,693,134,862,315,7 E+308, which is approximately 17 followed by 307 zeros. The minimum value is 4.9 E-324, which is 324 decimal places
- `float`
Java also uses what are called Object Types:
- `String` - supports the `\` escape character

Declaring these within a code would look like this-

    // file name Types.java

    public class Types {
        public static void main(String[] args) {
        String name = "Liam";
        int yearBorn = 1992;
        System.out.println(name);
        }
    }
You do not need to necessarily declare what is stored in a variable initially, but you will always need to at least declare the type.

    int age;
    double salaryRequirement;
    boolean isEmployed;
    String greeting = "Hello World";
    String salutations = new String("Hello World");
Java typing is **static**, it is determined at the point of compiling.

A **variable** starts with a valid letter, `$`, or `_`
Variables are most frequently named in camelCase

### Operators
- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to
- `==` equal to
- `!=` not equal to
- `++` increment
- `--` decrement