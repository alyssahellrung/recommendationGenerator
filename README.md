# LETTER OF RECOMMENDATION GENERATOR  

## Description  
This is a command-line application that dynamically generates a letter of recommendation (in markdown) from a user's input.  

## Table of Contents

* [Technologies Used](#technologies-used)

* [Dependencies](#dependencies)

* [How to Use](#how-to-use)

* [How I Made This](#how-i-made-this)

* [GitHub Repo](#link-to-github-repo)

* [Future Development Ideas](#future-development-ideas)

## Technologies Used  
Built in Visual Studio with    
Javascript  
Node.js    

## Dependencies  
Inquirer  
fs  

## How to Use  
1) Install Inquirer using npm install.  
2) Run the program by typing "node index.js" in the command line.    
![image]() 
3) A series of questions will appear, one by one. They will ask you to input:  
  --a description of your professional role and where you work    
  ![image]()  
  --how long you have known the person you are recommending and in what capacity      
  --an honest evaluation of their skills, accomplishments, ability to collaborate, etc.  
  --a summary of your evaluation of the person you are recomending  
  --your choice out of four rating levels (from "highly recommend" down to "I do not recommend")    
  --your full name  
  --your professional title or role  
  --the full name of the person you are recommending  
  --what pronouns the recommendee uses 
  ![image]()  
4) Once all of the questions are answered, you will see a success message, and a new file called "REC.md" will appear in your directory.   
![image]()  
This file will include the information you entered, but with some language added and correct letter formatting.  
![image]()    
  

## How I Made This    
I wrote two Javascript files, one (index.js) that handled the Inquirer prompts and the writeFile function, and the other (generateMarkdown.js) that laid out the structure of the REC.md file that I was putting together using template literals as a way to both plan out the page and handle the responses coming in from the user.    

Because I brought the generateMarkdown.js file over to index.js and assigned it to the const "markdown", I was able to inject that template into the writeFile function in index.js.    

## Link to GitHub Repo      
https://github.com/alyssahellrung/recommendationGenerator  

## Future Development Ideas  
--Style it out (make it look more like a letter)  
--Figure out a way to add a signature?   