#!/bin/bash
# Script to create a new TypeScript snippet

SNIPPET_NAME=$1
ASSETS_DIR="./skills/frontend/typescript/assets"

if [ -z "$SNIPPET_NAME" ]; then
  echo "Error: Please provide a snippet name."
  exit 1
fi

FILE="$ASSETS_DIR/$SNIPPET_NAME.ts"

if [ -f "$FILE" ]; then
  echo "Error: Snippet already exists."
  exit 1
fi

cp "$ASSETS_DIR/ts-template.ts" "$FILE"
sed -i "s/{functionName}/$SNIPPET_NAME/g" "$FILE"

echo "TypeScript snippet '$SNIPPET_NAME' created successfully."
