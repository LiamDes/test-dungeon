// See https://aka.ms/new-console-template for more information
string myName = "Liam";

Console.WriteLine(myName.Length);

string greeting = "      Hello World!       ";
Console.WriteLine($"[{greeting}]"); 
// [      Hello World!       ]

string trimmedGreeting = greeting.TrimStart();
Console.WriteLine($"[{trimmedGreeting}]");
// [Hello World!       ]

trimmedGreeting = greeting.TrimEnd();
Console.WriteLine($"[{trimmedGreeting}]");
// [      Hello World!]

trimmedGreeting = greeting.Trim();
Console.WriteLine($"[{trimmedGreeting}]");
// [Hello World!]

string songLyrics = "You say goodbye, and I say hello";
Console.WriteLine(songLyrics.Contains("goodbye"));
Console.WriteLine(songLyrics.Contains("greetings"));

int a = 10;
int b = 3;
Console.WriteLine(a / b); 
// 3