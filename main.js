
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contraseña');

const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ!@#$%^&*abcdefghijklmnñopqrstuvwxyz0123456789';


function generar(){

    let numeroDigitado = parseInt (cantidad.value);

        if(numeroDigitado < 8){
            alert("Ingrese una cantidad de caracteres mayor que 8");
        }

            let password ='';


    for(let i=0; i < numeroDigitado; i++){

     let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password+= caracterAleatorio;

    }
    
    contraseña.value = password;

}

let text= "texto";









