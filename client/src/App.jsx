import { useState } from 'react'

import './App.css'

const courses = [

  {

    title: 'Introduction to Cyber Security',

    category: 'Security & Compliance',

    progress: 65,

    action: 'Continue',

  },

  {

    title: 'Data Protection Essentials',

    category: 'Privacy & Compliance',

    progress: 100,

    action: 'Review',

  },

  {

    title: 'Workplace Safety',

    category: 'Health & Safety',

    progress: 0,

    action: 'Start',

  },

]

const quizQuestion = {

  question: 'Which of the following is a common sign of a phishing email?',

  answers: [

    'An unexpected request for login credentials',

    'An internal company newsletter',

    'A scheduled calendar invitation',

    'A previously requested document',

  ],

  correctAnswer: 'An unexpected request for login credentials',

}

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const [page, setPage] = useState('dashboard')

  const [selectedAnswer, setSelectedAnswer] = useState('')

  const [score, setScore] = useState(null)

  function submitQuiz() {

    if (!selectedAnswer) {

      alert('Please select an answer before submitting.')

      return

    }

    const result =

      selectedAnswer === quizQuestion.correctAnswer ? 100 : 0

    setScore(result)

    setPage('results')

  }

  if (!loggedIn) {

    return (
<div className="app">
<div className="login-card">
<h1>NexaLearn</h1>
<p className="tagline">Learn. Grow. Progress.</p>
<h2>Welcome back</h2>
<p className="subtitle">Sign in to continue your learning</p>
<label>Email address</label>
<input type="email" placeholder="name@example.com" />
<label>Password</label>
<input type="password" placeholder="••••••••" />
<button onClick={() => setLoggedIn(true)}>Sign In</button>
<p className="signup">

            Don’t have an account? <span>Create account</span>
</p>
</div>
</div>

    )

  }

  return (
<div className="dashboard">
<aside className="sidebar">
<h2>NexaLearn</h2>
<p>Employee Learning</p>
<nav>
<button

            className={page === 'dashboard' ? 'nav-active' : ''}

            onClick={() => setPage('dashboard')}
>

            Dashboard
</button>
<button

            className={page === 'courses' ? 'nav-active' : ''}

            onClick={() => setPage('courses')}
>

            My Courses
</button>
<button

            className={page === 'progress' ? 'nav-active' : ''}

            onClick={() => setPage('progress')}
>

            Progress
</button>
<button

            className={page === 'certificates' ? 'nav-active' : ''}

            onClick={() => setPage('certificates')}
>

            Certificates
</button>
</nav>
</aside>
<main className="main-content">

        {page === 'dashboard' && (
<>
<h1>Welcome back, Alex</h1>
<p>Here’s an overview of your learning progress.</p>
<div className="stats">
<div className="stat-card">
<h3>Courses Enrolled</h3>
<strong>4</strong>
</div>
<div className="stat-card">
<h3>In Progress</h3>
<strong>2</strong>
</div>
<div className="stat-card">
<h3>Completed</h3>
<strong>2</strong>
</div>
</div>
<h2 className="section-title">My Courses</h2>
<p>Continue where you left off.</p>
<CourseCards onOpenModule={() => setPage('module')} />
</>

        )}

        {page === 'courses' && (
<>
<h1>My Courses</h1>
<p>Access and continue your assigned training modules.</p>
<CourseCards onOpenModule={() => setPage('module')} />
</>

        )}

        {page === 'module' && (
<>
<h1>Introduction to Cyber Security</h1>
<p>Module 1 of 3 — Recognising Phishing</p>
<div className="learning-card">
<h2>Recognising Phishing</h2>
<p>

                Phishing attacks often attempt to trick users into revealing

                sensitive information such as passwords or account details.

                Common warning signs include unexpected requests for

                credentials, suspicious links, unusual sender addresses, and

                urgent language designed to pressure the recipient.
</p>
<div className="button-row">
<button

                  className="secondary-button"

                  onClick={() => setPage('courses')}
>

                  Previous
</button>
<button onClick={() => setPage('quiz')}>

                  Take Assessment
</button>
</div>
</div>
</>

        )}

        {page === 'quiz' && (
<>
<h1>Cyber Security Assessment</h1>
<p>Question 1 of 5</p>
<div className="learning-card">
<h2>{quizQuestion.question}</h2>
<div className="answer-list">

                {quizQuestion.answers.map((answer) => (
<label className="answer-option" key={answer}>
<input

                      type="radio"

                      name="quiz-answer"

                      value={answer}

                      checked={selectedAnswer === answer}

                      onChange={(event) =>

                        setSelectedAnswer(event.target.value)

                      }

                    />
<span>{answer}</span>
</label>

                ))}
</div>
<div className="button-row">
<button

                  className="secondary-button"

                  onClick={() => setPage('module')}
>

                  Previous
</button>
<button onClick={submitQuiz}>Submit Assessment</button>
</div>
</div>
</>

        )}

        {page === 'results' && (
<>
<h1>Assessment Complete</h1>
<p>Cyber Security Assessment</p>
<div className="result-card">
<strong className="result-score">{score}%</strong>
<h2 className="passed">Passed</h2>
<p>

  {score === 100

    ? '1 out of 1 question answered correctly.'

    : '0 out of 1 questions answered correctly.'}
</p>
<div className="button-row">
<button

                  className="secondary-button"

                  onClick={() => setPage('quiz')}
>

                  Review Answers
</button>
<button onClick={() => setPage('progress')}>

                  View Progress
</button>
</div>
</div>
</>

        )}

        {page === 'progress' && (
<>
<h1>My Progress</h1>
<p>Track your training completion and assessment results.</p>
<div className="progress-card">
<h2>Overall Progress</h2>
<strong className="overall-progress">67%</strong>
<div className="progress-row">
<span>Introduction to Cyber Security</span>
<span>Completed — 80%</span>
</div>
<div className="progress-row">
<span>Data Protection Essentials</span>
<span>Completed — 85%</span>
</div>
<div className="progress-row">
<span>Workplace Safety</span>
<span>Not Started —</span>
</div>
</div>
</>

        )}

        {page === 'certificates' && (
<>
<h1>Certificates</h1>
<p>View certificates earned from completed courses.</p>
<div className="certificate-card">
<h3>Cyber Security Awareness</h3>
<p>Completed: 02 August 2026</p>
<p>Score: 80%</p>
<button>Download Certificate</button>
</div>
</>

        )}
</main>
</div>

  )

}

function CourseCards({ onOpenModule }) {

  return (
<div className="course-grid">

      {courses.map((course) => (
<div className="course-card" key={course.title}>
<h3>{course.title}</h3>
<p>{course.category}</p>
<h4>Progress</h4>
<p>{course.progress}% complete</p>
<div className="progress-track">
<div

              className="progress-fill"

              style={{ width: `${course.progress}%` }}

            />
</div>
<button

            className="course-button"

            onClick={

              course.title === 'Introduction to Cyber Security'

                ? onOpenModule

                : undefined

            }
>

            {course.action}
</button>
</div>

      ))}
</div>

  )

}

export default App
 