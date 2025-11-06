class header extends HTMLElement {
    constructor(){
        super();
    const temple=$("#template-header");
 
$('.comHeader').append(`
      
       <div class="Titulo">
           <h1>ARETHÉ INGENIERÍA</h1>
       </div>
       <div class="Subtitulo">
           <h2>Empresa Especializada En Proyectos De Gas  y Electricidad</h2>
       </div>       
        <!--Aqui creamos menues principales-->
        
    `);
       
    }
}
customElements.define('com-header', header);