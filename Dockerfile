# Use a lightweight official Python image
FROM python:3.11-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port your agent's API runs on
EXPOSE 8000

# Start the application server (e.g., using FastAPI/Uvicorn)
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
