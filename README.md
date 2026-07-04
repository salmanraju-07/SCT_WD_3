# 🧠 Smart Quiz App
An interactive quiz web app with multiple-choice questions, score tracking, timer, and instant feedback. Built with vanilla HTML, CSS, and JavaScript.
*🔗 Live Demo:* https://salmanraju-07.github.io/SCT_WD_3/  
*💻 GitHub Repo:* https://github.com/salmanraju-07/SCT_WD_3
### *✨ Features*
- *Multiple Choice Questions* - 4 options per question with single correct answer
- *Score Tracking* - Live score updates as you progress through the quiz
- *Instant Feedback* - Green for correct, red for wrong with correct answer highlight
- *Timer Per Question* - Countdown timer to increase challenge
- *Progress Indicator* - Shows current question number out of total
- *Results Page* - Final score, percentage, and performance message
- *Retake Quiz* - Restart button to attempt quiz again
- *Responsive Design* - Works smoothly on mobile, tablet, and desktop
- *No Dependencies* - Pure HTML, CSS, and Vanilla JS
### *🛠️ Built With*
- *HTML5* - Semantic structure for questions and options
- *CSS3* - Flexbox, transitions, gradients, and responsive media queries
- *JavaScript* - Array methods, DOM manipulation, `setTimeout` for timer, Event handling
### *📚 Key Learnings*
1. *Array & Object Handling* - Storing questions, options, and answers in JS objects
2. *State Management* - Tracking current question, score, and timer without frameworks
3. *Conditional Rendering* - Dynamically showing questions, feedback, and results page
4. *Timer Logic* - Using `setInterval` + `clearInterval` for per-question countdown
5. *Event Delegation* - Handling option clicks and disabling inputs after selection
6. *UI/UX Feedback* - Using CSS classes to show correct/incorrect states instantly
### *🚀 Getting Started*
1. Clone the repository:
git clone https://github.com/salmanraju-07/SCT_WD_3.git
2. Open `index.html` in your browser
3. Start the quiz and test your knowledge
### *📂 File Structure*
SCT_WD_3/
├── index.html    # Quiz structure + layout
├── style.css     # Styling + responsive design + animations
├── script.js     # Quiz logic, timer, score calculation
└── README.md     # Documentation
### *🎯 How It Works*
1. *Questions stored as array* - Each object has `question`, `options[]`, `correctAnswer`
2. *On option click* - Checks answer, updates score, shows feedback, loads next question
3. *Timer runs out* - Auto-marks as wrong and moves to next question
4. *End of quiz* - Calculates percentage and shows result message based on score
### *🎯 Future Enhancements*
- [ ] Question categories: HTML, CSS, JS, Aptitude
- [ ] Difficulty levels: Easy, Medium, Hard
- [ ] Save high score to localStorage
- [ ] Add questions from external JSON/API
- [ ] Show explanations for correct answers
- [ ] Dark mode toggle

### *👨‍💻 Author*
*Salman Raju*  
GitHub: [@salmanraju-07](https://github.com/salmanraju-07)

---

*⭐ If you liked this project, give it a star!*  
This is Task 3 of my Web Development series. Built to practice JavaScript logic and DOM manipulation.

---

Want me to tweak it? If your quiz has specific topics like "JavaScript Quiz" or a set number of questions, tell me and I’ll make it exact.
