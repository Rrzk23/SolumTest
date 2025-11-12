# syntax=docker/dockerfile:1
FROM python:3.12-slim

WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY a.py ./
# Read stdin, write stdout. Provide input via `docker run -i`.
ENTRYPOINT ["python", "/app/a.py"]
