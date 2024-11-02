#############################################################
################## THIS IS A DOCKER FILE ####################
################## PLEASE DONT CHANGE IT ####################
#############################################################


#############################################################
#################### FRONTEND CONTAINER #####################
#############################################################

FROM node:20.18.0 as webclient
WORKDIR /app/client
COPY app/client/package*.json ./
#COPY packages/ui/package*json $WORKDIR/app/packages/ui
#COPY packages/native/package*json $WORKDIR/app/packages/native
RUN npm install -g expo-cli && npm install
COPY app/client .
EXPOSE 8081

CMD ["expo", "start", "--web"]

#############################################################
#################### BACKEND CONTAINER ######################
#############################################################

#FROM openjdk:17-jdk-slim
#ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS
#ENV JAR_FILE=app.jar
#WORKDIR $WORKDIR
#COPY target/*.jar $JAR_FILE
#EXPOSE 8080

#ENTRYPOINT ["java", "-jar", "app.jar"]

