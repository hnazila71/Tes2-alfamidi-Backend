
#!/bin/bash

set -e


npm install


createdb -U postgres inventory_db || echo "Database inventory_db already exists"


if [ ! -f ".env" ]; then
  echo "Creating .env file..."
  cp .env.example .env
else
  echo ".env file already exists, skipping..."
fi



npm run migrate up



npm start
