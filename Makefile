.PHONY : build

BUILD_STAGE := $(shell git symbolic-ref --short HEAD)
BUILD_VERSION := $(shell git rev-list --count HEAD)
build :
	echo "mongo set up"
#	docker pull mongo:3.2
#	docker run -d -p 27017:27017 -v ${shell pwd}/mongo/db:/usr/src/mongo/data/db --name mongo mongo:3.2
#	docker stop node.test
#	docker rm node.test
#	docker build -t node.test ${shell pwd}/node/.
#	docker run -d -p 8888:8888 -v ${shell pwd}/node/data/logs:/usr/src/node/data/logs --name node.test node.test

