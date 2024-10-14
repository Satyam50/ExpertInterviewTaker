# Here is the Live Link
## https://expert-interview-taker-2g3g.vercel.app/

# Here is the youtube video of this project
## https://youtu.be/OQwRML5VKaQ?si=pvZlfxFmmwZCU6WS


# ExpertInterviewPrep

![01](https://github.com/user-attachments/assets/9a9f4f61-74d6-42aa-9f36-d952803c17c6)


![02](https://github.com/user-attachments/assets/45645105-3f49-4dc4-8ca8-8d68a313df3a)


![03](https://github.com/user-attachments/assets/057c7319-d538-4419-835f-1a27ebfa0b69)


![04](https://github.com/user-attachments/assets/8bfe422c-68ee-4278-b962-617b946292fb)


![05](https://github.com/user-attachments/assets/7c0f9ac5-a3d4-49b7-9c68-ea1f1d8dea28)




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



