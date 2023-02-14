document.addEventListener("DOMContentLoaded", () => {
    let places = [
      { title: "shore", desc: "a goof place" },
      { title: "shoreA", desc: "a goof placeA" },
      { title: "shoreB", desc: "a goof placeB" },
      { title: "shoreC", desc: "a goof placeC" },
    ];

    // let plces = [
    //     { title: "shore", },
    //     { title: "shoreA" },
    //     { title: "shoreB"  },
    //     { title: "shoreC" },
    // ] ;

  
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
  
  
  
  
  
  