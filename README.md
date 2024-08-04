
# ExpertInterviewPrep

**ExpertInterviewPrep** is an advanced AI-powered interview preparation platform. It helps users prepare for job interviews by simulating interview scenarios and providing instant feedback on their responses.

## Project Overview

This document outlines the control flow of the application, including its key components and interactions.

## Control Flow

1. **User Authentication**
   - **Sign Up / Log In**: Users authenticate via Clerk, which manages user sessions and security.
   - **Routes**: `/signup`, `/login`, and `/profile`.

2. **Dashboard**
   - **Landing Page**: After logging in, users are redirected to the dashboard.
   - **Features**: Users can start a new interview session or view their past sessions.
   - **Routes**: `/dashboard`.

3. **Interview Simulation**
   - **Start Session**: Users initiate an interview session, which interfaces with Gemini AI to generate questions.
   - **Answer Questions**: Users answer questions presented by Gemini AI.
   - **Routes**: `/interview/start`, `/interview/question`.

4. **Feedback and Evaluation**
   - **Receive Feedback**: After completing the interview, users receive a detailed rating and feedback based on their responses.
   - **View Feedback**: Users can review feedback on their performance.
   - **Routes**: `/interview/feedback`.

5. **Data Management**
   - **Drizzle ORM**: Manages interactions with the Neon database for storing user data and responses.
   - **Neon Database**: Handles persistent storage of user profiles, interview sessions, and feedback.

## Tech Stack

- **Frontend**: React.js, Next.js
- **Authentication**: Clerk
- **AI Integration**: Gemini AI
- **Backend**: Drizzle ORM
- **Database**: Neon

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/ExpertInterviewPrep.git
   cd ExpertInterviewPrep
