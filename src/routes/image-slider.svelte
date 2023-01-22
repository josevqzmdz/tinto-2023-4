<head>
    <!-- carusel lightslider -->
    <!-- CDN jquery-->
    <script
        src="https://code.jquery.com/jquery-3.6.3.js"
        integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM="
        crossorigin="anonymous">
    </script>
    <link type="text/css" rel="stylesheet" href="../../src/routes/css/lightslider.css" />                  
    <script src="../../src/routes/js/lightslider.js"></script>        
</head>

<body>
<ul id="lightSlider">
    <li>
        <img src="images/images/tinto.jpg">
    </li>
    <li>
        <img src="images/images/pic1tinto.jpg">
    </li> 
    <li>
        <img src="images/images/pic2tinto.jpg">
    </li>    
    <li>
        <img src="images/images/pic3tinto.jpg">
    </li>     
    <li>
        <img src="images/images/pic4tinto.jpg">
    </li>      
    <li>
        <img src="images/images/pic5tinto.jpg">
    </li> 
    <li>
        <img src="images/images/tinto6.jpg">
    </li> 
    <li>
        <img src="images/images/tinto7.jpg">
    </li> 
    <li>
        <img src="images/images/tinto8.jpg">
    </li> 
    <li>
        <img src="images/images/tinto9.jpg">
    </li> 
    <li>
        <img src="images/images/tinto10.jpg">
    </li> 
    <li>
        <img src="images/images/tinto11.jpg">
    </li> 
    <li>
        <img src="images/images/tinto12.jpg">
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