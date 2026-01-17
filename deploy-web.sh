#!bin/bash

npx nx build web --configuration=production
scp -r dist/apps/web/* aflorzy@docker.lan:/config/florzytech
