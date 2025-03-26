import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <div className="resources-container">
      <h1>Java Lab Resources</h1>
      <div className="resource-section">
        <h2>📚 Theory Topics</h2>
        <ul>
          <li>Java Basics (Data types, Variables, Keywords)</li>
          <li>Control Structures (if-else, switch, loops)</li>
          <li>Arrays and Strings</li>
          <li>OOP Concepts (Class, Object, Inheritance, Polymorphism)</li>
          <li>Exception Handling & File Handling</li>
          <li>Collections Framework Basics</li>
        </ul>
      </div>

      <div className="resource-section">
        <h2>💻 Important Programs</h2>
        <ul>
          <li>Factorial of a number</li>
          <li>Prime number check</li>
          <li>Palindrome program</li>
          <li>Reverse a string</li>
          <li>Simple Calculator using switch</li>
          <li>Array operations (search, sort)</li>
          <li>OOP Example (inheritance & overriding)</li>
        </ul>
      </div>

      <div className="resource-section">
        <h2>📝 Viva Questions</h2>
        <ul>
          <li>What is JVM, JDK, JRE?</li>
          <li>Difference between overloading and overriding</li>
          <li>What is abstraction and encapsulation?</li>
          <li>Difference between Array and ArrayList</li>
          <li>Explain final, finally, finalize keywords</li>
        </ul>
      </div>

      <div className="resource-section">
        <h2>🔗 Useful Links</h2>
        <ul>
          <li><a href="https://docs.oracle.com/javase/tutorial/" target="_blank" rel="noreferrer">Java Official Tutorial</a></li>
          <li><a href="https://www.w3schools.com/java/" target="_blank" rel="noreferrer">W3Schools Java</a></li>
          <li><a href="https://www.geeksforgeeks.org/java/" target="_blank" rel="noreferrer">GeeksforGeeks Java Section</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
