FROM openjdk:8u111-jdk-alpine

EXPOSE 8181
VOLUME /tmp
ADD /target/sspring-boot-react-starter-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app.jar"]