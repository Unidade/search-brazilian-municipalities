# Descrição

Este projeto é um mapa interativo de todos os municipios do Brasil, utiliza os dados de malhas municipais e censo demográfico(dados de 2022 IBGE). É possivel realizar buscas complexas geospacais, utilizar filtros, além de visualizar dados como total população de uma área qualquer.

## Tecnologias

### Backend

- Express
- Redis

### Frontend

- Leaflet, criação dos mapas
- Nextjs: Frontend
- TailwindCSS

## Como utilizar

# TODO

## Documentação Técnica

Foi necessário realizar o mapeamento entre as informações utilizada as estruturadas de dados suportadas pelo Redis.

```js
    CD_MUN: code,
    NM_MUN: name,
    SIGLA_UF: state,
    AREA_KM2: area_km2,
```
