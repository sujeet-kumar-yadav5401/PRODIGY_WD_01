# Responsive Landing Page

A modern and fully responsive landing page developed as part of **Internship Task 01**.

The project demonstrates the use of **HTML5, CSS3, and JavaScript** to create a responsive website with a fixed and interactive navigation menu.

---

## 📌 Task Overview

The objective of this task was to build a responsive landing page featuring an interactive navigation menu that:

- Remains fixed while scrolling
- Changes its appearance when the page is scrolled
- Provides hover effects for navigation items
- Highlights the currently active section
- Includes a responsive mobile navigation menu
- Works across desktop, tablet, and mobile devices

---

## ✨ Features

- Fixed navigation bar
- Dynamic navigation styling on scroll
- Interactive hover effects
- Active navigation link highlighting
- Responsive hamburger menu
- Smooth scrolling between sections
- Responsive desktop, tablet, and mobile layouts
- Modern gradient-based UI
- Interactive cards with hover animations
- Semantic HTML structure
- Basic accessibility support using ARIA attributes

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and semantic elements |
| CSS3 | Styling, responsive layouts, animations, and transitions |
| JavaScript | Scroll detection, active navigation, and mobile menu functionality |

---

## 📂 Project Structure

```text
responsive-landing-page/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### File Description

| File | Description |
|------|-------------|
| `index.html` | Contains the structure and content of the landing page |
| `style.css` | Contains the complete styling, responsive layouts, and visual effects |
| `script.js` | Handles scroll-based navigation and mobile menu interactions |
| `README.md` | Project documentation |

---

## 🧭 Navigation Functionality

### Fixed Navigation

The navigation bar uses CSS `position: fixed` to remain visible while scrolling through the page.

### Scroll-Based Styling

JavaScript detects the scroll position and dynamically adds the `scrolled` class to the navigation bar.

```javascript
navbar.classList.toggle("scrolled", window.scrollY > 40);
```

When the user scrolls down, the navigation background changes and a shadow effect is applied.

### Active Navigation

The JavaScript checks the position of each page section and automatically updates the active navigation link.

This allows users to easily identify which section they are currently viewing.

### Mobile Navigation

On smaller screens, the navigation links are hidden and replaced with a hamburger menu.

The menu can be opened and closed using the navigation button.

---

## 📱 Responsive Design

The website adapts to different screen sizes using CSS media queries.

### Desktop

- Full navigation menu
- Multi-column card layouts
- Large hero section
- Decorative background elements

### Tablet

- Adjusted spacing and typography
- Flexible content layout
- Responsive card arrangement

### Mobile

- Hamburger navigation menu
- Single-column layouts
- Responsive typography
- Mobile-friendly spacing
- Optimized content presentation

---

## 📄 Website Sections

### 1. Home

The hero section introduces the landing page and provides a call-to-action button.

### 2. About

Provides an introduction and explains the purpose and technologies used in the project.

### 3. Services

Highlights the three core technologies demonstrated:

- HTML
- CSS
- JavaScript

### 4. Contact

Provides a simple contact call-to-action section.

---

## 🎯 Internship Requirements

| Requirement | Status |
|-------------|--------|
| Fixed navigation menu | ✅ |
| Navigation remains visible while scrolling | ✅ |
| Navigation changes style on scroll | ✅ |
| Hover effects on menu items | ✅ |
| HTML used for structure | ✅ |
| CSS used for styling | ✅ |
| JavaScript used for interaction | ✅ |
| Active navigation state | ✅ |
| Responsive mobile navigation | ✅ |
| Desktop responsiveness | ✅ |
| Tablet responsiveness | ✅ |
| Mobile responsiveness | ✅ |

---

## 🚀 Getting Started

### Prerequisites

No additional dependencies or frameworks are required.

You only need:

- A modern web browser
- A code editor such as Visual Studio Code
- Optional: Live Server extension for VS Code

### Run Locally

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd responsive-landing-page
```

3. Open `index.html` in your browser.

### Using Live Server

If you are using Visual Studio Code:

1. Open the project folder.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

The website will open automatically in your default browser.

---

## 💡 Learning Outcomes

Through this project, I gained practical experience with:

- Building responsive web layouts
- Creating fixed navigation systems
- Using CSS media queries
- Implementing hover and transition effects
- Handling scroll events with JavaScript
- Manipulating DOM elements
- Creating responsive mobile navigation
- Managing active navigation states
- Using semantic HTML elements
- Implementing basic accessibility practices

---

## 👨‍💻 Author

**Sujeet Kumar Yadav**

Full-Stack Developer / Engineer

---

## 📋 Internship Details

**Task:** Task 01  
**Project:** Responsive Landing Page  
**Category:** Web Development  
**Technologies:** HTML5, CSS3, JavaScript

---

## 📜 License

This project was created for educational and internship purposes.
