This will be the readme

npm start    in /client
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch           in /client
nodemon index.js           in /server

sudo /home/mattiastettler/.nvm/versions/node/v22.20.0/bin/node \ # /home/mattiastettler/.nvm/versions/node/v22.20.0/bin/serve \ # -s /home/mattiastettler/myWebsite/client/build -l 80        for starting server directly i glooud

chmod 600 /path/to/acme.json  # Replace with your volume path, e.g., /acme.json    #  To do in every new Environment where prod gets deployed
chown root:root /path/to/acme.json  # Or traefik user ID

ssh connect to vm = ssh -i /home/mattia/.ssh/for_mywebsite_gcloud root@91.98.130.102

in prod delete docker-compose.yaml and use docker-compose-prod.yaml