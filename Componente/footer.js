
    

class footer extends HTMLElement {
    constructor(){
        super();
    const temple=$("#template-footer");
 
$('body').append(`<footer>
    <section class="footer-1">         
           <div class="contacto">
            <h3>Contacto</h3>
            <p>agduarte@live.com.ar</p>
            <p>Cel 3543-588563</p>
            <p>Chaco 33, Unquillo</p>
           </div>
           <div class="imaglogo">
            <img class="logo" src="../../imagenes/LOGO ARETHÉ 1/LOGO ARETHÉ 1.webp">
           </div>                      
              <div class="redes-sociales">
                  <a  href="https://www.facebook.com/arethe2017/"> 
                       <img class="redes" src="../../imagenes/logo facebook/facebook_109862.ico" alt="facebook">
                  </a>                  
                  <a  href="https://www.instagram.com/aldogabrielduarte?igsh=ODQ3c2o3N295dWRo">
                       <img class="redes" src="../../imagenes/logo instagram/instagam_109863.ico" alt="instagram">
                  </a>
                  <a href="https://wa.me/5493543588563?text=urlencodedtext/">
                      <img class="redes" src="../../imagenes/logo whatsapp/whatsapp_109861.ico" alt="whatsapp">
                  </a> 
              </div>               
           
          </section>
          <section class="footer-2">
            <p class="pie">2025 @todos los derechos reservados</p> 
          </section>
          </footer>`);
       
    }
}
customElements.define('com-footer', footer);