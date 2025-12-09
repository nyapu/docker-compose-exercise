FROM php:8.2-apache

RUN docker-php-ext-install mysqli
RUN apt-get update && apt-get install -y \
    iputils-ping \
    curl \
    wget \
    net-tools \
    dnsutils \
    && rm -rf /var/lib/apt/lists/*
