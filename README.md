
# Project B

This will be a very short description of how to run the app on your computer and not die trying.




## Download Tech

First things first. Download following desktop apps (click over to go to the web page).

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Android Studio](https://developer.android.com/studio)
- IDE (VSCode)

After having all of them install we would need following to start coding and build our application:

- [Node v20.18.x](https://nodejs.org/en/download/package-manager) npm v10.9.x
- [Apache Maven v3.9.9](https://maven.apache.org/download.cgi)
- [JDK v21 (Java Development Kit)](https://www.oracle.com/de/java/technologies/downloads/#jdk23-windows) just download the installer.

If there are more dependencies to be downloaded i will be telling you.

## Run Locally

To run your project locally you have to already have all the previous elements from before and just do a couple more steps.

First of all clone the GitHub Repository to your IDE (VSCode for example).

```bash
  git clone https://github.com/Casper121/Project_B.git
```

And after that, [set up yout enviroment](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=simulated) using Android Studio API 35 and Android version v15 (VanillaIceCream). 

Everything should be done. Now start the application running following command on your VSCode Terminal

```bash
  docker compose up
```

That would be all. Using compose up should install all dependencies and start the project on his own. If there is something not working please let me know :D

