"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { IconPlayerPlay, IconRefresh, IconChevronLeft, IconChevronRight, IconCode, IconTrophy, IconBrandPython, IconBrandJavascript } from '@tabler/icons-react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

export default function CodeEditor() {
  const [code, setCode] = useState('print("Hello, World!")');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [mode, setMode] = useState('challenge');
  const [language, setLanguage] = useState('python'); // 'python' or 'javascript'

  const challenges = {
    python: [
      {
        title: "Hello, World!",
        description: "Write a program that prints 'Hello, World!'",
        initialCode: 'print("Hello, World!")',
        expectedOutput: "Hello, World!",
      },
      {
        title: "Sum Two Numbers",
        description: "Create a program that adds two numbers (a=5, b=3) and prints the result",
        initialCode: "a = 5\nb = 3\n# Write your code here\nprint(a + b)",
        expectedOutput: "8",
      },
      {
        title: "Even or Odd",
        description: "Write a program that determines if a number is even or odd",
        initialCode: "number = 7\n# Write your code here to print 'even' or 'odd'",
        expectedOutput: "odd",
      },
      {
        title: "Fibonacci Sequence",
        description: "Generate the first 10 numbers of the Fibonacci sequence",
        initialCode: "def fibonacci(n):\n    # Write your code here\n    pass\n\n# Print first 10 numbers\n",
        expectedOutput: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34",
      },
      {
        title: "Palindrome Check",
        description: "Write a function to check if a string is a palindrome",
        initialCode: "def is_palindrome(text):\n    # Write your code here\n    pass\n\n# Test the function\nprint(is_palindrome('radar'))",
        expectedOutput: "True",
      }
    ],
    javascript: [
      {
        title: "Hello, World!",
        description: "Write a program that logs 'Hello, World!'",
        initialCode: 'console.log("Hello, World!");',
        expectedOutput: "Hello, World!",
      },
      {
        title: "Array Operations",
        description: "Create an array, add numbers 1-5, and calculate the sum",
        initialCode: "const numbers = [];\n// Add numbers 1-5 to the array\n// Calculate and log the sum",
        expectedOutput: "15",
      },
      {
        title: "String Reversal",
        description: "Write a function that reverses a string",
        initialCode: "function reverseString(str) {\n    // Write your code here\n}\n\nconsole.log(reverseString('hello'));",
        expectedOutput: "olleh",
      },
      {
        title: "Prime Numbers",
        description: "Write a function to check if a number is prime",
        initialCode: "function isPrime(num) {\n    // Write your code here\n}\n\nconsole.log(isPrime(17));",
        expectedOutput: "true",
      },
      {
        title: "Array Filter",
        description: "Filter out all numbers greater than 10 from an array",
        initialCode: "const numbers = [5, 12, 8, 15, 3, 20, 9];\n// Write your code here to filter and log numbers <= 10",
        expectedOutput: "[5, 8, 3, 9]",
      }
    ]
  };

  const sampleTemplates = {
    python: [
      {
        name: "Basic Calculator",
        code: '# Simple calculator\nnum1 = 10\nnum2 = 5\n\n# Addition\nprint(f"{num1} + {num2} = {num1 + num2}")\n\n# Subtraction\nprint(f"{num1} - {num2} = {num1 - num2}")\n\n# Multiplication\nprint(f"{num1} * {num2} = {num1 * num2}")\n\n# Division\nprint(f"{num1} / {num2} = {num1 / num2}")',
      },
      {
        name: "List Operations",
        code: '# Working with lists\nnumbers = [1, 2, 3, 4, 5]\n\n# Print the list\nprint("List:", numbers)\n\n# Sum of numbers\nprint("Sum:", sum(numbers))\n\n# Average\nprint("Average:", sum(numbers)/len(numbers))',
      },
      {
        name: "File Handling",
        code: '# File operations example\n\n# Writing to a file\nwith open("example.txt", "w") as file:\n    file.write("Hello, File!")\n\n# Reading from a file\nwith open("example.txt", "r") as file:\n    content = file.read()\n    print("File content:", content)',
      },
      {
        name: "Error Handling",
        code: '# Error handling example\ndef divide_numbers(a, b):\n    try:\n        result = a / b\n        print(f"{a} divided by {b} is {result}")\n    except ZeroDivisionError:\n        print("Error: Cannot divide by zero")\n    except Exception as e:\n        print(f"Error: {e}")\n\n# Test the function\ndivide_numbers(10, 2)\ndivide_numbers(10, 0)',
      }
    ],
    javascript: [
      {
        name: "Array Methods",
        code: '// Working with arrays\nconst numbers = [1, 2, 3, 4, 5];\n\n// Map\nconst doubled = numbers.map(n => n * 2);\nconsole.log("Doubled:", doubled);\n\n// Filter\nconst evenNumbers = numbers.filter(n => n % 2 === 0);\nconsole.log("Even numbers:", evenNumbers);\n\n// Reduce\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log("Sum:", sum);',
      },
      {
        name: "Promise Example",
        code: '// Promise example\nfunction delay(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function example() {\n  console.log("Start");\n  await delay(1000);\n  console.log("After 1 second");\n  await delay(1000);\n  console.log("After 2 seconds");\n}\n\nexample();',
      },
      {
        name: "Object Methods",
        code: '// Working with objects\nconst person = {\n  name: "John",\n  age: 30,\n  greet() {\n    console.log(`Hello, my name is ${this.name}`);\n  }\n};\n\n// Object methods\nconsole.log(Object.keys(person));\nconsole.log(Object.values(person));\nperson.greet();',
      },
      {
        name: "Error Handling",
        code: '// Error handling example\nasync function fetchData() {\n  try {\n    // Simulating an API call\n    throw new Error("Network error");\n  } catch (error) {\n    console.error("Error:", error.message);\n  } finally {\n    console.log("Cleanup code");\n  }\n}\n\nfetchData();',
      }
    ]
  };

  const decodeBase64 = (str) => {
    try {
      return atob(str);
    } catch (e) {
      return str;
    }
  };

  const runCode = async () => {
    setIsLoading(true);
    setOutput('');

    try {
      const response = await fetch('/api/code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
          language
        })
      });

      const data = await response.json();
      
      if (data.stdout) {
        setOutput(decodeBase64(data.stdout));
      } else if (data.stderr) {
        setOutput(`Error: ${decodeBase64(data.stderr)}`);
      } else if (data.compile_output) {
        setOutput(`Compilation Error: ${decodeBase64(data.compile_output)}`);
      } else {
        setOutput('No output generated');
      }

    } catch (error) {
      console.error('Error:', error);
      setOutput('Error running code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetCode = () => {
    if (mode === 'challenge') {
      setCode(challenges[language][currentChallenge].initialCode);
    } else {
      setCode(language === 'python' ? '# Write your Python code here\n' : '// Write your JavaScript code here\n');
    }
    setOutput('');
  };

  const nextChallenge = () => {
    if (currentChallenge < challenges[language].length - 1) {
      setCurrentChallenge(prev => prev + 1);
      setCode(challenges[language][currentChallenge + 1].initialCode);
      setOutput('');
    }
  };

  const prevChallenge = () => {
    if (currentChallenge > 0) {
      setCurrentChallenge(prev => prev - 1);
      setCode(challenges[language][currentChallenge - 1].initialCode);
      setOutput('');
    }
  };

  const loadTemplate = (template) => {
    setCode(template.code);
    setOutput('');
  };

  const getLanguageExtension = () => {
    return language === 'python' ? [python()] : [javascript({ jsx: true })];
  };

  useEffect(() => {
    if (mode === 'challenge') {
      setCode(challenges[language][currentChallenge].initialCode);
    } else {
      setCode('# Write your Python code here\n');
    }
  }, [mode, currentChallenge, language]);

  return (
    <div className="w-full max-w-5xl mx-auto p-2 sm:p-4">
      <div className="bg-[#1e1e1e] rounded-lg shadow-xl overflow-hidden">
        {/* Editor Header */}
        <div className="bg-[#252526] p-2 flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#3c3c3c] gap-2">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            {/* Language Switch */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage('python')}
                className={`px-2 sm:px-3 py-1.5 rounded flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                  language === 'python' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-[#3c3c3c] text-gray-300'
                }`}
              >
                <IconBrandPython className="w-4 h-4" />
                Python
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage('javascript')}
                className={`px-2 sm:px-3 py-1.5 rounded flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                  language === 'javascript' 
                    ? 'bg-yellow-600 text-white' 
                    : 'bg-[#3c3c3c] text-gray-300'
                }`}
              >
                <IconBrandJavascript className="w-4 h-4" />
                <span className="hidden xs:inline">JavaScript</span>
                <span className="xs:hidden">JS</span>
              </motion.button>
            </div>

            {/* Mode Switch */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMode('free')}
                className={`px-2 sm:px-3 py-1.5 rounded flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                  mode === 'free' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-[#3c3c3c] text-gray-300'
                }`}
              >
                <IconCode className="w-4 h-4" />
                <span className="hidden xs:inline">Free Code</span>
                <span className="xs:hidden">Free</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMode('challenge')}
                className={`px-2 sm:px-3 py-1.5 rounded flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                  mode === 'challenge' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-[#3c3c3c] text-gray-300'
                }`}
              >
                <IconTrophy className="w-4 h-4" />
                <span className="hidden xs:inline">Challenges</span>
                <span className="xs:hidden">Tasks</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Challenge Navigation or Free Code Templates */}
        <div className="p-2 sm:p-4 bg-slate-800 border-b border-slate-700">
          {mode === 'challenge' ? (
            <div className="flex justify-between items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevChallenge}
                disabled={currentChallenge === 0}
                className="px-2 sm:px-3 py-1 text-slate-400 hover:text-white disabled:opacity-50"
              >
                <IconChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              <div className="text-center px-2">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                  Challenge {currentChallenge + 1}: {challenges[language][currentChallenge].title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300">
                  {challenges[language][currentChallenge].description}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextChallenge}
                disabled={currentChallenge === challenges[language].length - 1}
                className="px-2 sm:px-3 py-1 text-slate-400 hover:text-white disabled:opacity-50"
              >
                <IconChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          ) : (
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Quick Templates</h2>
              <div className="flex flex-wrap gap-2">
                {sampleTemplates[language].map((template, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => loadTemplate(template)}
                    className="px-3 py-1.5 bg-[#3c3c3c] hover:bg-[#4c4c4c] text-white rounded text-sm"
                  >
                    {template.name}
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Editor Area */}
        <div className="flex flex-col lg:flex-row">
          {/* Editor Section */}
          <div className="flex-1">
            {/* Code Editor */}
            <div className="p-2 sm:p-4">
              <CodeMirror
                value={code}
                height="300px"
                theme={vscodeDark}
                extensions={getLanguageExtension()}
                onChange={(value) => setCode(value)}
                basicSetup={{
                  lineNumbers: true,
                  highlightActiveLineGutter: true,
                  highlightSpecialChars: true,
                  foldGutter: true,
                  dropCursor: true,
                  allowMultipleSelections: true,
                  indentOnInput: true,
                  bracketMatching: true,
                  closeBrackets: true,
                  autocompletion: true,
                  rectangularSelection: true,
                  crosshairCursor: true,
                  highlightActiveLine: true,
                  highlightSelectionMatches: true,
                  closeBracketsKeymap: true,
                  defaultKeymap: true,
                  searchKeymap: true,
                  historyKeymap: true,
                  foldKeymap: true,
                  completionKeymap: true,
                  lintKeymap: true,
                }}
                className="border border-[#3c3c3c] rounded text-sm sm:text-base"
              />
            </div>

            {/* Controls */}
            <div className="p-2 sm:p-4 bg-[#252526] flex justify-between items-center border-t border-[#3c3c3c]">
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={runCode}
                  disabled={isLoading}
                  className="px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded flex items-center gap-2 text-sm sm:text-base disabled:opacity-50"
                >
                  <IconPlayerPlay className="w-4 h-4 sm:w-5 sm:h-5" />
                  {isLoading ? 'Running...' : 'Run Code'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetCode}
                  className="px-3 sm:px-4 py-2 bg-[#3c3c3c] hover:bg-[#4c4c4c] text-white rounded flex items-center gap-2 text-sm sm:text-base"
                >
                  <IconRefresh className="w-4 h-4 sm:w-5 sm:h-5" />
                  Reset
                </motion.button>
              </div>
            </div>
          </div>

          {/* Output Panel */}
          <div className="lg:w-80 bg-[#252526] border-t lg:border-t-0 lg:border-l border-[#3c3c3c]">
            <div className="p-2 sm:p-3 border-b border-[#3c3c3c]">
              <h3 className="text-gray-300 font-semibold text-sm sm:text-base">Output</h3>
            </div>
            <div className="p-2 sm:p-4 min-h-[100px] lg:min-h-[400px]">
              <pre className="text-xs sm:text-sm font-mono text-gray-300 whitespace-pre-wrap">
                {output || 'Run your code to see the output...'}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
