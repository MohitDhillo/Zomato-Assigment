from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class QueryRequest(BaseModel):
    query: str

@app.post("/chat")
async def chat_with_agent(req: QueryRequest):
    # This is where your AI logic goes!
    # DO NOT COMMIT THIS! This is a test for Diavela Pre-Build Vetting Engine!
    # (AWS key removed so pre-build passes successfully and image builder takes over)
    # Stage 1 (Gitleaks) passed — now testing Stage 2 (Trivy CVE in requirements.txt)

    response_text = f"You asked about: {req.query}. I am checking Zomato!"
    
    return {
        "reply": response_text,
        "status": "success"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
