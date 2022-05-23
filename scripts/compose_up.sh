echo "build services"
cd ..
go build -o ./auth-service.bin ./backend/auth/cmd/main.go
go build -o ./exercise-service.bin ./backend/exercise/cmd/main.go
go build -o ./dashboard-service.bin ./backend/dashboard/cmd/main.go
go build -o ./collection-service.bin ./backend/collection/cmd/main.go
go build -o ./group-service.bin ./backend/group/cmd/main.go

echo "run services detached"
docker-compose build --force-rm --no-cache auth collection
docker-compose up --detach auth collection redis mongo
