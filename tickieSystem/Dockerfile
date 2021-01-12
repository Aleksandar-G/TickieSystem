FROM openjdk:latest
EXPOSE 8080
COPY ${JAR_FILE} app.jar
ADD build/libs/tickieSystem-0.0.1-SNAPSHOT.jar tickieSystem-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/tickieSystem-0.0.1-SNAPSHOT.jar"]