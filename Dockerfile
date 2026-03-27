FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
# Intentionally running as root to trigger a vet_image policy failure
CMD ["python", "-m", "server"]
