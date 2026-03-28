# DELIBERATE VET_IMAGE ERROR: Using old/vulnerable base image and running as root!
FROM python:3.7-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
# USER appuser REMOVED to trigger non-root policy failure!
CMD ["python", "server.py"]
