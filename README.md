cd ..
docker-compose up
docker-compose up --build
docker-compose down
docker-compose down --rmi all -v

docker build -t myapp:nodemon .

docker run --name myapp_c -d -p 4000:4000 myapp:v1
docker run --name myapp_c_nodemon -d -p 4000:4000 --rm -v /Users/ecuadros/Software/docker/docker-crash-course-lesson-11/api:/app -v /app/node_modules myapp:nodemon
docker start -i myapp_c
docker stop  myapp_c_nodemon

docker container rm myapp_c

docker images
docker images ps
docker ps -a

docker system prune

# docker-crash-course
All course files for the Docker Crash Course tutorial on the Net Ninja site &amp; YouTube channel.
