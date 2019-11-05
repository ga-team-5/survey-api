#!/bin/bash

API="http://localhost:4741"
URL_PATH="/surveys"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "survey": {
      "title": "'"${TEXT}"'",
      "owner": "'"${USER}"'",
      "choices": [{
        "option1": {
          "title": "'"${Op1T}"'"
        },
        "option2": {
          "title": "'"${Op2T}"'"
        },
        "option3": {
          "title": "'"${Op3T}"'"
        },
        "option4": {
          "title": "'"${Op4T}"'"
        }
      }]
    }
  }'

echo
