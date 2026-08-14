import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import App from './App'
describe('NexaLearn App', () => {
 test('renders NexaLearn branding', () => {
   render(<App />)
   expect(screen.getByText(/NexaLearn/i)).toBeInTheDocument()
 })
})