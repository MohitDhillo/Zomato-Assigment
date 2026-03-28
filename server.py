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
    # test2 bypass up to date
    # DELIBERATE VULNERABILITY #1: Hardcoded generic API token.
    # Our custom regex in vet_repo DOES NOT look for generic tokens, so ONLY Gitleaks will catch this!
    my_secure_api_token = "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6"

    
    response_text = f"You asked about: {req.query}. I am checking Zomato!"
    
    return {
        "reply": response_text,
        "status": "success"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
