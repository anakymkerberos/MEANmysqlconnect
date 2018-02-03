var mysql = require('mysql');

var conexion = mysql.createConnection({host:'localhost', user:'root', password:'', database:'mysqltest'});

conexion.connect();

var alumnos =conexion.query('select * from alumnos', function(error, resultado, campos){
    if (error)
        {
            console.log(error.message);
            return
        }
        else{
            console.log('lista de alumnos : ' , resultado);
        }
});

conexion.end();


//console.log(alumnos);



