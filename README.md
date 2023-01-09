# Advanced exercises

All exercises are focused on using **javascript** combined with beginer exercises knowledge.

It's highly suggested to finnish [javascript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) course by the end of these challenges.

---

---

## Light switch

Design and implement light switch which should have following features:

- switch toggling theme from light to dark
- range slider which changes lighting gradually

> Starter code is provided

---
---
 ## Form validation

Create contact form that will have following features

- name input that accepts 2 words split with spacing, each word must have at least 5 characters 
- email input which accepts up to 50 characters and must contain "@" and ".com" strings
- birth date input which accepts dates that are older that 18 years
- description input which is allowed to be empty
- 2 buttons
  - check which checks if all fields are valid and enables submit button to be clicked
  - submit which is disabled by default and is enabled only if check button is clicked and everything is valid
- error messages should be displayed under input fields with appropriate message
---
---
## Task list

Design and implement tasks app which should have following features:

- search functionality
- displayed items should be clickable, on click the search input should be changed to item value, and the items list shoud only display clicked item
- user should be able to select items using <kbd>Up</kbd>, <kbd>Down</kbd> and <kbd>Enter</kbd>
  - if no item is selected both <kbd>Up</kbd> and <kbd>Down</kbd> arrow should select first item
  - on <kbd>Enter</kbd> click search input should be filled with its value
  - if selected element is first and <kbd>Up</kbd> arrow is pressed it should switch selection to last element, the same applies for last element and <kbd>Down</kbd> arrow
- saving data in **cookie** or **localStorage**
> Starter code is provided

---

---

## Tic-Tac-Toe game

Design and implement tic-tac-toe game which should have following features:

- both players should have **names**
- game always starts with X player
- if it's a draw the game should restart itself
- if there is a winner the game should display which player won using alert

> Implement using [Sweet alert](https://sweetalert2.github.io/)

---

---

## Palindrome checker

Design and implement palindrome checker which should have following features:

- on start ask user for the amount of characters the word will have
- generate as much inputs as user defined in previous step
- inputs only accept <kbd>A</kbd> - <kbd>Z</kbd>, <kbd>a</kbd> - <kbd>z</kbd> and <kbd>Space</kbd>
- displays error message if the input criteria aren't met
- implement add button which will append new input field
- implement X button which will remove one input field
- on each input change app should render if the current string is palindrome or not

---

---

## Quiz app

Design and implement Quiz app which should have following features:

- have at least 10 questions which have multiple aswers
- questions should have either one or more correct aswers
- on correct answer load next question
- on incorrect answer display how many aswers were correct and prompt user if he wants to start new quiz
- if all questions were answered correctly display success message
- questions should always be displayed in different order

---

---

## Pomodoro clock

Design and implement pomodoro clock which should have following features:

- should have 3 tabs which say "Pomodoro", "Short Break" and "Long Break"
- pomodoro tab displays 25 minutes, short break 5 minutes, long break 10 minutes
- start button which starts the timer or resumes if paused, stop which pauses timer, reset which resets timer back to its starting value
- browser tab should display pomodoro clock icon and timers value

---

---

## Slider

Design and implement image slider which should have following features:

- display left and right arrows and slide images according to which one is clicked
- while cursor is inside slider allow user to slide images using keyboard buttons
- on click image should take up 90% of viewport, and while expanded should display X button at top right corner which shrinks image back to its original size
- all functionalites should persist in expanded mode as they are in shrinked mode
