# API Currency Calculator

API diseñada para retornar la cotización de tres tipos de divisas 

### Instalación
Luego de clonar el repositorio
Instale las dependencias e inicie el servidor

```sh
$ cd apiCurrencyCalculator
$ npm install 
$ npm start
```


### Uso

Una vez el servidor este corriendo puede consultar a la siguiente ruta 

```url
https://{servidor_local}:3500/cotizacion/{divisa}
```

Divisas permitidas

| Divisa | Url |
| ------ | ------ |
| dolar | .../cotizacion/dolar |
| euro | .../cotizacion/euro |
| real | .../cotizacion/real |


### Respuesta
Petición:
```url
https://{servidor_local}:3500/cotizacion/dolar
```

Respuesta:
```json
[
    {
        "key": 0,
        "moneda": "USD",
        "precio": 1,
        "flag": "🇺🇸"
    },
    {
        "key": 1,
        "moneda": "EUR",
        "precio": 0.894,
        "flag": "🇪🇺",
        "lastUpdate": "2019-05-28T03:00:00"
    },
    {
        "key": 2,
        "moneda": "BRL",
        "precio": 4.0426,
        "flag": "🇧🇷",
        "lastUpdate": "2019-05-28T03:00:00"
    }
]
```
