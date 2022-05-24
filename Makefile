include .env
export
export MONGO_URL=localhost:${MONGO_PORT}
export REDIS_URL=localhost:${REDIS_PORT}

help:
	$(info commands:)
	$(info )
	$(info -make test = runs backend tests)
	$(info )
	$(info -make protos = generate files from .proto files)
	$(info )
	$(info -make dbs = runs databases in docker (detached))
	$(info )
	$(info -make back = runs backend services in docker (detached))
	$(info )
	$(info -make front = runs frontend via npm (interactive))
	$(info )
	$(info -make service = runs backend service by name (interactive))
	$(info example = 'make service name=auth')
	$(info )

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