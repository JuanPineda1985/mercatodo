const express = require ('express');
const app = express();
const path = require('path');

//Opciones
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Rutas
app.use(require('./routes/index'));

// Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Escuchando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});