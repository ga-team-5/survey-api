#!/bin/bash

API="http://localhost:4741"
URL_PATH="/votes"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "vote": {
      "survey_id": "'"${survey}"'",
      "option_id": "'"${option}"'"
    }
  }'

echo
