#!/bin/bash

go get -u github.com/golang/protobuf/protoc-gen-go
PGG=${HOME}/go/bin/protoc-gen-go

echo "Generate grpc client and servers"

protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:./frontend/ \
    --ts_out=service=grpc-web:./frontend/ \
    --plugin=protoc-gen-go=$PGG \
    --go_out=plugins=grpc:. \
    --go_opt=paths=source_relative \
    ./proto/conabit/englearn/common/*.proto \
    ./proto/conabit/englearn/collection/*.proto \
    ./proto/conabit/englearn/exercise/*.proto \
    ./proto/conabit/englearn/auth/*.proto \
    ./proto/conabit/englearn/group/*.proto \
    ./proto/conabit/englearn/dashboard/*.proto \
