# poseidon-explorer



### Develop

```powershell
sh ./dev.sh
```



### Deployment



#### build

```powershell
docker-compose build --pull --force-rm build
docker-compose run -v .:/code --rm build sh -c 'sh ./Docker/build.sh'
docker-compose build service
```

#### push

```powershell
# aws login

>docker tag pose-explorer-web-app:latest 690841561495.dkr.ecr.ap-northeast-1.amazonaws.com/pose-explorer-web-app:latest
>$(aws ecr get-login --no-include-email --region ap-northeast-1)
>docker push
```



#### run on server

```powershell
docker run --privileged -dit -p 0.0.0.0:5111:5111 --name pos-explorer 690841561495.dkr.ecr.ap-northeast-1.amazonaws.com/pose-explorer-web-app:latest
```

