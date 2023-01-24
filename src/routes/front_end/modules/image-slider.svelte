<head>
    <!-- carusel lightslider -->
    <!-- CDN jquery-->
    <script
        src="https://code.jquery.com/jquery-3.6.3.js"
        integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM="
        crossorigin="anonymous">
    </script>
    <link type="text/css" rel="stylesheet" href="css/lightslider.css" />                  
    <script src="js/lightslider.js" type="application/javascript"></script>        
</head>

<body>
<ul id="lightSlider">
    <!--
         static is your root folder after the build step. So when you put an 
         image into status/img/photo.jpg, you can reference it via
        /img/photo.jpg
    -->
    <li>
        <img src="../../../images/images/tinto.png">
    </li>
    <li>
        <img src="../../../images/images/pic1tinto.png">    
    </li> 
    <li>
        <img src="../../../images/images/pic2tinto.png">
    </li>    
    <li>
        <img src="../../../images/images/pic3tinto.png">
    </li>     
    <li>
        <img src="../../../images/images/pic4tinto.png">
    </li>      
    <li>
        <img src="../../../images/images/pic5tinto.png">
    </li> 
    <li>
        <img src="../../../images/images/tinto6.png">
    </li> 
    <li>
        <img src="../../images/images/tinto7.png">
    </li> 
    <li>
        <img src="../../../images/images/tinto8.png">
    </li> 
    <li>
        <img src="../../../images/images/tinto9.png">
    </li> 
    <li>
        <img src="../../../images/images/tinto10.png">
    </li> 
    <li>
        <img src="../../../images/images/tinto11.png">
    </li> 
    <li>
        <img src="../../../images/images/tinto12.png">
    </li> 
  </ul>

    <script type="text/javascript">
        $(document).ready(function() {
            $("#lightSlider").lightSlider(
                {
                    minSlide:1,
                    maxSlide:1,
                    mode:'fade'
                }
            ); 
        });
    </script>
</body>