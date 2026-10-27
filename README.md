# InterviewAce AI

Interview preparation app with a React/Vite frontend and an Express backend.

## Local development

- Frontend: `cd client`, `npm install`, then `npm run dev`
- Backend: `cd server`, `npm install`, copy `.env.example` to `.env`, then `npm run dev`

## Deploy

- **Vercel frontend:** import this repository and set the project Root Directory to `client`. Build command: `npm run build`; output directory: `dist`.
- **Render backend:** create a Node web service from this repository and set Root Directory to `server`. Build command: `npm install`; start command: `npm start`. Add the variables listed in `server/.env.example` in the Render dashboard.

The local `.env` file, uploaded resumes, dependencies, and build output are excluded from Git.
