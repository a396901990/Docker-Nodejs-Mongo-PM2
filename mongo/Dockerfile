# Mongodb image from centos:6
# run -v /data/db:/data/db -p 27017:27017
FROM dockerfile/ubuntu

# Install MongoDB.
RUN \
  apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10 && \
  echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' > /etc/apt/sources.list.d/mongodb.list && \
  apt-get update && \
  apt-get install -y mongodb-org && \
  rm -rf /var/lib/apt/lists/*

RUN mkdir -p /usr/src/mongo
WORKDIR /usr/src/mongo

# volume
VOLUME ["/usr/src/mongo/data/db"]

# expose port
EXPOSE 27017

# command
CMD ["mongod"]
