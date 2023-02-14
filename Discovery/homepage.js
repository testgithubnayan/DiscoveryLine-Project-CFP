document.addEventListener("DOMContentLoaded", () => {
    let places = [
      { title: "khandwa mission to lead the AIS team and help them design and develop custom technology", desc: "a goof place" },
      { title: "Indore mission to lead the AIS team and help them design and develop custom technology", desc: "a goof placeA" },
      { title: "Dubai mission to lead the AIS team and help them design and develop custom technology", desc: "a goof placeB" },
      { title: "E-dorado mission to lead the AIS team and help them design and develop custom technology", desc: "a goof placeC" },
    ];

    
  
    let count = 0;
  
    let title = document.querySelector("#title");
    let desc = document.getElementById("desc");
  
    let left = document.getElementById("left");
    let right = document.getElementById("right");
  
    title.textContent = places[count].title;
    desc.textContent = places[count].desc;
  
    left.addEventListener("click", () => { 
      if (count > 0) {
        count = count - 1;
        console.log("clicling", count);
        title.textContent = places[count].title;
        desc.textContent = places[count].desc;
      }
    });
  
    right.addEventListener("click", () => {
      if (count < 3) {
        count = count + 1;
        console.log("clicling", count);
        title.textContent = places[count].title;
        desc.textContent = places[count].desc;
      }
    });
  });
  
  
  
  
  
  