function insertarDatos() {
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
            _id:3,
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

insertarDatos()