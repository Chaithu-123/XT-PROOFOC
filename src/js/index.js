import "../../node_modules/bootstrap/scss/bootstrap.scss"
import "../scss/base.scss"
import "../scss/layout.scss"
import "../scss/module.scss"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import $ from "jquery"
import { createHTMLElement } from "../js/service"
window.$ = $

const url = 'http://localhost:3000/ShoppingBag';



$.getJSON(url, function(data) {
    const cartDetails = document.getElementById('cart_details');
    data.forEach(citem => {
        const sCart = createHTMLElement(`
        <div id = "${citem.id}">
                    <div class="column-labels">
                        <label class="product-image">Image</label>
                        <label class="product-details">Product</label>
                        <label class="product-price">Price</label>
                        <label class="product-size">size</label>
                        <label class="product-quantity">Quantity</label>
                    </div>
                    <div class="shopping-cart">  
                    <div class="product">
                        <div class="product-image">
                            <img class="cImg1" src="${citem.Image1}" alt="Placholder" class="product-frame"/>
                            <img class="cImg2" src="${citem.Image2}" alt="placeholder" style="display: none;"/>
                        </div>
                        <div class="product-details">
                        <div class="product-title"><h2>${citem.Name}</h2></div>
                            <p class="product-description">Product Code - ${citem.ProdCode}</p>
                            <p class="product-id">Product Id-${citem.id}</p>
                            <div class="remove">
                                <button class="cart_edit" id="edit_${citem.id}">Edit</button>
                                <button class="cart_remove" id="remove_${citem.id}">Remove</button>
                                <button class="cart_save">Save For Later</button>
                            </div> 
                        </div>
                        <div class="product-price">${citem.Price}</div>
                        <div class="product-size">${citem.Size}</div>
                        <div class="product-quantity">
                            <input type="number" value="1" min="1" class="quantity-field" aria-label="QTY">
                        </div>    
                    </div>    
                </div>      
            </div>
        </div>`);


        const ref = sCart.querySelector(`#remove_${citem.id}`).addEventListener('click', (event) => {
            const id = event.target.id.split('_')[1];
            const pRef = document.getElementById('cart_details');
            const childElementRef = document.getElementById(id);
            pRef.removeChild(childElementRef);
        });

        cartDetails.appendChild(sCart);
    })
    $(".cart_edit").click(function(e) {

        $("#itemView .modal-body #lbl_mName").text($(e.currentTarget).parent().parent().find('.product-description').text());
        $("#itemView .modal-body #prodName").text($(e.currentTarget).parent().parent().find('.product-title').text());
        $("#itemView .modal-body #prodSize").text($(e.currentTarget).parent().parent().parent().find('.product-size').text());
        $("#itemView .modal-body #prodPrice").text($(e.currentTarget).parent().parent().parent().find('.product-price').text());
        $("#itemView .modal-body .im1").attr("src", $(e.currentTarget).parent().parent().parent().find('.product-image .cImg1').attr("src"));
        $("#itemView .modal-body .im2").attr("src", $(e.currentTarget).parent().parent().parent().find('.product-image .cImg2').attr("src"));
        $("#itemView").modal('show');
    });

});