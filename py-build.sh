#!/bin/bash

# Generate Typescript models
npm run py-gen;

# Remove previous build artifacts
rm -rf ./resources/py/guardrails_hub_types;
rm -rf ./resources/py/.venv;

# Create target directory for Typescript models
mkdir -p ./resources/py/guardrails_hub_types;
mkdir -p ./resources/py/docs;

# Copy Typescript models to target directory
cp -r ./build/py/guardrails_hub_types/models ./resources/py/guardrails_hub_types;
cp -r ./build/py/guardrails_hub_types/models/__init__.py ./resources/py/guardrails_hub_types/__init__.py;
cp -r ./build/py/guardrails_hub_types/py.typed ./resources/py/guardrails_hub_types;
cp -r ./build/py/docs ./resources/py/docs;
cp -r ./build/py/.gitignore ./resources/py;
cp -r ./build/py/requirements.txt ./resources/py;
cp -r ./build/py/setup.py ./resources/py;

# Navigate to Typescript directory
cd ./resources/py;

# Build the Python library
node ./scripts/prebuild.js;
rm -rf ./.venv;
python3 -m venv ./.venv;
source ./.venv/bin/activate && make dev && make qa


# Navigate back to root
cd ../..;


