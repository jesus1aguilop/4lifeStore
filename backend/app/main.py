from fastapi import FastAPI, HTTPException, Request 
import firebase_admin
from firebase_admin import credentials, firestore
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

#CORS configuration
app.add_middleware(
    CORSMiddleware, 
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Firebase Admin SDK
cred = credentials.Certificate("firebase_key.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

@app.get("/")
def read_root():
    return {"message": "API funcionando"}
@app.get("productos")
def get_productos():
    productos_ref = db.collection("productos")
    docs = productos_ref.stream()
    return [docs.to_dict() for docs in docs]