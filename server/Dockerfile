FROM node:18-alpine

WORKDIR /app

# Install Expo dependencies and EAS CLI globally for background compilation
RUN npm install -g eas-cli expo-cli typescript

# Copy server files
COPY package*.json ./
RUN npm install

COPY . .

# Build TS files for Express
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
