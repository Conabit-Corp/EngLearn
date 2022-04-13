#!/bin/bash

./protogen.sh

echo "build services"

go build -o auth-service ./backend/auth/cmd/main.go
go build -o exercise-service ./backend/exercise/cmd/main.go
go build -o dashboard-service ./backend/dashboard/cmd/main.go

echo "run services detached"

docker-compose up -d
