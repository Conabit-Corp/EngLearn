include .env
export
export MONGO_URL=localhost:${MONGO_PORT}
export REDIS_URL=localhost:${REDIS_PORT}

test:
	go test ./...

protos:
	(cd scripts && ./protogen.sh)

dbs:
	(cd scripts && ./compose_up_no_backend.sh)

back:
	(cd scripts && ./compose_up.sh)

front:
	npm i
	npm start

service:
	(cd scripts && ./build_service_with_env.sh $(name))