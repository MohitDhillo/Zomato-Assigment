FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --upgrade "wheel>=0.46.2" "jaraco.context>=6.1.0" && \
    pip install -r requirements.txt
COPY . .
# Using non-root user to satisfy the post-build config scanner
RUN useradd -m appuser
USER appuser
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
