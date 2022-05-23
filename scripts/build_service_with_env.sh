cd ..
go build -o ./$1-service.bin ./backend/$1/cmd/main.go
./"$1-service.bin"