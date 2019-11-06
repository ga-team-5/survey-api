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
      "title": "'"${TITLE}"'",
      "choices": [{
       "option1": "'"${Op1}"'",
       "option2": "'"${Op2}"'",
       "option3": "'"${Op3}"'",
       "option4": "'"${Op4}"'"
      }]
    }
  }'

echo
