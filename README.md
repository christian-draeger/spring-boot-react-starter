Spring-Boot with React starter project
======================================

# !! work in progress !!

This starter project is integrating a React Frontend with Spring-boot.
The Frontend is running in Spring-Boot's embedded tomcat, Fronend resources will be bundled during the maven run

## getting started:

to start implementing a React app with a spring-boot based backend you can do one of the following:
	
* fork and clone this project via git 
* [download](https://github.com/christian-draeger/spring-boot-react-starter/archive/master.zip) as zip 


##### prerequisites:
* [jdk 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) or higher installed
* [Docker](https://www.docker.com) installed (optional - only needed if you want to build a docker image during the maven run)

## What's included

basically a skeleton spring-boot project (using Kotlin - but feel free to remove the kotlin classes and replace them with java files if you want) 
merged with a React demo App consuming data from an Spring-boot REST endpoint and displaying it.
Spring-Boot dev tools are integrated already.

You don't need to have node and npm/yarn installed locally, everything needed will be installed in the project dir during the maven run.
The project will use node 8 and yarn.

The bundling, transpiling and test execution of the Frontend resources (JS, CSS, assets, ...) is fully integrated in the maven run.
You'll be able to trigger this process by npm scripts (``yarn bundle`` and ``yarn watch``).
The watch task will support hot module replacement (HMR) for frontend resources out of the box.

#### Stack:
Backend: 
* [spring-boot 2](http://spring.io/projects/spring-boot)
* [kotlin](https://kotlinlang.org)
* [maven](https://maven.apache.org)
* testing:
	* [jUnit 5](https://junit.org/junit5/) as test runner with [surefire](https://maven.apache.org/surefire/maven-surefire-plugin/) and [failsafe](https://maven.apache.org/surefire/maven-failsafe-plugin/) as test executor

Frontend:
* [React](https://reactjs.org)
* [parcel](https://parceljs.org)
* CSS-in-JS:
	* [Styled Components](https://www.styled-components.com)
* testing:
	* [jest](https://jestjs.io)

Deployment:
* a [Docker](https://www.docker.com) image will be created if you activating the docker profile for the maven run (``./mvnw clean install -Pdocker``)- this allows you to easily publish your project to AWS, Kubernetes, ...

#### Run it:
install complete app

	./mvnw clean install

run app on local system (app will be available under [http://localhost:8181](http://localhost:8181))
	
	./mvnw spring-boot:run
	
#### Run it in docker container

	./mvnw clean install -Pdocker
	