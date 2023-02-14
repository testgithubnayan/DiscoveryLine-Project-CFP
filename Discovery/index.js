let size = document.getElementById("size"),
  font_size = dogetElementById("box");
 
window.onresize = screen;
window.onload = screcument.getElementById("font-size"),
box = document.en;

function screen() {
  Width = window.innerWidth;
  Height = window.innerHeight;
  Box_width = box.clientWidth;
  Box_height = box.clientHeight;
  f_size = window.getComputedStyle(font_size).fontSize;

  // Screen Size (Width & height)

  size.innerHTML = "Width : " + Width + " px";
  size.innerHTML = "Height : " + Height + " px";

  // Display Font size
 font_size.innerHTML = `f-size : ` + f_size;

  // Box Width & height

  // box.innerHTML = "Width : " + Box_width;
  // box.innerHTML = "Height : " + Box_height;
}