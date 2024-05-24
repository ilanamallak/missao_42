#!/bin/bash

# Verifica se não foram fornecidos argumentos
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 0
fi

# Exibe os argumentos passados
for ((i=1; i<=$# && i<=3; i++)); do
    echo "${!i}"
done
