NexaLearn – Employee Learning and Training Platform

Project Overview

NexaLearn is a full-stack employee learning platform developed for a fictional organisation that wants to provide staff with a simple and structured way to complete workplace training. The application combines employee authentication, training courses, assessments, progress information and certificates within one interface.

The project was developed using React for the frontend, Node.js and Express for the backend, MongoDB Atlas for persistent data storage, GitHub for version control and project management, and GitHub Actions for automated testing and build verification.

GitHub Repository:
https://github.com/angelicakomolafe/NexaLearn

Framer Prototype:

(https://happy-successes-224291.framer.app/)


1. Product Proposal and Design

NexaLearn was proposed as an employee learning platform for a fictional company that requires a convenient way of delivering internal training. Organisations regularly require employees to complete subjects such as cyber security awareness, data protection and workplace safety. However, training can become difficult to manage when courses, assessment results and progress information are distributed across different systems. NexaLearn addresses this by providing employees with one application through which they can access assigned courses, complete assessments and review their progress.

The intended user is an employee who needs to complete workplace training without requiring extensive technical knowledge. The main objective was therefore to make the interface straightforward rather than adding unnecessary features. After authentication, users are presented with a dashboard showing the number of enrolled, in-progress and completed courses. From there, they can access their courses, continue training, complete an assessment, review progress and access certificates.

The main user journey is:

User registers for a NexaLearn account.

User signs in securely.

The dashboard displays training information.

The user opens My Courses.

The user selects an assigned training course.

Training content is reviewed.

The user completes an assessment.

NexaLearn calculates whether the assessment was passed or failed.

Assessment information is stored using the backend and MongoDB.

The user can access progress and certificate areas.

Framer was used during the ideation and interface-design stage because it supports rapid visual prototyping and allows layouts to be explored before implementation. This was valuable because it separated interface decisions from implementation decisions. Instead of immediately writing React components, the visual hierarchy, spacing and user flow could first be considered from the perspective of the employee using the product.

The NexaLearn visual identity uses a restrained blue-and-neutral colour palette. Blue was selected as the primary accent because it provides clear contrast for interactive controls while maintaining a professional appearance suitable for workplace learning. The interface uses consistent cards, headings, navigation and button styles throughout. The design deliberately avoids excessive visual effects that could distract from learning content.

Accessibility influenced several design choices. Text and controls were designed with readable sizing, navigation labels use understandable terminology, and important information is communicated using words rather than colour alone. For example, an assessment explicitly displays Passed or Failed rather than depending exclusively on green or red styling. Form inputs also use visible labels such as Email Address and Password.

Sustainability was considered by keeping the interface lightweight and avoiding unnecessary media, animations and large graphical assets. A relatively simple React interface reduces the amount of content transferred compared with a media-heavy design. Reusable components and styling also reduce duplication within the codebase. From a product perspective, providing training digitally may reduce the need for printed learning material and enables employees to access learning resources through an existing browser.

The final interface remains intentionally focused. The objective was not to replicate a large commercial learning-management system, but to produce an accessible full-stack prototype demonstrating the key workflow from authentication through training and assessment.


2. Planning and Requirements

Project planning was managed using GitHub Projects. A Kanban-style board was created with Todo, In Progress and Done statuses so that development work could be organised and progress monitored.

The project was divided into epics representing the major functional areas of NexaLearn. These included:

Authentication and User Access

Training and Course Management

Assessment and Progress Tracking

Testing, Deployment and Quality

Individual requirements were represented through GitHub Issues. Examples included User Registration, User Login, User Logout and Form Validation. This approach allowed larger requirements to be decomposed into smaller tasks that could be implemented and reviewed independently.

GitHub Project Board:

https://github.com/users/angelicakomolafe/projects/1

Requirements were written to represent observable user behaviour. For example, the login requirement expects a registered user to be able to provide valid credentials and gain access to the application, while invalid credentials should not grant access. Authentication tickets were separated from course and assessment functionality so that dependencies between features were easier to understand.

GitHub was also used for source control. Changes were committed to the repository as development progressed, providing a record of implementation. This was especially useful when transitioning from the initial frontend prototype to the full-stack version because backend routes, database models, authentication and automated tests could be introduced without losing previous work.

The project board provided a practical Agile-style workflow for a relatively small individual development project. A future iteration would improve this further by adding more detailed acceptance criteria and effort estimates to every ticket and using separate feature branches and pull requests consistently.




3. Full-Stack Development

NexaLearn uses a client-server architecture. The frontend is implemented using React and Vite, while the backend uses Node.js with Express. Persistent application data is stored in MongoDB Atlas using Mongoose models.

1 new activity
15 new notifications
Has context menu
Chat




Unread
Channels
Chats

Unread messageLast messageGroup chatMeeting chatChatPersonal at mentionEveryone at mentionImportantUrgentDraftDraftMutedMeeting in progressMeet now in progressYou can't send messages because you are not a member of the chat.You cannot send messages to this botPrivateSharedHas context menuChannel at mentionTeam at mentionPersonal at mentionUnreadUnreadMeeting in progressUnreadChannelTeamHas pinned messagesSee moreCommunityTemporarily shownHas context menuBadged chatBadged chats
Has context menu

Teams and channels
Angelica Komolafe (Apprentice/Graduate) (You)

Chat

Shared

Notes
+1
Has context menu




Message List
async function submitQuiz() {  if (!sele... by Angelica Komolafe (Apprentice/Graduate)
21:08
Angelica Komolafe (Apprentice/Graduate)

async function submitQuiz() {
 if (!selectedAnswer) {
   alert('Please select an answer before submitting.')
   return
 }

 const result =
   selectedAnswer === quizQuestion.correctAnswer ? 100 : 0

 setScore(result)

 try {
   const token = localStorage.getItem('token')

   await fetch('YOUR_5000_FORWARDED_URL/api/results', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`,
     },
     body: JSON.stringify({
       course: 'Introduction to Cyber Security',
       score: result,
     }),
   })
 } catch (error) {
   console.error('Could not save result:', error)
 }

 setPage('results')
}

{score >= 60 ? 'Passed' : 'Failed'} by Angelica Komolafe (Apprentice/Graduate)
21:15
Angelica Komolafe (Apprentice/Graduate)

{score >= 60 ? 'Passed' : 'Failed'}
<h2 className={score >= 60 ? 'passed' : 'fa... by Angelica Komolafe (Apprentice/Graduate)
21:17
Angelica Komolafe (Apprentice/Graduate)

<h2 className={score >= 60 ? 'passed' : 'failed'}>
 {score >= 60 ? 'Passed' : 'Failed'}
</h2>

.failed {  color: #dc2626; } by Angelica Komolafe (Apprentice/Graduate)
21:18
Angelica Komolafe (Apprentice/Graduate)

.failed {
 color: #dc2626;
}

const [results, setResults] = useState([]) by Angelica Komolafe (Apprentice/Graduate)
21:23
Angelica Komolafe (Apprentice/Graduate)

const [results, setResults] = useState([])
async function loadResults() {  try { ... by Angelica Komolafe (Apprentice/Graduate)
21:23
Angelica Komolafe (Apprentice/Graduate)

async function loadResults() {
 try {
   const token = localStorage.getItem('token')

   const response = await fetch(
     'YOUR_5000_FORWARDED_URL/api/results',
     {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     }
   )

   const data = await response.json()

   if (response.ok) {
     setResults(data)
   }
 } catch (error) {
   console.error('Could not load results:', error)
 }
}

onClick={() => {  loadResults()  setP... by Angelica Komolafe (Apprentice/Graduate)
21:25
Angelica Komolafe (Apprentice/Graduate)

onClick={() => {
 loadResults()
 setPage('progress')
}}

const cyberResult = results.find(  (resu... by Angelica Komolafe (Apprentice/Graduate)
21:26
Angelica Komolafe (Apprentice/Graduate)

const cyberResult = results.find(
 (result) => result.course === 'Introduction to Cyber Security'
)

{cyberResult  ? `Completed — ${cyberResu... by Angelica Komolafe (Apprentice/Graduate)
21:27
Angelica Komolafe (Apprentice/Graduate)

{cyberResult
 ? `Completed — ${cyberResult.score}%`
 : 'Not Completed —'}

useEffect(() => {  if (page === 'progres... by Angelica Komolafe (Apprentice/Graduate)
21:34
Angelica Komolafe (Apprentice/Graduate)

useEffect(() => {
 if (page === 'progress' && loggedIn) {
   loadResults()
 }
}, [page, loggedIn])

cd /workspaces/NexaLearn/client npm insta... by Angelica Komolafe (Apprentice/Graduate)
21:39
Angelica Komolafe (Apprentice/Graduate)

cd /workspaces/NexaLearn/client
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

"scripts": {  "dev": "vite",  "build"... by Angelica Komolafe (Apprentice/Graduate)
21:43
Angelica Komolafe (Apprentice/Graduate)

"scripts": {
 "dev": "vite",
 "build": "vite build",
 "lint": "eslint .",
 "preview": "vite preview",
 "test": "vitest run",
 "test:watch": "vitest"
}

import { render, screen } from '@testing-li... by Angelica Komolafe (Apprentice/Graduate)
21:45
Angelica Komolafe (Apprentice/Graduate)

import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import App from './App'

describe('NexaLearn App', () => {
 test('renders NexaLearn branding', () => {
   render(<App />)
   expect(screen.getByText(/NexaLearn/i)).toBeInTheDocument()
 })
})

import '@testing-library/jest-dom' by Angelica Komolafe (Apprentice/Graduate)
21:45
Angelica Komolafe (Apprentice/Graduate)

import '@testing-library/jest-dom'
import { defineConfig } from 'vite' impor... by Angelica Komolafe (Apprentice/Graduate)
21:46
Angelica Komolafe (Apprentice/Graduate)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
 plugins: [react()],
 test: {
   environment: 'jsdom',
   setupFiles: './src/setupTests.js',
 },
})

import '@testing-library/jest-dom/vitest' by Angelica Komolafe (Apprentice/Graduate)
21:50
Angelica Komolafe (Apprentice/Graduate)

import '@testing-library/jest-dom/vitest'
name: NexaLearn CI on:  push:    br... by Angelica Komolafe (Apprentice/Graduate)
22:00
Angelica Komolafe (Apprentice/Graduate)

name: NexaLearn CI

on:
 push:
   branches: [main]
 pull_request:
   branches: [main]

jobs:
 test:
   runs-on: ubuntu-latest

   defaults:
     run:
       working-directory: client

   steps:
     - name: Checkout repository
       uses: actions/checkout@v4

     - name: Set up Node.js
       uses: actions/setup-node@v4
       with:
         node-version: 20
         cache: npm
         cache-dependency-path: client/package-lock.json

     - name: Install dependencies
       run: npm ci

     - name: Run tests
       run: npm test

     - name: Build frontend
       run: npm run build

cd /workspaces/NexaLearn git status by Angelica Komolafe (Apprentice/Graduate)
22:01
Angelica Komolafe (Apprentice/Graduate)

cd /workspaces/NexaLearn
git status

printf "\nserver/.env\nserver/node_modules/... by Angelica Komolafe (Apprentice/Graduate)
22:02
Angelica Komolafe (Apprentice/Graduate)

printf "\nserver/.env\nserver/node_modules/\nclient/node_modules/\n" >> .gitignore
git add . by Angelica Komolafe (Apprentice/Graduate)
22:02
Angelica Komolafe (Apprentice/Graduate)

git add .
git commit -m "Complete NexaLearn full-stac... by Angelica Komolafe (Apprentice/Graduate)
22:04
Angelica Komolafe (Apprentice/Graduate)

git commit -m "Complete NexaLearn full-stack application"
git push origin main by Angelica Komolafe (Apprentice/Graduate)
22:04
Angelica Komolafe (Apprentice/Graduate)

git push origin main
NexaLearn – Employee Learning and Training ... by Angelica Komolafe (Apprentice/Graduate)
22:12
Angelica Komolafe (Apprentice/Graduate)

NexaLearn – Employee Learning and Training Platform
Project Overview
NexaLearn is a full-stack employee learning platform developed for a fictional organisation that wants to provide staff with a simple and structured way to complete workplace training. The application combines employee authentication, training courses, assessments, progress information and certificates within one interface.
The project was developed using React for the frontend, Node.js and Express for the backend, MongoDB Atlas for persistent data storage, GitHub for version control and project management, and GitHub Actions for automated testing and build verification.
GitHub Repository:
https://github.com/angelicakomolafe/NexaLearn
Framer Prototype:
[ADD FRAMER LINK]


⸻


1. Product Proposal and Design
NexaLearn was proposed as an employee learning platform for a fictional company that requires a convenient way of delivering internal training. Organisations regularly require employees to complete subjects such as cyber security awareness, data protection and workplace safety. However, training can become difficult to manage when courses, assessment results and progress information are distributed across different systems. NexaLearn addresses this by providing employees with one application through which they can access assigned courses, complete assessments and review their progress.
The intended user is an employee who needs to complete workplace training without requiring extensive technical knowledge. The main objective was therefore to make the interface straightforward rather than adding unnecessary features. After authentication, users are presented with a dashboard showing the number of enrolled, in-progress and completed courses. From there, they can access their courses, continue training, complete an assessment, review progress and access certificates.
The main user journey is:
User registers for a NexaLearn account.
User signs in securely.
The dashboard displays training information.
The user opens My Courses.
The user selects an assigned training course.
Training content is reviewed.
The user completes an assessment.
NexaLearn calculates whether the assessment was passed or failed.
Assessment information is stored using the backend and MongoDB.
The user can access progress and certificate areas.
Framer was used during the ideation and interface-design stage because it supports rapid visual prototyping and allows layouts to be explored before implementation. This was valuable because it separated interface decisions from implementation decisions. Instead of immediately writing React components, the visual hierarchy, spacing and user flow could first be considered from the perspective of the employee using the product.
The NexaLearn visual identity uses a restrained blue-and-neutral colour palette. Blue was selected as the primary accent because it provides clear contrast for interactive controls while maintaining a professional appearance suitable for workplace learning. The interface uses consistent cards, headings, navigation and button styles throughout. The design deliberately avoids excessive visual effects that could distract from learning content.
Accessibility influenced several design choices. Text and controls were designed with readable sizing, navigation labels use understandable terminology, and important information is communicated using words rather than colour alone. For example, an assessment explicitly displays Passed or Failed rather than depending exclusively on green or red styling. Form inputs also use visible labels such as Email Address and Password.
Sustainability was considered by keeping the interface lightweight and avoiding unnecessary media, animations and large graphical assets. A relatively simple React interface reduces the amount of content transferred compared with a media-heavy design. Reusable components and styling also reduce duplication within the codebase. From a product perspective, providing training digitally may reduce the need for printed learning material and enables employees to access learning resources through an existing browser.
The final interface remains intentionally focused. The objective was not to replicate a large commercial learning-management system, but to produce an accessible full-stack prototype demonstrating the key workflow from authentication through training and assessment.


⸻


2. Planning and Requirements
Project planning was managed using GitHub Projects. A Kanban-style board was created with Todo, In Progress and Done statuses so that development work could be organised and progress monitored.
The project was divided into epics representing the major functional areas of NexaLearn. These included:
Authentication and User Access
Training and Course Management
Assessment and Progress Tracking
Testing, Deployment and Quality
Individual requirements were represented through GitHub Issues. Examples included User Registration, User Login, User Logout and Form Validation. This approach allowed larger requirements to be decomposed into smaller tasks that could be implemented and reviewed independently.
GitHub Project Board:
[ADD PROJECT BOARD LINK]
Requirements were written to represent observable user behaviour. For example, the login requirement expects a registered user to be able to provide valid credentials and gain access to the application, while invalid credentials should not grant access. Authentication tickets were separated from course and assessment functionality so that dependencies between features were easier to understand.
GitHub was also used for source control. Changes were committed to the repository as development progressed, providing a record of implementation. This was especially useful when transitioning from the initial frontend prototype to the full-stack version because backend routes, database models, authentication and automated tests could be introduced without losing previous work.
The project board provided a practical Agile-style workflow for a relatively small individual development project. A future iteration would improve this further by adding more detailed acceptance criteria and effort estimates to every ticket and using separate feature branches and pull requests consistently.


⸻


3. Full-Stack Development
NexaLearn uses a client-server architecture. The frontend is implemented using React and Vite, while the backend uses Node.js with Express. Persistent application data is stored in MongoDB Atlas using Mongoose models.

React was selected because its component-ba... by Angelica Komolafe (Apprentice/Graduate)
22:24
Angelica Komolafe (Apprentice/Graduate)

React was selected because its component-based approach is well suited to an application containing multiple related interface states such as login, dashboard, courses, assessments, results, progress and certificates. Vite provides a lightweight development environment and fast frontend builds.

Express provides the application programming interface between the React client and the database. Routes were separated by responsibility. Authentication functionality is located under /api/auth, while assessment result functionality is exposed through /api/results. A /api/health endpoint was also implemented to provide a simple method of confirming that the API is running.

MongoDB Atlas was selected because its document model fits the data required by the application and integrates effectively with a JavaScript-based technology stack. Mongoose was used to define models for users and assessment results. The results collection stores information including the associated user, course, score and timestamps. Testing through MongoDB Atlas confirmed that assessment submissions were being persisted successfully.

Security was an important part of the backend design. Passwords are not stored directly as plain text. Authentication uses password hashing and JSON Web Tokens. Following successful authentication, the backend returns a token that can be used for subsequent protected API requests. Middleware validates the token before allowing access to protected result routes.

Sensitive configuration is stored separately in a .env file. This includes the MongoDB connection URI and JWT secret. The .env file is excluded from version control through .gitignore, preventing credentials from being uploaded to the public GitHub repository.

The application was developed through GitHub Codespaces. During development, the React frontend used port 5173 and the Express API used port 5000. Port forwarding allowed the browser frontend to communicate with the API while the project was being tested.

The completed prototype demonstrates communication across the complete stack: an employee can authenticate through the React interface, the request is processed by Express, user information is validated against MongoDB and subsequent assessment results can be written to the database.

Some progress information remains represented using prototype data rather than being fully synchronised with MongoDB. This is acknowledged as a limitation rather than presenting incomplete functionality as finished.

⸻

4. Testing, CI and Quality Assurance

Testing was introduced to verify observable frontend behaviour using Vitest, React Testing Library, jest-dom and jsdom. A component-level test renders the NexaLearn application and verifies that the NexaLearn branding appears successfully.

describe('NexaLearn App', () => {
 test('renders NexaLearn branding', () => {
   render(<App />)
   expect(screen.getByText(/NexaLearn/i)).toBeInTheDocument()
 })
})

Executing:

npm test

produced a successful result:

Test Files  1 passed
Tests       1 passed

Testing the rendered component rather than only testing an isolated calculation provides evidence that the React interface can load correctly in the testing environment.

Manual behaviour testing was also carried out throughout development. Registration and login were tested through the API and application interface. Both successful and unsuccessful assessment outcomes were checked. One test produced a score of 100%, while deliberately selecting an incorrect answer produced 0%. This exposed an interface defect where the application originally displayed “Passed” even when the score was 0%. The result component was subsequently corrected so that the displayed outcome is calculated from the score. The revised behaviour displays Passed for a passing result and Failed for an unsuccessful result.

MongoDB Atlas was also inspected to validate persistence. Multiple result documents were present in the results collection with values including the user identifier, course name, assessment score and timestamps. This confirmed that data was not only changing in the React interface but reaching the database.

Continuous integration was configured using GitHub Actions. The workflow executes whenever changes are pushed to the main branch or included in a pull request. The pipeline checks out the repository, installs the client dependencies using npm ci, executes the automated test and builds the React frontend.

- name: Install dependencies
 run: npm ci

- name: Run tests
 run: npm test

- name: Build frontend
 run: npm run build

The NexaLearn CI workflow completed successfully on GitHub, providing evidence that the application can be automatically tested and built from the repository rather than relying solely on the developer’s local environment.

The project did not use Test Driven Development consistently from the beginning. Testing was introduced later in development, so a complete red-green-refactor process cannot be claimed for the entire application. This is an important limitation. Future development would expand component and integration tests and establish tests before implementation for new features. Code coverage reporting should also be incorporated into the pipeline to provide a measurable quality indicator.

⸻

5. Evaluation

NexaLearn successfully demonstrates the major components of a modern full-stack application. The project progressed from an interface concept into a system containing a React frontend, Express API, MongoDB database, user authentication, assessment processing, persistent results, automated testing and continuous integration.

One of the strongest aspects of the implementation is the separation between frontend, backend and database responsibilities. The React interface does not directly access MongoDB. Instead, requests are handled through API routes and authenticated backend middleware. Password hashing, JWT authentication, protected routes and environment variables also improve the security of the prototype compared with storing credentials or database information directly in frontend code.

The development process also identified the value of testing. The incorrect “Passed” state for a 0% assessment result demonstrated how an interface may appear functional while still containing behavioural defects. Testing successful and unsuccessful scenarios led to a more reliable result screen.

There are several limitations. The application is a prototype rather than a production learning-management platform. Only a small number of training courses and assessment questions are represented. Some dashboard and progress information remains static rather than being completely generated from database records. Automated test coverage is also limited, and TDD was not followed consistently throughout initial development.

Future development would move course content into MongoDB, dynamically calculate course completion, generate certificates from verified completion records, introduce administrator functionality for assigning courses, add role-based access control and increase automated test coverage. A production deployment would also use controlled environment secrets, secure hosting, stricter CORS policies and additional authentication protections.

Overall, NexaLearn met the project’s central objective of demonstrating an employee-learning workflow through a functioning full-stack architecture while also providing clear areas for future technical improvement.

```text

                  ┌──────────────────────┐

                  │       Employee       │

                  │      Web Browser     │

                  └──────────┬───────────┘

                             │

                             ▼

                  ┌──────────────────────┐

                  │    React Frontend    │

                  │       Vite           │

                  │      Port 5173       │

                  └──────────┬───────────┘

                             │ HTTP/JSON

                             ▼

                  ┌──────────────────────┐

                  │ Express / Node.js API│

                  │      Port 5000       │

                  ├──────────────────────┤

                  │ /api/auth            │

                  │ /api/results         │

                  │ /api/health          │

                  └──────────┬───────────┘

                             │ Mongoose

                             ▼

                  ┌──────────────────────┐

                  │    MongoDB Atlas     │

                  ├──────────────────────┤

                  │ users collection     │

                  │ results collection   │

                  └──────────────────────┘

```
React was selected because its component-based approach is well suited to an application containing multiple related interface states such as login, dashboard, courses, assessments, results, progress and certificates. Vite provides a lightweight development environment and fast frontend builds.

Express provides the application programming interface between the React client and the database. Routes were separated by responsibility. Authentication functionality is located under /api/auth, while assessment result functionality is exposed through /api/results. A /api/health endpoint was also implemented to provide a simple method of confirming that the API is running.

MongoDB Atlas was selected because its document model fits the data required by the application and integrates effectively with a JavaScript-based technology stack. Mongoose was used to define models for users and assessment results. The results collection stores information including the associated user, course, score and timestamps. Testing through MongoDB Atlas confirmed that assessment submissions were being persisted successfully.

Security was an important part of the backend design. Passwords are not stored directly as plain text. Authentication uses password hashing and JSON Web Tokens. Following successful authentication, the backend returns a token that can be used for subsequent protected API requests. Middleware validates the token before allowing access to protected result routes.

Sensitive configuration is stored separately in a .env file. This includes the MongoDB connection URI and JWT secret. The .env file is excluded from version control through .gitignore, preventing credentials from being uploaded to the public GitHub repository.

The application was developed through GitHub Codespaces. During development, the React frontend used port 5173 and the Express API used port 5000. Port forwarding allowed the browser frontend to communicate with the API while the project was being tested.

The completed prototype demonstrates communication across the complete stack: an employee can authenticate through the React interface, the request is processed by Express, user information is validated against MongoDB and subsequent assessment results can be written to the database.

Some progress information remains represented using prototype data rather than being fully synchronised with MongoDB. This is acknowledged as a limitation rather than presenting incomplete functionality as finished.

⸻

4. Testing, CI and Quality Assurance

Testing was introduced to verify observable frontend behaviour using Vitest, React Testing Library, jest-dom and jsdom. A component-level test renders the NexaLearn application and verifies that the NexaLearn branding appears successfully.

describe('NexaLearn App', () => {

  test('renders NexaLearn branding', () => {

    render(<App />)

    expect(screen.getByText(/NexaLearn/i)).toBeInTheDocument()

  })

})

Executing:

npm test

produced a successful result:

Test Files  1 passed

Tests       1 passed

Testing the rendered component rather than only testing an isolated calculation provides evidence that the React interface can load correctly in the testing environment.

Manual behaviour testing was also carried out throughout development. Registration and login were tested through the API and application interface. Both successful and unsuccessful assessment outcomes were checked. One test produced a score of 100%, while deliberately selecting an incorrect answer produced 0%. This exposed an interface defect where the application originally displayed “Passed” even when the score was 0%. The result component was subsequently corrected so that the displayed outcome is calculated from the score. The revised behaviour displays Passed for a passing result and Failed for an unsuccessful result.

MongoDB Atlas was also inspected to validate persistence. Multiple result documents were present in the results collection with values including the user identifier, course name, assessment score and timestamps. This confirmed that data was not only changing in the React interface but reaching the database.

Continuous integration was configured using GitHub Actions. The workflow executes whenever changes are pushed to the main branch or included in a pull request. The pipeline checks out the repository, installs the client dependencies using npm ci, executes the automated test and builds the React frontend.

- name: Install dependencies

  run: npm ci

- name: Run tests

  run: npm test

- name: Build frontend

  run: npm run build

The NexaLearn CI workflow completed successfully on GitHub, providing evidence that the application can be automatically tested and built from the repository rather than relying solely on the developer’s local environment.

The project did not use Test Driven Development consistently from the beginning. Testing was introduced later in development, so a complete red-green-refactor process cannot be claimed for the entire application. This is an important limitation. Future development would expand component and integration tests and establish tests before implementation for new features. Code coverage reporting should also be incorporated into the pipeline to provide a measurable quality indicator.

⸻

5. Evaluation

NexaLearn successfully demonstrates the major components of a modern full-stack application. The project progressed from an interface concept into a system containing a React frontend, Express API, MongoDB database, user authentication, assessment processing, persistent results, automated testing and continuous integration.

One of the strongest aspects of the implementation is the separation between frontend, backend and database responsibilities. The React interface does not directly access MongoDB. Instead, requests are handled through API routes and authenticated backend middleware. Password hashing, JWT authentication, protected routes and environment variables also improve the security of the prototype compared with storing credentials or database information directly in frontend code.

The development process also identified the value of testing. The incorrect “Passed” state for a 0% assessment result demonstrated how an interface may appear functional while still containing behavioural defects. Testing successful and unsuccessful scenarios led to a more reliable result screen.

There are several limitations. The application is a prototype rather than a production learning-management platform. Only a small number of training courses and assessment questions are represented. Some dashboard and progress information remains static rather than being completely generated from database records. Automated test coverage is also limited, and TDD was not followed consistently throughout initial development.

Future development would move course content into MongoDB, dynamically calculate course completion, generate certificates from verified completion records, introduce administrator functionality for assigning courses, add role-based access control and increase automated test coverage. A production deployment would also use controlled environment secrets, secure hosting, stricter CORS policies and additional authentication protections.

Overall, NexaLearn met the project’s central objective of demonstrating an employee-learning workflow through a functioning full-stack architecture while also providing clear areas for future technical improvement.

# Screenshots and Evidence

The following evidence demonstrates the design, implementation, database integration, testing and continuous integration used within NexaLearn.

## Figure 1 – Framer NexaLearn Prototype

![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)

## Figure 2 – GitHub Project Board

![alt text](image-4.png)

## Figure 3 – NexaLearn Login

![alt text](image-7.png)

## Figure 4 – Employee Dashboard

![alt text](image-8.png)

## Figure 5 – MongoDB Results Collection

![alt text](image-9.png)

## Figure 6 – Successful Automated Test

![alt text](image-10.png)

## Figure 7 – Successful GitHub Actions CI Workflow

![alt text](image-11.png)

# Technologies Used
| Area | Technology |
|---|---|
| Frontend | React |
| Frontend Tooling | Vite |
| Backend | Node.js / Express |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Authentication | JSON Web Tokens (JWT) |
| Testing | Vitest / React Testing Library |
| CI | GitHub Actions |
| Project Management | GitHub Projects |
| UI Prototyping | Framer |
| Version Control | Git / GitHub |

# AI Usage Statement
ChatGPT was used as a supporting tool during the development of NexaLearn. It was mainly used to help explain technical concepts, troubleshoot development errors, and improve the structure and clarity of the project documentation.
Suggestions provided by ChatGPT were reviewed, adapted and tested before being included in the final project. The final application, implementation decisions, testing and documentation were checked by the author.