#!/bin/bash

echo "build services"

go build -o auth-service.bin ./backend/auth/cmd/main.go
go build -o exercise-service.bin ./backend/exercise/cmd/main.go
go build -o dashboard-service.bin ./backend/dashboard/cmd/main.go

echo "run services detached"
docker-compose build --force-rm --no-cache
docker-compose up --detach
