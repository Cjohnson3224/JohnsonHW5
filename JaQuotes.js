/*
   

   Random Jane Austen Quote Generator
   Author: Craig Johnson JR
   Date: April 8th, 2024  
   
   This script randomly generates a Jane Austen quote from
   a list of 10 quotes and writes that quote into the first
   quotation tag in the Web page.

*/
var quotes = [
   "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
   "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
   "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
   "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
   "Our scars make us know that our past was for real.",
   "I cannot speak well enough to be unintelligible.",
   "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
   ];
   function getQuoteOfDay() {
      var today = new Date().getDay();
      var index = today % quotes.length;
      return quotes[index];
  }
  
  document.addEventListener("DOMContentLoaded", function() {
      var quoteElement = document.querySelector("quote");
      if (quoteElement) {
          quoteElement.textContent = getQuoteOfDay();
      }
  });