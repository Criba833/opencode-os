#!/bin/bash
# create-skill.sh
# Usage: ./create-skill.sh my-new-skill

SKILL_NAME=$1
SKILLS_DIR="./skills/frontend"

if [ -z "$SKILL_NAME" ]; then
  echo "Error: Please provide a skill name."
  exit 1
fi

NEW_DIR="$SKILLS_DIR/$SKILL_NAME"

if [ -d "$NEW_DIR" ]; then
  echo "Error: Skill already exists."
  exit 1
fi

mkdir -p "$NEW_DIR/assets" "$NEW_DIR/references"

# Copy template
cp "$SKILLS_DIR/skill-creator/assets/skill-template.md" "$NEW_DIR/SKILL.md"

# Replace placeholder
sed -i "s/{skill-name}/$SKILL_NAME/g" "$NEW_DIR/SKILL.md"

echo "Skill '$SKILL_NAME' created successfully in $NEW_DIR"
