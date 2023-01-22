<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <![endif]-->

<!-- svelte-ignore a11y-missing-attribute -->
<script>
    import Navbar from "./Sidebar.svelte";
    import ImageSlider from "./image-slider.svelte";
</script>
<html>
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- css principal-->
        <link rel="stylesheet" type="text/css" href="css/main.css"/>
        <!-- bootstrap CDN-->
        <link rel="stylesheet" type="text/javascript" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        <!-- navbar-->    
        
        <Navbar/>        
        <!-- main -->
        <main role="main" class="ml-sm-auto col-12">
            <div class="parallax-window" data-parallax="scroll">
                <div class="tm-section-wrap">
                    <section id="intro" class="background-img-src-index">
                        <div class="tm-bg-white-transparent tm-intro"></div>
                        <h2 class="tm-section-title mb-5 text-uppercase tm-color-primary">Tintoreria Mendez
                            <p class="tm-color-gray">
                                Desde el año 1992, hemos atendido las necesidades de limpieza de ropa de la ciudad
                          de los reyes, michoacan, atendiendo siempre cordialmente al cliente y entregando el mejor 
                          trabajo posible de tintoreria y lavanderia posible
                            </p>
                        </h2>
                    </section>
                </div>
            </div>
            <!-- lightslider -->
            <ImageSlider/>
            <!-- about us section-->
            <div class="tm-section-wrap bg-white">
                <section id="about" class="row tm-section">
                  <div class="col-xl-6">
                    <div class="tm-section-half">    
                        <div><i class="fas fa-6x fa-balance-scale mb-5 tm-section-icon"></i></div>                        
                        <h2 class="tm-section-title tm-color-primary mb-5">Acerca de nosotros-</h2>
                        <p class="mb-5">
                          Nuestras maquinas de lavado en seco aseguraran que la ropa de materiales delicados 
                          se pueda lavar a profundidad sin comprometer la prenda.
                        </p>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="tm-section-half">
                        <div><i class="far fa-6x fa-building mb-5 tm-section-icon"></i></div>
                        <h2 class="tm-section-title tm-color-primary mb-5">Perfil del equipo</h2>
                        <p class="mb-5">
                          Nuestro atento equipo de trabajo siempre lo atendera con una sonrisa y trabajamos duro para entregar
                          el mejor trabajo posible en el menor tiempo permitido.
                        </p>
                    </div>
                  </div>
                </section>
              </div>
              <!-- end of about us -->

              <!-- section of images -->

              <div class="tm-section-wrap bg-white">
                <section id="work" class="row tm-section">
                  
                  <div class="col-12">
                    <div class="w-100 tm-double-border-1 tm-border-gray">
                        <div class="tm-double-border-2 tm-border-gray tm-box-pad">
                          <!-- first row-->
                          <div class="row">
                          <div class="tm-gallery-wrap">
                            <h2 class="tm-color-primary tm-section-title mb-4 ml-2">Acerca de nosotros</h2>
                              <div class="tm-gallery">
                                <div class="tm-gallery-item">                        
                                  <figure class="effect-bubba">
                                    <img src="images/svg/laundry/laundry.svg" class="img-fluid">
                                    <figcaption>
                                      <h2>Lavado en seco</h2>
                                      <p>Maquinas de calidad industrial para lavado en seco</p>
                                      
                                    </figcaption>
                                  </figure>
                                <div class="tm-gallery-item">
                                  <figure class="effect-bubba">
                                    <img src="images/svg/laundry/clothes-laundry-fashion-svgrepo-com.svg" class="img-fluid">
                                    <figcaption>
                                      <h2>Tambien funcionamos como lavanderia</h2>
                                      <p>Somos la mejor solución para sus necesidades de lavado de ropa</p>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                              </div>
                                <!-- end first row-->
                                <!-- second row-->
                                <div class="row">
                                <div class="tm-gallery-item">
                                  <figure class="effect-bubba">
                                    <img src="images/svg/laundry/iron-svgrepo-com.svg" class="img-fluid">
                                    <figcaption>
                                      <h2>Tambien ofrecemos servicio de planchado.</h2>
                                      <p>No malgaste tiempo planchando su vestimenta formal, nosotros lo hacemos por usted</p>
                                      
                                    </figcaption>
                                  </figure>
                                </div>
                                </div>
                                <div class="tm-gallery-item">
                                  <figure class="effect-bubba">
                                    <img src="images/svg/laundry/laundry-svgrepo-com.svg" class="img-fluid">
                                    <figcaption>
                                      <h2>Simplemente, la mejor lavanderia de Los Reyes </h2>
                                      <p>Tenemos el mejor equipo y personal para sus necesidades de lavado y planchado de ropa.</p>
                                    </figcaption>
                                  </figure>
                                </div>
                                </div>
                                <!-- end of second row-->
                                <!-- end of images-->

                                <!-- contacto-->
                                <div class="parallax-window" data-parallax="scroll">
                                  <div class="tm-section-wrap">
                                      <section id="intro" class="background-img-src-index">
                                          <div class="tm-bg-white-transparent tm-intro"></div>
                                          <h2 class="tm-section-title mb-5 text-uppercase tm-color-primary">Contacto
                                            <!-- google maps-->
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.844185725535!2d-102.47820178505651!3d19.591174986794442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842e416bac8b46f1%3A0xc3d50a9ea0a59d3!2sLa%20Tinto%20M%C3%A9ndez!5e0!3m2!1sen!2smx!4v1673546865252!5m2!1sen!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                          </h2>
                                      </section>
                                  </div>
                              </div>
                              </div>
                          </div>                        
                        </div>                  
                      </div>     
                  </div>         

        <!-- end of main -->
        </main>    
    </body>
</html>
