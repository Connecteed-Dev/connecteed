# --- Stage 1: Build ---
FROM node:20-alpine as build-stage

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file delle dipendenze
COPY package*.json ./

# Installa le dipendenze
RUN npm ci

# Copia tutto il resto del codice sorgente
COPY . .

# Compila il progetto (solitamente crea la cartella /dist)
RUN npm run build

# --- Stage 2: Production ---
FROM nginx:alpine as production-stage

# Copia i file compilati dallo stage precedente alla cartella di Nginx
# Vite di default crea la build nella cartella 'dist'.
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copia il tuo file di configurazione Nginx personalizzato
# Questo sovrascrive la configurazione di default del sito
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Espone la porta dall'environment file
EXPOSE ${PORT}  

# Avvia Nginx
CMD ["nginx", "-g", "daemon off;"]