# Market Research Agent – Full Project (Backend + Frontend)

This project reads a simple brief and performs full market research using AI. It finds companies, aggregates their news, performs sentiment analysis, and generates a comprehensive summary.

The project consists of a **FastAPI** backend and a **React (Vite)** frontend.

###  Full Project Link
**[https://suryateja-ai-market-research-agent.netlify.app/](https://suryateja-ai-market-research-agent.netlify.app/)**
*(This is the main deployed link where the frontend and backend are connected and working together.)*

---

## Backend Service

The backend handles the logic, API calls, and AI processing.

### Live Backend URL
* **Deployed on Render:** [https://market-research-agent-backend.onrender.com](https://market-research-agent-backend.onrender.com)
* **Main Endpoint:** `POST /api/research`

### What This System Does (Workflow)

1.  **Keyword Extraction:** Gemini generates 5 keywords based on the user brief.
2.  **Company Discovery:** Uses the first keyword to find companies via SerpAPI.
    * *Note:* If the key is missing, it uses fallback companies (Google, Nvidia, Microsoft).
3.  **News Collection:** NewsAPI collects the latest headlines for each company.
    * *Note:* If the key is missing, it uses fallback sample news.
4.  **Sentiment Check:** Gemini analyzes the tone (positive/negative/neutral) for every headline.
5.  **Report Creation:** Gemini writes a full market research report.
6.  **Final JSON Output:** Returns all steps + the final detailed report.

### Backend Folder Structure

```text
market-research-agent/
│
├── main.py
├── market_research_agent.py
├── llm_utils.py
├── serpapi_utils.py
├── news_utils.py
├── test_agent.py
├── requirements.txt
└── .env
```
## Tech Used (Backend)
```text
FastAPI

Uvicorn

Gemini API

SerpAPI (optional)

NewsAPI (optional)

Python 3.10

Dotenv
```
## How To Run Backend Locally
```text
1. Make Virtual Environment
python -m venv venv

2. Activate (Windows)
venv\Scripts\activate

3. Install Requirements
pip install -r requirements.txt

4. Create .env File

Put this inside:

GEMINI_API_KEY=your_key
GOOGLE_API_KEY=your_key
SERPAPI_KEY=optional
NEWS_API_KEY=optional

5. Start Server
uvicorn main:app --reload
```

## Backend runs on:

http://127.0.0.1:8000

## API Usage
```text
POST /api/research

Example body:

{
  "brief": "Find top AI telecom companies"
}

```
## Response will include:
```text
keywords

companies

news

sentiment

final report

all steps

Environment Variables
Required

GEMINI_API_KEY

Optional

SERPAPI_KEY

NEWS_API_KEY

If optional ones missing → backend still works using fallback data.
```

## Backend Deployment (Render)
```text
Build Command
pip install -r requirements.txt

Start Command
uvicorn main:app --host 0.0.0.0 --port $PORT


Set all environment variables in Render dashboard.
```

## Frontend (React + Vite)
```text
Frontend just sends the brief to backend and displays all steps clearly in UI.

Frontend Deployment

Live frontend hosted on Netlify:

https://suryateja-ai-market-research-agent.netlify.app/
What Frontend Does

Takes a market brief

Sends POST request to backend

Shows:

Step 1 & 2 keywords

Step 3 company list

Step 4–6 news + sentiment

Step 7 final market research report

Clean and simple UI

Run Frontend Locally
Install packages
npm install

Start dev server
npm run dev
```
## API URL

Make sure your frontend calls:

https://market-research-agent-backend.onrender.com/api/research

Final Project Deployment (Working Together)

Frontend: Netlify

Backend: Render

Linked correctly

Main project link:

https://suryateja-ai-market-research-agent.netlify.app/