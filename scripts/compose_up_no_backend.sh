echo "up redis and mongo in docker"
cd ..
docker-compose up -d mongo
docker-compose up -d redis