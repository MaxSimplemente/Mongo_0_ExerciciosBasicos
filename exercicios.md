# Exercicios
## Base de datos libros

> Crea unha función en JS para insertar a través desa función a seguinte bbdd
use libreria
load("libreria.js")

```js
db.libros.insertOne(
  {
    _id: 1,  
    titulo: 'El aleph',
    autor: 'Borges',
    editorial: ['Siglo XXI','Planeta'],
    precio: 20,
    cantidade: 50 
  }
)
db.libros.insertOne(
  {
    _id: 2,  
    titulo: 'Martin Fierro',
    autor: 'Jose Hernandez',
    editorial: ['Siglo XXI'],
    precio: 50,
    cantidade: 12
  }
)
db.libros.insertOne(
  {
    _id: 3,  
    titulo: 'Aprenda PHP',
    autor: 'Mario Molina',
    editorial: ['Siglo XXI','Planeta'],
    precio: 50,
    cantidade: 20
  }
)
db.libros.insertOne(
  {
    _id: 4,  
    titulo: 'Java en 10 minutos',
    editorial: ['Siglo XXI'],
    precio: 45,
    cantidade: 1 
  }
)
```


- Insertar 2 documentos na colección libros
```javascript
db.libros.insertMany([{
_id:5,
titulo:"Aprenda Dbase",
autor:"Maria Melina",
editorial:Array (5),
precio:56,
cantidade:200},{ 
_id:6,
titulo:"Dbase III plus en 10 minutos",
editorial:Array (1),
precio:34,
cantidade:1}])

{
  acknowledged: true,
  insertedIds: {
    '0': 5,
    '1': 6
  }
```
- Intentar insertar un documento con clave repetida (qué di a consola?, o permite?)


- Mostrar todos os documentos

```js
db.libros.find()
{
  _id: 1,
  titulo: 'El aleph',
  autor: 'Borges',
  editorial: [
    'Siglo XXI',
    'Planeta'
  ],
  precio: 20,
  cantidade: 50
}
{
  _id: 2,
  titulo: 'Martin Fierro',
  autor: 'Jose Hernandez',
  editorial: [
    'Siglo XXI'
  ],
  precio: 50,
  cantidade: 12
}
{
  _id: 3,
  titulo: 'Aprenda PHP',
  autor: 'Mario Molina',
  editorial: [
    'Siglo XXI',
    'Planeta'
  ],
  precio: 50,
  cantidade: 20
}
{
  _id: 4,
  titulo: 'Java en 10 minutos',
  editorial: [
    'Siglo XXI'
  ],
  precio: 45,
  cantidade: 1
}
{
  _id: 5,
  titulo: 'Aprenda Dbase',
  autor: 'Maria Melina',
  editorial: [
    null,
    null,
    null,
    null,
    null
  ],
  precio: 56,
  cantidade: 200
}
{
  _id: 6,
  titulo: 'Dbase III plus en 10 minutos',
  editorial: [
    null
  ],
  precio: 34,
  cantidade: 1
}
```
- Agrega unha colección chamada "posts" e inserta 1 documento cunha estructura calquera
```js
db.posts.insertOne(
{
  _id: 1,
  titulo: 'El aleph',
  autor: 'Borges',
  editorial: [
    'Siglo XXI',
    'Planeta' ],
  precio: 20,
  cantidade: 50
})
{
  acknowledged: true,
  insertedId: 1
}
```
- Cantas bbdd podes visualizar agora mesmo?
```js
show dbs
admin           40.00 KiB
artigos         56.00 KiB
config         108.00 KiB
estanteria      80.00 KiB
libreria       112.00 KiB
local           40.00 KiB
medicamentos    40.00 KiB
miBaseDeDatos   40.00 KiB
nuevolibro      48.00 KiB
prueba1         40.00 KiB
revista          8.00 KiB
usuarios        72.00 KiB
```
- Elimina a coleción chamada "posts"
```js
db.post.drop()
true
```
- Crea outra bbdd chamada borrar, introdúcelle un dato calquera
```js
db.borrar.insertOne({_id:4,
titulo:"Java en 10 minutos",
editorial:Array (1),
precio:45,
cantidade:1})
{
  acknowledged: true,
  insertedId: 4
}
```
- Borra a base de datos creada no punto anterior.
```js
db.borrar.deleteOne({})
{
  acknowledged: true,
  deletedCount: 1
}
```
## Base de datos artigos
- Crea a seguinte bbdd, elixe un nome apropiado:
```js
use artigos
switched to db artigos
artigos
```
### Utilización de comparadores
- Imprime todos os datos da bbdd creada
```js
db.elementos.insertMany([{
    _id: 1,  
    nome: 'MULTIFUNCION HP DESKJET 2675',
    rubro: 'impresora',
    precio: 3000,
    stock: 20   },  
  {
    _id: 2,  
    nome: 'MULTIFUNCION EPSON EXPRESSION XP241',
    rubro: 'impresora',
    precio: 3700,
    stock: 5 
  },  
  {
    _id: 3,  
    nome: 'LED 19 PHILIPS',
    rubro: 'monitor',
    precio: 4500,
    stock: 2
  },  
  {
    _id: 4,  
    nome: 'LED 22 PHILIPS',
    rubro: 'monitor',
    precio: 5700,
    stock: 4
  },  
  {
    _id: 5,  
    nome: 'LED 27 PHILIPS',
    rubro: 'monitor',
    precio: 12000,
    stock: 1
  },  
  {
    _id: 6,  
    nome: 'LOGITECH M90',
    rubro: 'mouse',
    precio: 300,
    stock: 4
  }])
{
  acknowledged: true,
  insertedIds: {
    '0': 1,
    '1': 2,
    '2': 3,
    '3': 4,
    '4': 5,
    '5': 6
  } 
}
```
- Imprimir todos os artigos que pertencen ou rubro de 'mouse'.
```js
db.elementos.find({rubro:'mouse'}).pretty()
{
  _id: 6,
  nome: 'LOGITECH M90',
  rubro: 'mouse',
  precio: 300,
  stock: 4
}
```
- Imprimir todos os artigos cun precio maior o igual a 5000.
```js
{
  _id: 4,
  nome: 'LED 22 PHILIPS',
  rubro: 'monitor',
  precio: 5700,
  stock: 4
},
{
  _id: 4,
  nome: 'LED 22 PHILIPS',
  rubro: 'monitor',
  precio: 5700,
  stock: 4
}
```
- Imprimir todas as impresoras que teñen un precio maior ou igual a 3500.
```js
db.artigos1.find({rubro:'impresora',precio:{$gte:3500}}).pretty()
{
  _id: 2,
  nome: 'MULTIFUNCION EPSON EXPRESSION XP241',
  rubro: 'impresora',
  precio: 3700,
  stock: 5
}
```
- Imprimir todos os artigos cuxo stock atópase comprendido entre 0 y 4.
```js
db.artigos1.find({stock:{$gte:0,$lte:4}}).pretty()
{
  _id: 3,
  nome: 'LED 19 PHILIPS',
  rubro: 'monitor',
  precio: 4500,
  stock: 2
},
{
  _id: 4,
  nome: 'LED 22 PHILIPS',
  rubro: 'monitor',
  precio: 5700,
  stock: 4
},
{
  _id: 5,
  nome: 'LED 27 PHILIPS',
  rubro: 'monitor',
  precio: 12000,
  stock: 1
}
```
- Imprimir todos os documentos da colección 'artigos' que non son impresoras.
```js
db.artigos1.find({rubro:{$ne:'impresora'}}).pretty()

  {
  _id: 3,
  nome: 'LED 19 PHILIPS',
  rubro: 'monitor',
  precio: 4500,
  stock: 2
},
{
  _id: 4,
  nome: 'LED 22 PHILIPS',
  rubro: 'monitor',
  precio: 5700,
  stock: 4
},
{
  _id: 5,
  nome: 'LED 27 PHILIPS',
  rubro: 'monitor',
  precio: 12000,
  stock: 1
},
 
 {
  _id: 5,
  nome: 'LED 27 PHILIPS',
  rubro: 'monitor',
  precio: 12000,
  stock: 1
}
```

### Borrado de datos
> Lembra que as funcións son <span style="color:yellow;">deleteOne</span> e <span style="color:yellow;">deleteMany</span>
- Borra os documentos da colección 'artigos' onde 'rubro' son 'impresoras'
```js
db.artigos1.deleteMany({rubro:"impresora"})
{
  acknowledged: true,
  deletedCount: 2
}
```
- Borra todos os artigos que teñen un '_id' maior ou igual a 5.
```js
db.artigos1.deleteOne({_id:{$gte:5}})
{
  acknowledged: true,
  deletedCount: 1
}
```

### Modificación 
> Lembra que as funcións son <span style="color:yellow;">updateOne</span> e <span style="color:yellow;">updateMany</span>
- Borra a base de datos creada de artigos.
```js
db.dropDatabase()
{ ok: 1, dropped: 'artigos' }
```
- Volver crear a base de datos de artigos de novo.
```js
db.artigos.insertMany([{
            _id:1,
            nome:"MULTIFUNCION HP DESKJET 2675",
            rubro:"impresora",
            precio:3000,
            stock:20
    },
        {
            _id:2,
            nome:"MULTIFUNCION EPSON EXPRESSION XP241",
            rubro:"impresora",
            precio:3700,
            stock:5
    },   
        { 
            _id:3,
            nome:"LED 19 PHILIPS",
            rubro:"monitor",
            precio:4500,
            stock:2
    },
        { 
            _id:4,
            nome:"LED 22 PHILIPS",
            rubro:"monitor",
            precio:5700,
            stock:4
    },        {
            _id:5,
            nome:"LED 27 PHILIPS",
            rubro:"monitor",
            precio:12000,
            stock:1
    },
        {  
            _id:6,
            nome:"LOGITECH M90",
            rubro:"mouse",
            precio:300,
            stock:4,
    }       
])
{
  acknowledged: true,
  insertedIds: {
    '0': 1,
    '1': 2,
    '2': 3,
    '3': 4,
    '4': 5,
    '5': 6
  }
}
```
- Modifica o prezo do mouse 'LOGITECH M90'
```js
db.artigos.updateOne({nome:{$eq:"LOGITECH M90"}},{$set:{precio:350}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```
- Fixa o stock en 0 do artigo onde o '_id' é 6.
```js
db.artigos.updateOne({_id:6},{$set:{stock:0}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```
- Fixa o stock de todos os artigos a 0.
```js
db.artigos.updateOne({},{$set:{stock:0}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```
- Modifica o artigo con '_id' = 6, o cal deberá introducir unha nova propiedade: 'encargados', onde o valor 
introducido será o seguinte array:
['Juan','Francisco']
```js
db.artigos.updateOne({_id:6},{$set:{encargados:['Juan','Francisco']}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```
## Base de datos de medicamentos
> Lembra que utilizar un booleano ou un valor *1* ou *0*, realiza a tarefa de mostrar ou ocultar o valor buscado.

- Crea unha base de datos onde crear a seguinte colección:
```js
db.medicamentos.insertOne(
        {     
            _id:1,
            nome:"Sertal",
            laboratorio:"Roche",
            precio:5.2,
            cantidade:100
        }
    )
    db.medicamentos.insertOne(
        { 
            _id:2,
            nome:"Buscapina",
            laboratorio:"Roche",
            precio:4.1,
            cantidade:200
        }
    )
    db.medicamentos.insertOne(
        { 
            _id:3
            nome:"Amoxidal 500",
            laboratorio:"Bayer",
            precio:15.6,
            cantidade:100
        }
    )
    db.medicamentos.insertOne(
        {  
         
            _id:4,
            nome:"Paracetamol 500",
            laboratorio:"Bago",
            precio:1.9,
            cantidade:200
        }
    )
    db.medicamentos.insertOne(
        { 
            _id:5,
            nome:"Bayaspirina",
            laboratorio:"Bayer",
            precio:2.1,
            cantidade:150
        }
    )
    db.medicamentos.insertOne(
        { 
            _id:6,
            nome:"Amoxidal jarabe",
            laboratorio:"Bayer",
            precio:5.1,
            cantidade:50
        }
    )
}

```
### Atopar con ... e uso de 

- Mostra todos os documentos onde só se visualicen o _id e o laboratorio
```js
{
  {
  _id: 1,
  laboratorio: 'Roche'
}
  _id: 2,
  laboratorio: 'Roche'
  {
  _id: 3,
  laboratorio: 'Bayer'
}
{
  _id: 4,
  laboratorio: 'Bago'
}
{
  _id: 5,
  laboratorio: 'Bayer'
}
{
  _id: 6,
  laboratorio: 'Bayer'
}
}
```
- Mostra os medicamentos onde laboratorio sexa 'Roche' e onde o precia sexa menor a 5.
```js
db.medicamentos.find({laboratorio:'Roche',precio:{$lt:5}})
{
        _id: 2,
        nome: 'Buscapina',
        laboratorio: 'Roche',
        precio: 4.1,
        cantidade: 200
}
```
- Mostra os medicamentos onde laboratorio sexa 'Roche' ou onde o precio sexa maior a 5.
```js
db.medicamentos.find({laboratorio:'Roche',precio:{$gte:5}})
{
        _id: 1,
        nome: 'Sertal',
        laboratorio: 'Roche',
        precio: 5.2,
        cantidade: 100
}
```
- Mostra os medicamentos onde laboratorio non sexa 'Bayer'.
```js

db.medicamentos.find({laboratorio:{$ne:"Roche"}})
{
  _id: 3,
  nome: 'Amoxidal 500',
  laboratorio: 'Bayer',
  precio: 15.6,
  cantidade: 100
},
{
  _id: 4,
  nome: 'Paracetamol 500',
  laboratorio: 'Bago',
  precio: 1.9,
  cantidade: 200
},
{
  _id: 5,
  nome: 'Bayaspirina',
  laboratorio: 'Bayer',
  precio: 2.1,
  cantidade: 150
},
{
  _id: 6,
  nome: 'Amoxidal jarabe',
  laboratorio: 'Bayer',
  precio: 5.1,
  cantidade: 50
}
```
- Mostra os medicamentos onde laboratorio sexa 'Bayer' e onde cantidade non sexa 100.
```js
db.medicamentos.find({laboratorio:"Bayer",cantidade:{$ne:100}})
{
  _id: 5,
  nome: 'Bayaspirina',
  laboratorio: 'Bayer',
  precio: 2.1,
  cantidade: 150
},
{
  _id: 6,
  nome: 'Amoxidal jarabe',
  laboratorio: 'Bayer',
  precio: 5.1,
  cantidade: 50
}
```
Mostra os laboratorios que sexan 'Bayer' e o precio menor que 6, pero só debes mostrar o nome e o laboratorio
```js
db.medicamentos.find({
  $and: [
    { laboratorio: 'Bayer' },
    { precio: { $lt: 6 } }
  ]
}, {
  _id: 0, 
  nome: 1, 
  laboratorio: 1 
})
{
  nome: 'Bayaspirina',
  laboratorio: 'Bayer'
}
{
  nome: 'Amoxidal jarabe',
  laboratorio: 'Bayer'
}
```

### Eliminar

- Borra os documentos da colección onde laboratorio sexa "Bayer" ou onde precio sexa menor a 3.
```js
db.medicamentos.deleteMany({
  $or: [
    { laboratorio: "Bayer" },
    { precio: { $lt: 3 } }
  ]
})
{
  acknowledged: true,
  deletedCount: 4
}
```

### Modificar

- Cambia a cantidade 200 a todos os medicamentos de 'Roche' onde o precio sexa maior a 5.
```js
db.medicamentos.updateMany(
    {
        laboratorio: 'Roche',
        precio: { $gt: 5 }
    },
    {
        $set: { cantidad: 200 }
    }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```