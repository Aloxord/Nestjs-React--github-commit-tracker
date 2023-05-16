# GithubCommitTracker

This is a test project using NestJs + React.

## Description

You can see the commits of any public repository in a simple webview.

### Dependencies

* Docker

### Installing

* Clone the repo of the project: https://github.com/Aloxord/githubCommitTracker.git
    * If you don't know how to clone a repo, follow [this steps](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

* In the "back/src/configs" create a file named `github.ts`, where you must store your github api token, name of the user and project you want to see their commits, in that folder is already an example file, you could rename it and storage your github token, and replace the needed data.
    * If you're new with github access tokens, you should follow [this steps](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

* You're ready to execute the app!

### Executing program

* To execute the app in a terminal(linux,macOs) or cmd(windows), go to the root folder of the project and execute:
```
docker compose up
```

* You should wait in the terminal the url and port where the project is running, and go to `http://localhost:5173`.

## Authors

[@Aloxord](https://twitter.com/aloxord)