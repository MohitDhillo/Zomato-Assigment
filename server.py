from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class QueryRequest(BaseModel):
    query: str

@app.post("/chat")
async def chat_with_agent(req: QueryRequest):\
    
    response_text = f"You asked about: {req.query}. I am checking Zomato!"
    
    return {
        "reply": response_text,
        "status": "success"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
