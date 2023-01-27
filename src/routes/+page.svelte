<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <![endif]-->

<!-- svelte-ignore a11y-missing-attribute -->
<script>
    import Navbar from "./front_end/modules/Sidebar.svelte";
    import ImageSlider from "./front_end/modules/image-slider.svelte";
</script>
<html>
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- principal css-->
        <link rel="stylesheet" type="text/css" href="../../assets/css/main.css"/>
        <!-- image hover css-->
        <link rel="stylesheet" type="text/css" href="../../assets/css/image-hover.css"/>
        <!-- bootstrap CDN-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <!-- page-slider-->
        <link rel="stylesheet" type="text/css" href="../../assets/css/page-slider.css"/>
        <script src="../../assets/js/page-slider.js" type="text/javascript"></script>
    
      </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        <!-- navbar-->           
        <Navbar/>        
        <!-- main -->
        <main>
          <!-- start of slides -->
          <div class="slides">
            <!--
              CSS scroll snap
              https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap/Basic_concepts
            -->
            <!-- <article class="scroller">-->
              <section class="introduction-container frontpage1" >
                <span>
                  <p>
                    Desde el año 1992, hemos atendido las necesidades de limpieza de ropa de la ciudad
                    de los reyes, michoacan, atendiendo siempre cordialmente al cliente y entregando el mejor 
                    trabajo posible de tintoreria y lavanderia posible
                  </p>
                </span>
              </section><!-- end frontpage1-->
              <!-- </article> end of scroller -->
            

            <!-- about us section-->
            <section class="introduction-container frontpage2">
              <!-- image slider-->
              <div class="image-slider-main-css">
                <ImageSlider/>
              </div>
              <!-- end of image slider -->
              <span>
              <p>
                Nuestras maquinas de lavado en seco aseguraran que la ropa de materiales delicados 
                se pueda lavar a profundidad sin comprometer la prenda.
              </p>
              <p>
                Nuestro atento equipo de trabajo siempre lo atendera con una sonrisa y trabajamos duro para entregar
                el mejor trabajo posible en el menor tiempo permitido.
              </p>
              </span>
            </section>
              <!-- end of frontpage2 -->
            
              <!-- section of images -->
            <section class="introduction-container frontpage3">
            <h2>Acerca de nosotros</h2>
              <div class="hover-img-wrapper">
                <!-- 1) -->
                <div class="image-hover-1">
                  <div class="hover-img-cooltrick">
                  <div class="hover-img-cooltrick-item">
                    <figure class="hover-img-cooltrick-effect">
                    <img src="../../../assets/svg/laundry/laundry.svg" class="icons-svg-laundry" alt="laundry-icon">                                   
                      <figcaption>             
                      <h2>
                        Lavado en seco
                      </h2>
                      <p>
                        1234567
                      </p>
                      </figcaption>
                    </figure>
                    </div>
                    </div>
                  </div><!-- end of hover-img-cooltrick-->
                </div><!-- end of hover image wrapper-->
                <!-- 2) -->
                <div class="image-hover-2">
                  <div class="hover-img-cooltrick">
                    <div class="hover-img-cooltrick-item">
                    <figure class="hover-img-cooltrick-effect">
                    <img src="../../../assets/svg/laundry/clothes-laundry-fashion-svgrepo-com.svg" class="icons-svg-laundry"> 
                    <figcaption>
                      <h2>
                        Maquinas de calidad industrial para lavado en seco
                      </h2>
                      <p>
                        1234567
                      </p>
                      </figcaption>
                      </figure>
                      </div>
                  </div>
                </div>
              </section><!-- end frontpage3-->
                <!-- 3) -->
                <section class="introduction-container frontpage4">
                <div class="image-hover-3">
                  <div class="hover-img-cooltrick">
                  <div class="hover-img-cooltrick-item">
                    <figure class="hover-img-cooltrick-effect">
                    <img src="../../../assets/svg/laundry/iron-svgrepo-com.svg" class="icons-svg-laundry" alt="laundry-icon">
                      <figcaption>
                        <h2>
                          Tambien ofrecemos servicio de planchado.
                        </h2>
                        <p>
                          1234567
                        </p>
                      </figcaption>
                    </figure>
                    </div>
                  </div>
                </div>
                <!-- 4) -->
                <div class="image-hover-4">
                  <div class="hover-img-cooltrick">
                    <div class="hover-img-cooltrick-item">
                    <figure class="hover-img-cooltrick-effect">
                    <img src="../../../assets/svg/laundry/laundry-svgrepo-com.svg" class="icons-svg-laundry" alt="laundry-icon">
                      <figcaption>
                        <h2>
                          Simplemente, la mejor lavanderia de Los Reyes 
                        </h2>
                        <p>
                          1234567
                        </p>
                      </figcaption>
                    </figure>
                    </div>
                  </div>
                
                <!-- end of second row-->
                </div><!-- end imagehover4-->
              </section><!-- end frontpage4-->
            
          
            <!-- frontpage 4-->
            <!-- contact-->
            <!-- google maps-->
            <section class="introduction-container frontpage5">
              <h2 >Contacto </h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.844185725535!2d-102.47820178505651!3d19.591174986794442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842e416bac8b46f1%3A0xc3d50a9ea0a59d3!2sLa%20Tinto%20M%C3%A9ndez!5e0!3m2!1sen!2smx!4v1673546865252!5m2!1sen!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <!-- scripts -->
            </section>                    
            </div><!--end of slider div--> 
            
            <!-- page-slider-->
            <script>
              var mySlider = slider('.slides');
            </script> <!-- end of frontpage4-->
        </main> <!-- end of main  -->    
    </body>
</html>

