#!/bin/bash

# Generate Typescript models
npm run ts-gen;

# Remove previous build artifacts
rm -rf ./resources/ts/src;
rm -rf ./resources/ts/dist;
rm -rf ./resources/ts/node_modules;

# Create target directory for Typescript models
mkdir -p ./resources/ts/src;

# Copy Typescript models to target directory
cp -r ./build/ts/models/* ./resources/ts/src;

# Navigate to Typescript directory
cd ./resources/ts;

# Install Dependencies
npm ci;

# Run QA w/ Auto-Fixes
npm run qa

# Build the Typescript library
npm run build;

# Rebuild the Docs
npm run docs

# Navigate back to root
cd ../..;


