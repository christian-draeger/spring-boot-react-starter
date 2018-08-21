FROM openjdk:8-jre-alpine

EXPOSE 8181
# install spring-boot artifact
VOLUME /tmp
ADD /maven/spring-boot-react-starter-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app.jar"]