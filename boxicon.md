
Usage as a web component
<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
<box-icon  type="solid" name="rocket"></box-icon>
<box-icon  type="logo" name="facebook-square"></box-icon>

The box-icon custom element supports the following attributes:

  <box-icon 
 type = "regular|solid|logo"
name="adjust|alarms|etc...."
color="blue|red|etc..."
size="xs|sm|md|lg|cssSize"
rotate="90|180|270"
flip="horizontal|vertical"
border="square|circle"
animation="spin|tada|etc..."
animation="spin|tada|etc..."
pull = "left|right"
></box-icon>

===========================
Usage as a Font
Import the CSS
Copy-paste the stylesheet link into your head to load our CSS

<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
This will load boxicons font into your webpage

HTML
To use an icon on your page, add a prefixbx- for regular icons, bxs- for solid icons & bxl- for logos followed by the icon name and seperate class with thebx:

<i class='bx bx-user'></i>
<i class='bx bxs-user'></i>
<i class='bx bxl-facebook-square'></i>