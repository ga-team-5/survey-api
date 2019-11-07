#!/bin/bash

API="http://localhost:4741"
URL_PATH="/votes"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "vote": {
      "survey_id": "'"${survey}"'",
      "option_id": "'"${option}"'"
    }
  }'

echo
