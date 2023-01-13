build:
	docker build -t serverless-gcp:latest . 

run:	
	docker run -d -p 8000:8000 --name=serverless_gcp serverless-gcp:latest --host=0.0.0.0  