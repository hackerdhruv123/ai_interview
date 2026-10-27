# InterviewAce AI

Interview preparation app with a React/Vite frontend and an Express backend.

## Local development

- Frontend: `cd client`, `npm install`, then `npm run dev`
- Backend: `cd server`, `npm install`, copy `.env.example` to `.env`, then `npm run dev`

## Deploy

- **Vercel frontend:** import this repository and set the project Root Directory to `client`. Build command: `npm run build`; output directory: `dist`.
- **Render backend:** create a Blueprint from this repository using `render.yaml`. Render will prompt for the secret values listed in `server/.env.example`. The frontend uses `VITE_API_URL` (see `client/.env.example`) to select the backend API URL.

The local `.env` file, uploaded resumes, dependencies, and build output are excluded from Git.
