./compose_up_no_backend.sh

echo "load .env file"
export $(cat .env | xargs)
export MONGO_URL=localhost:$MONGO_PORT
export REDIS_URL=localhost:$REDIS_PORT

go test ./...
