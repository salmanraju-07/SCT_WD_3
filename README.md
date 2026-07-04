# Smart Quiz Game - Interactive Web Quiz App
### Task 3 - SkillCraft Technology Web Development Internship
## 📌 Project Overview
A dynamic, interactive quiz application built with pure HTML, CSS & JavaScript. Supports multiple question types, real-time progress tracking, score calculation, and detailed answer review. Created as Task 3 for the SkillCraft Technology Web Development Internship.
**🔗 Live Demo:** https://salmanraju-07.github.io/SCT_WD_3/
**💻 GitHub Repo:** https://github.com/salmanraju-07/SCT_WD_3
## 🚀 Features
- **3 Question Types**: 
    - Single Choice - Radio buttons
    - Multiple Choice - Checkboxes with multi-select
    - Fill in the Blank - Text input with validation
- **Progress Tracking**: Visual progress bar + dynamic question counter
- **Smart Navigation**: Previous/Next buttons with answer persistence
- **Answer Validation**: Next button enables only after valid input
- **Instant Scoring**: Auto-calculates score + percentage on completion
- **Answer Review**: Shows correct vs user answers with color coding
- **Responsive UI**: Mobile-first design, works on all screen sizes
- **No Dependencies**: 100% Vanilla JS, no frameworks or libraries
## 🛠️ Tech Stack
- **HTML5** - Semantic markup and structure
- **CSS3** - Flexbox, Grid, Gradients, Media Queries, Transitions
- **JavaScript ES6** - DOM manipulation, Event handling, State management
- **GitHub Pages** - Deployment and hosting
## ⚙️ Core Logic Highlights
1. **State Management**: `userAnswers[]` array stores responses for navigation
2. **Dynamic Rendering**: Questions load based on `type` property in `quizData`
3. **Validation Engine**: Handles single select, multi-select arrays, and case-insensitive text matching
4. **Score System**: Real-time calculation with performance messages based on percentage
## 📂 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/salmanraju-07/SCT_WD_3.git
