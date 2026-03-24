FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
# Using non-root user to satisfy the post-build config scanner
RUN useradd -m appuser
USER appuser
CMD ["python", "-m", "server"]
