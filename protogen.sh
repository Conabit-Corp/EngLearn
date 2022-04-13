#!/bin/bash

mkdir -p ./frontend/_proto

echo "Generate grpc client and servers"

echo "Generate common things"

protoc \
    --plugin=protoc-gen-go=${HOME}/go/bin/protoc-gen-go \
    --go_out=plugins=grpc:. \
    --go_opt=paths=source_relative \
    ./proto/conabit/englearn/common/*.proto \

echo "Generate auth services"

protoc \
    --plugin=protoc-gen-go=${HOME}/go/bin/protoc-gen-go \
    --go_out=plugins=grpc:. \
    --go_opt=paths=source_relative \
    ./proto/conabit/englearn/auth/*.proto

echo "Generate exercise services"

protoc \
    --plugin=protoc-gen-go=${HOME}/go/bin/protoc-gen-go \
    --go_out=plugins=grpc:. \
    --go_opt=paths=source_relative \
    ./proto/conabit/englearn/exercise/*.proto

echo "Generate dashboard services"

# protoc \
#     --plugin=protoc-gen-go=${HOME}/go/bin/protoc-gen-go \
#     --go_out=plugins=grpc:. \
#     ./proto/conabit/englearn/dashboard/*.proto

# protoc \
#     --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#     --plugin=protoc-gen-go=${HOME}/go/bin/protoc-gen-go \
#     -I ./proto \
#     --go_out=plugins=grpc:./backend/_proto \
#     --js_out=import_style=commonjs,binary:./frontend/_proto \
#     --ts_out=service=grpc-web:./frontend/_proto \
#     ./proto/conabit/hello_world.proto
