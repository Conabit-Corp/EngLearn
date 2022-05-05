go build -o ./$1-service.bin ./backend/$1/cmd/main.go

echo "load .env file"
export $(cat .env | xargs)
export MONGO_URL=localhost:$MONGO_PORT
export REDIS_URL=localhost:$REDIS_PORT

./"$1-service.bin"