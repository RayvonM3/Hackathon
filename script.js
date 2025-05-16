// Day of Week 1 of my true self paced learning journey. 
console.log("Day of Week 1 of my true self paced learning journey.");
// console.log is a function that prints the message to the console.
// I will be learning JavaScript, HTML, CSS, and React.js tailored for network engineers, and WEB3.0.Development

//Variables
let username = "Yuko";
const domain = "yukosdream.dao";
var status = "awakening";
// Variables are used to store data.
// let is used to declare a variable that can be changed later.
// const is used to declare a variable that cannot be changed.
// var is used to declare a variable that can be changed later, but it is not recommended to use var anymore.
// It is better to use let or const instead.

// Output

console.log("Username", username);
console.log("Domain", domain);

//Function
// A function is a block of code that performs a specific task.
// It can take inputs (called parameters) and return an output.
function greet(user) {
return `Hello, ${user}! This is your first step into mastering the present with the help of Virelai in a paired programming course`;
}
//call the function
console.log(greet(username));

//Day 2 - Dynamic Greetings using Functions
function greetUser() {
    // document.getElementById is used to get the element with the id "userInput" from the HTML document.
    // The value of the input field is then retrieved using .value.
    // This value is stored in the variable name.
    // The getElementById method is a way to access HTML elements by their unique id.
    // It is commonly used in JavaScript to manipulate the DOM (Document Object Model).
    const name = document.getElementById("userInput").value;
// check for entry input
/// name.trim() is used to remove any leading or trailing whitespace from the input string.
    // If the input is empty after trimming, it will return an empty string.
    if (name.trim() === "") {
        document.getElementById("greetingOutput").innerText = "Please enter your name.";
        return;
    }
    const timeofDay = getTimeGreeting();
    const customMessage = `Good ${timeofDay}, ${capitalizeFirstLetter(name)}. Welcome to the world of Javascript!`;
    document.getElementById("greetingOutput").innerText = customMessage;
}
// automate first letter casing using toUpperCase
    function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    // casing can be tricky, but string.charAt(0) is used to get the first character of the string.
    // string.slice(1) is used to get the rest of the string starting from the second character.
    // The + operator is used to concatenate the two parts together.
    // The toUpperCase() method is used to convert the first character to uppercase.
    // The result is a new string with the first letter capitalized and the rest of the string unchanged.
    // there are many ways to automate first letter casing, but this is one of the simplest ways.
    // An alternative learning source would be to use a library
    //  like lodash or underscore.js.
    // These libraries provide many utility functions for working with strings, arrays, and objects.
}

    // Helper function to get the time of day dynamically
    function getTimeGreeting() {
        const hour = new Date().getHours();
    
        if (hour >= 5 && hour < 12) {
             // the && operator is used to combine two conditions.
            // If the hour is between 5 and 12 (exclusive), it is morning.
            return "morning";
            } else if (hour >= 12 && hour < 18) {
            // If the hour is between 12 and 18 (exclusive), it is afternoon.
            // The hour is compared to the range of 12 to 18. which is 12 PM to 6 PM.
            return "afternoon";
            } else if (hour >= 18 && hour < 22) {
            // If the hour is between 18 and 22 (exclusive), it is evening.
            // The hour is compared to the range of 18 to 22. which is 6 PM to 10 PM.
            return "evening";
            } else {
            return "night";
        }
    }

// script for userComment custom message section history.
const comments = []; // the [] is used to create an empty array.
// An array is a data structure that can hold multiple values.

 // Defense again XSS attacks, this works by replacing the characters 
 // <, >, &, ", `, and ' with their HTML entity equivalents.
// This prevents the browser from interpreting them as HTML tags or attributes, which could lead to security vulnerabilities.
// the insertion of malicious code into a web application is deterred by this.
 function sanitizeInput(input) {
    //replace < > & " ` with safe equivalents
    return input
    .replace(/&/g, "&amp;") // &amp is the HTML entity for the & character.     // The g flag in the regular expression is used to perform a global search and replace.
    // This means that all occurrences of the specified character will be replaced, not just the first one.
    .replace(/</g, "&lt;") // &lt is the HTML entity for the < character.
    .replace(/>/g, "&gt;") // &gt is the HTML entity for the > character.
    .replace(/"/g, "&quot;") // &quot is the HTML entity for the " character.
    .replace(/`/g, "&#x60;") // &#x60; is the HTML entity for the ` character.
    .replace(/'/g, "&#x27;"); // &#x27; is the HTML entity for the ' character.
    // The replace() method is used to replace a specified value with another value in a string.
    // To expand upon this code and increase defenses against XSS attacks, you could also consider using a library like DOMPurify.
    // DOMPurify is a fast, tolerant XSS sanitizer for HTML, MathML, and SVG.
    // but if you want to use raw code, then this is a good start.


    // another set of syntax to stack upon this is to use the escape() function.
    // The escape() function is a built-in JavaScript function that encodes a string by replacing certain characters with their Unicode escape sequences.
    // This can help prevent XSS attacks by ensuring that any potentially dangerous characters are properly encoded.
    
    // other than the escape() function, you can also use the encodeURIComponent() function.
    // The encodeURIComponent() function is a built-in JavaScript function that encodes a URI component by replacing certain characters with their UTF-8 encoding.
    // This can help prevent XSS attacks by ensuring that any potentially dangerous characters are properly encoded.


 }
    


    
function submitComment() {
    //submitComment is a function that is called when the user clicks the submit button.
    // It retrieves the value of the input field with the id "userComment" and stores it in the variable comment.
    // The value is trimmed to remove any leading or trailing whitespace.
    // If the comment is empty, an alert is shown to the user.
    const commentInput = document.getElementById("userComment");
    let comment = commentInput.value.trim();

    if (comment === "") {
        
        // === is used to compare two values for equality.
        // If the comment is empty, an alert is shown to the user.
        // the reason there are three equal signs is because
        //  === is a strict equality operator.
        // It checks both the value and the type of the two operands.
        //if only one equal sign was used, it would be a loose equality operator.
        // It would convert the operands to the same type before comparing them.
        // This can lead to unexpected results if the types are different.
        // For example, 0 == "0" would be true, but 0 === "0" would be false.
        // It is generally recommended to use === instead of == to avoid type coercion issues.
        // Type coercion is the automatic conversion of one data type to another.
        // It can happen in JavaScript when using loose equality operators (== or !=).
        alert("Please enter a comment.");
        return;
    }
    // check for etheruem address and phone number
    if (comment.match(/(\d{3}[-.\s]?\d{3}[-.\s]?\d{4})/)) {
        console.warn("Warning: Sensitive information detected. = Phone number.");
        alert("Warning: This comment contains a phone number.");
        return;
    }
    if (comment.match(/(\d{1}[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?)/)) {
        console.warn("Warning: Sensitive information detected. = Phone number.");
        alert("Warning: This comment contains a phone number.");
        return;
    }
    // Checking for ethereum address
    if (comment.match(/0x[a-fA-F0-9]{40}/)) {
        console.warn("Warning: Sensitive information detected= Ethereum address.");
        alert("Warning: This comment contains an Ethereum address.");
         return;
    
    }
        //the /\d is a regular expression that matches any digit (0-9).
        // to only match letters you would use /\w/ instead.
        // to match eiither letters or digits, you would use /\w\d/.
        // the proper syntax for the regular expression is /\d{0}\w{x}\w\d{}.
        // The {0} is used to match zero or more occurrences of the preceding character.

        //if {} is left blank, it will match any number of digits.
        // The - is used to match a hyphen character.
        //the first / is the start of the regular expression, and the last / is the end of the regular expression.
        //the \ is used to escape the special character / which means that it is treated as a normal character.
        // is the / mandatory? 
        //if the / is not used, the regular expression will not work as expected.
        // this match phrase would filter specifically for a string of digits separated by hyphens.
        // to filter for other formats of strings, you can use different regular expressions.
        // For example, to match an email address, you could use the following regular expression
        // /\w+@\w+\.\w+/ which matches any word character (letters, digits, or underscores) followed by an @ symbol,

        // warning logic here
        // The console.warn() method is used to display a warning message in the console.
        // It is similar to console.log(), but it is used to indicate that something might be wrong or needs attention.

        // length check: prevent DoS or garbage inputs
    if (comment.length > 200) {
        console.warn("Warning: Large string attempt.");
        alert("Comment is too long. Please limit to 200 characters.");
        return;
    }

    //sanitize + format
    comment = sanitizeInput(comment); 
    // The sanitizeInput() function is called to sanitize the comment input.
    // This function replaces potentially dangerous characters with their HTML entity equivalents.
    // This prevents the browser from interpreting them as HTML tags or attributes, which could lead to security vulnerabilities.
    // The comment is then formatted to ensure it is safe to display on the web page.
    const timestamp = new Date().toLocaleString();
    // The toLocaleString() method is used to convert the date and time to a string using the local time zone and format.
    // This provides a more user-friendly representation of the date and time.
    const formatted = `${timestamp}: ${comment}`;
    comments.push(formatted);
    updateCommentList();
    commentInput.value = ""; // Clear the input field after submission
    // The push() method is used to add a new element to the end of an array.
    // The formatted comment is created by concatenating the timestamp and the sanitized comment.
    // In this case, the comment is added to the comments array.
    // The updateCommentList() function is called to update the displayed list of comments.
    // The input field is cleared after submission by setting its value to an empty string.
    // This allows the user to enter a new comment without having to manually delete the previous one.
}

    function updateCommentList() {
    // updateCommentList is a function that updates the displayed list of comments.
    // It retrieves the element with the id "commentList" from the HTML document.

    const commentList = document.getElementById("commentList");
    commentList.innerHTML = ""; // Clear previous comments
    // The innerHTML property is used to set or get the HTML content of an element.
    // In this case, it is set to an empty string to clear the previous comments.
    
    comments.forEach((c, i) => {
        const li = document.createElement("li");
        li.textContent = c;
        commentList.appendChild(li);
        // The forEach() method is used to iterate over each element in the comments array.
    // It takes a callback function as an argument, which is executed for each element in the array.
    // The callback function takes two arguments: the current element (c) and its index (i).
        // The createElement() method is used to create a new HTML element.
        // In this case, a new list item (li) is created for each comment.
        // The textContent property is used to set the text content of the list item to the comment.
        // The appendChild() method is used to add the new list item to the comment list.
        // This creates a new list item for each comment and adds it to the unordered list in the HTML document.
        // The index (i) is not used in this case, but it can be useful if you want to display the comment number or perform some other operation based on the index.
        // The forEach() method is a higher-order function that allows you to iterate over an array and perform an action for each element.
        // It is a more concise and readable way to loop through an array compared to using a traditional for loop.
    });


}
        //Learning to use setTimeout() and setInterval() to simulate live activity
        // setTimeout() is a built-in JavaScript function that allows you to execute a function after a specified delay.
        // It takes two arguments: the function to execute and the delay in milliseconds.
        //-- Today i will be coding a returning user welcome bar and a dynamic score simulation.
        //

        //--real-time Welcome Logic
        setTimeout(() => {
            const bar = document.getElementById("WelcomeBar");
            bar.innerText = "Welcome back, " + username + "!";
            bar.style.backgroundColor = "#cce3ff";
            bar.style.padding = "1rem";
            bar.style.borderRadius = "0.5rem";
            bar.style.fontSize = "1.5rem";
            bar.style.textAlign = "center";
            bar.style.position = "fixed";
        }, 2000);
        // the way this setTimeout() function works is that it will execute the function after a delay of 2000 milliseconds (2 seconds).
        
        // The function will change the inner text of the element with the id "WelcomeBar" to "Welcome back, " + user.
        //--let score = 0; 

        let score = 0;
        let decayInterval = null;
        const button = document.getElementById("scoreButton");
        const scoreDisplay = document.getElementById("scoreDisplay");

        if (button && scoreDisplay) {
        button.addEventListener("click", () => {
            score += Math.floor(Math.random() * 10) + 1;
            scoreDisplay.innerText = `Fantasic! Your score is now ${score}`;
            scoreDisplay.style.color = "green";
            scoreDisplay.style.fontSize = "2rem";
            scoreDisplay.style.fontWeight = "bold";
            scoreDisplay.style.textAlign = "center";

        //-- Auto-decay of score (like leaderboard energy)
           if (!decayInterval) {
                decayInterval = setInterval(() => {
            if (score > 0) {
                score -= 1;
                scoreDisplay.innerText = `Well done! You're at ${score}`;
             } else {
                    clearInterval(decayInterval);
                    decayInterval = null;
            }
        }, 3000); 

        }
    });

}

        // This specific setInterval() function will execute the function every 500 milliseconds (0.5 seconds).
        // The function will check if the score is greater than 0. 
        // The difference from this setTimeout() function is that it will keep executing the function every 500 milliseconds until the score reaches 0.