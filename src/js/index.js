import "../../node_modules/bootstrap/scss/bootstrap.scss"
// import "../../node_modules/font-awesome/css/font-awesome.css"

import "../scss/base.scss"
import "../scss/layout.scss"
import "../scss/module.scss"

import "../../node_modules/bootstrap/dist/js/bootstrap"
import $ from "jquery"
window.$ = $

$.getJSON("db.json", function(data) {
    console.log("Data Test -", data.ShoppingBag[0].Name);
    var cart_details = document.getElementById('cart_details');
    cart_details.innerHTML = "";
    data.ShoppingBag.forEach(citem => {
        cart_details.innerHTML += `<hr class="ruler"> <div class="item">
                    <div class="product-image">
                        <img class="cImg1" src="` + citem.Image1 + `" alt="Placholder" class="product-frame" width="300" height="300"/>
                        <img class="cImg2" src="` + citem.Image2 + `" alt="placeholder" style="display: none;" width="300" height="300"/>
                    </div>
                    <div class="product-details">
                        <h1>  <span class="item-quantity"> ` + citem.Name + ` </h1>
                        
                        <p class="prod"> Product Code - ` + citem.ProdCode + ` </p>
                        <p class="col"> Color-` + citem.Color + `</p>
                        <div class="remove">
                           <button class="cart_edit">Edit</button>
                    <button>Remove</button>
                    <button>Save For Later</button>
                </div>  </div>
                
                    <div class="sidepro">
                 <div> <p class="siz"> ` + citem.Size + ` </p> </div>
                <div class="quantity">
                    <input type="number" value="4" min="1" class="quantity-field">
                </div>
                <div class="price"><p class="pric"> &#36;` + citem.Price + ` </p></div>
                </div> </div> `
    })
    $(".cart_edit").click(function(e) {
        console.log("Click Cart - " + $(e.currentTarget).parent().parent().parent().find('.siz').text());
        $("#itemView .modal-body #lbl_mName").text($(e.currentTarget).parent().parent().find('p').text());
        $("#itemView .modal-body #prodName").text($(e.currentTarget).parent().parent().find('h1').text());
        $("#itemView .modal-body #prodSize").text($(e.currentTarget).parent().parent().parent().find('.sidepro .siz').text());
        $("#itemView .modal-body #prodPrice").text($(e.currentTarget).parent().parent().parent().find('.pric').text());
        $("#itemView .modal-body .im1").attr("src", $(e.currentTarget).parent().parent().parent().find('.product-image .cImg1').attr("src"));
        $("#itemView .modal-body .im2").attr("src", $(e.currentTarget).parent().parent().parent().find('.product-image .cImg2').attr("src"));
        $("#itemView").modal('show');
    });
});

// $(document).on('click', '#cart_edit', function() {
//     console.log("edit clicked");
//     alert("Edit button clicked");

// })

$(document).ready(function() {
    $("#itemview").modal('show');

});