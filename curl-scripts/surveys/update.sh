#!/bin/bash

API="http://localhost:4741"
URL_PATH="/surveys"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "survey": {
      "title": "'"${TITLE}"'",
      "owner": "'"${USER}"'",
      "choices": [{
        "option1": {
          "title": "'"${Op1T}"'",
          "votes": "'"${Op1V}"'"
        },
        "option2": {
          "title": "'"${Op2T}"'",
          "votes": "'"${Op2V}"'"
        },
        "option3": {
          "title": "'"${Op3T}"'",
          "votes": "'"${Op3V}"'"
        },
        "option4": {
          "title": "'"${Op4T}"'",
          "votes": "'"${Op4V}"'"
        }
      }]
    }
  }'

echo
