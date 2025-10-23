from fastapi import FastAPI
from .routes import auth, strategy

app = FastAPI(title="QuantX API")

app.include_router(auth.router, prefix="/auth")
app.include_router(strategy.router, prefix="/strategy")

@app.get("/")
async def root():
    return {"message": "Welcome to QuantX API"}
