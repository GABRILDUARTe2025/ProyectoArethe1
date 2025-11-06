
let usuarios=[];


class usuario{
    constructor(nombre, apellido, email, asunto, consulta){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.asunto=asunto;
        this.consulta=consulta;
        this.fecha=new Date();
    }
}


function validarNoVacio(ingreso) {
if (ingreso==="") {
     $(".datos-usuarios").append(" <div><p>Completar toda la información</p></div>");
    
     return true;
}
 else  return false;
    
 
    
}
const emailreg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ /*expresión regular*/
const nombrereg=/^[a-zA-ZÀ-ÿ\s]{2,50}$/ /*expresión regular para*/


$("#enviar").click(function(e){
    let nombre=$("#nombre").val();    
    let apellido=$("#apellido").val();       
    let email=$("#email").val();
    let asunto=$("#asunto").val();
    let consulta=$("#consulta").val(); 
        
    if (!validarNoVacio(nombre) && !validarNoVacio(apellido) && !validarNoVacio(email) && !validarNoVacio(asunto) && !validarNoVacio(consulta))
          {
                      
                    console.log ("pasó vacio");
                    
        if (nombrereg.test(nombre) && nombrereg.test(apellido) && emailreg.test(email))
        {
          
         alert (nombre,apellido, email, asunto, consulta)
                        usuarios.push(new usuario (nombre, apellido, email, asunto, consulta));  
                          $("#form-datos").reset();
                        }
               else {
                alert ("error");
                    
             }
                
        
        }
              else alert ("Falta Completar");
    
    
              
    console.log (usuarios);
}
)
    

