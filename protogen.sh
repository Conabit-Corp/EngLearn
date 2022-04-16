#!/bin/bash

go get -u github.com/golang/protobuf/protoc-gen-go
PGG=${HOME}/go/bin/protoc-gen-go

echo "Generate grpc client and servers"

echo "Generate common things"

protoc \
    --plugin=protoc-gen-go=$PGG \
    --go_out=plugins=grpc:. \
    --go_opt=paths=source_relative \
    ./proto/conabit/englearn/common/*.proto \

echo "Generate auth services"

protoc \
    --plugin=protoc-gen-go=$PGG \
    --go_out=plugins=grpc:. \
    --go_opt=paths=source_relative \
    ./proto/conabit/englearn/auth/*.proto

echo "Generate exercise services"

protoc \
    --plugin=protoc-gen-go=$PGG \
    --go_out=plugins=grpc:. \
    --go_opt=paths=source_relative \
    ./proto/conabit/englearn/exercise/*.proto

echo "Generate dashboard services"

# protoc \
#     --plugin=protoc-gen-go=${HOME}/go/bin/protoc-gen-go \
#     --go_out=plugins=grpc:. \
#     ./proto/conabit/englearn/dashboard/*.proto

echo "Generate frontend clients"
protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:./frontend/ \
    --ts_out=service=grpc-web:./frontend/ \
    ./proto/conabit/englearn/common/*.proto \
    ./proto/conabit/englearn/exercise/*.proto \
    ./proto/conabit/englearn/auth/*.proto \
