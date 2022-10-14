//var chosensort = document.getElementById("sortby").selectedIndex




//function that generates element for each product with relevant details.
function construct(array) {
  //creates string list of available sizes for product
  for (var x of array) {
    sizelist = []
    for (var value in x) {
      if (x[value] == 1) {
        sizelist.push(value);
      };
    };
    //defining a few variables to identify product
    var target = document.getElementById("flexbox-products");
    var pos = array.indexOf(x);
    var divname = "product" + (pos + 1);
    //create box that houses product + info
    var newproduct = document.createElement("div");
    newproduct.style.backgroundColor = "white";
    newproduct.style.margin = "20px";
    newproduct.style.width = "200px";
    newproduct.style.height = "290px";
    newproduct.style.borderRadius = "10px";
    newproduct.setAttribute("id", divname);
    newproduct.className = "productbox";
    //position product image in box
    var image = document.createElement("img");
    image.src = x.image;
    image.style.height = "160px";
    image.style.width = "160px";
    image.style.display = "block";
    image.style.margin = "auto";
    image.style.marginTop = "0px";

    //add title of product to box
    var titlebox = document.createElement("div");
    var title = document.createTextNode(x.name);
    titlebox.style.display = "inline-flex";
    titlebox.style.flexDirection = "column"
    titlebox.style.fontSize = "15px";
    titlebox.style.textAlign = "center";
    titlebox.style.width = "180px";
    titlebox.style.paddingLeft = "8px";
    titlebox.style.paddingRight = "8px";
    titlebox.style.paddingTop = "15px";
    titlebox.setAttribute("id", "titlebox");

    //create flex-container that displays available sizes of product
    var sizebox = document.createElement("div");
    sizebox.style.height = "34px";
    sizebox.className = "sizebox";
    sizebox.style.display = "inline-flex";
    sizebox.style.backgroundColor = "#F8F0E3";
    sizebox.style.marginLeft = "25px";
    sizebox.style.marginTop = "0px";
    sizebox.style.marginBottom = "5px";
    sizebox.style.padding = "2px";
    sizebox.style.borderRadius = "4px";


    var pricebox = document.createElement("div");
    var price = document.createElement("div");
    pricebox.setAttribute("id","pricebox");
    price.innerHTML =x.price + "€";
    price.style.display = "inline-flex";
    price.style.marginLeft = "27px";
    price.style.marginTop = "3px";
    price.style.padding = "2px";
    price.style.borderRadius = "4px";
    price.style.outline = "2px solid black";


    for (var size of sizelist) {
      var sizewidget = document.createElement("A");
      sizewidget.className = "sizewidget";
      sizewidget.innerHTML = size;
      sizewidget.href = x.link;
      sizewidget.target = "_blank";
      sizewidget.style.display = "inline-block";
      sizewidget.style.margin = "3px";
      sizewidget.style.padding = "3px";
      sizewidget.style.color = "black";
      sizewidget.style.borderRadius = "3px";
      sizewidget.style.textDecoration = "none !important";
      sizewidget.style.outline = "2px solid black";
      sizebox.appendChild(sizewidget);
    }
    newproduct.appendChild(titlebox);
    newproduct.appendChild(image);
    newproduct.appendChild(sizebox);
    pricebox.appendChild(price);
    newproduct.appendChild(pricebox);
    titlebox.appendChild(title);
    target.appendChild(newproduct);






  };
}
