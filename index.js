var productname = document.getElementById("productName")
var productprice = document.getElementById("productPrice")
var productcategory = document.getElementById("productCategory")
var productDesc = document.getElementById("productDesc")
var productcontainer;

if (localStorage.getItem("productlist") == null) {
    productcontainer = [];
}
else {
    productcontainer = JSON.parse(localStorage.getItem("productlist"))
    displayproduct()
}



function addProduct() {

   /* if("mybtn"=="Addproduct"){
        addproduct()
    }
    else{
        updateproduct()
    }*/

    if (validation()) {
        var Product = {
            name: productname.value,
            price: productprice.value,
            category: productcategory.value,
            Descreption: productDesc.value,

        }

        productcontainer.push(Product)
        localStorage.setItem("productlist", JSON.stringify(productcontainer))
        displayproduct()
        console.log(productcontainer)
        clearform()
    }
    else {
        window.alert("all input recuared")
    }

}

function clearform() {
    productname.value = ""
    productprice.value = ""
    productcategory.value = ""
    productDesc.value = ""
}


function displayproduct() {
    var temp = ""
    for (var i = 0; i < productcontainer.length; i++) {
        temp += ` 
         <tr>
                    <td>${i}</td>
                    <td>${productcontainer[i].name}</td>
                    <td>${productcontainer[i].price}</td>
                    <td>${productcontainer[i].category}</td>
                    <td>${productcontainer[i].Descreption}</td>
                    <td>

                        <button class="btn btn-warning" onclick="updateproduct(${i})">update</button>

                    </td>
                    <td><button class="btn btn-danger" onclick="deleteproduct(${i})">delete</button></td>
                </tr>
                `
    }

    document.getElementById("tabelbody").innerHTML = temp
}


function validation() {
    if (productname.value != "" && productprice.value != "" && productcategory.value != "" && productDesc.value != "") {
        return true
    }
    else {
        return false
    }
}


function deleteproduct(index) {

    productcontainer.splice(index, 1);
    localStorage.setItem("productlist", JSON.stringify(productcontainer))
    displayproduct()

}




function search(term) {
    var temp = ""
    for (var i = 0; i < productcontainer.length; i++) {
        if (productcontainer[i].name.toLowerCase().includes(term.toLowerCase())) {
            temp += ` 
         <tr>
                    <td>${i}</td>
                    <td>${productcontainer[i].name}</td>
                    <td>${productcontainer[i].price}</td>
                    <td>${productcontainer[i].category}</td>
                    <td>${productcontainer[i].Descreption}</td>
                    <td>
                        <button class="btn btn-warning" onclick="updateproduct(${i})">update</button>

                    </td>
                    <td><button class="btn btn-danger" onclick="deleteproduct(${i})">delete</button></td>
                </tr>`
        }

    }
    document.getElementById("tabelbody").innerHTML = temp
}



function updateproduct(index){

    productname.value = productcontainer[index].name
    productprice.value = productcontainer[index].price
    productcategory.value = productcontainer[index].category
    productDesc.value = productcontainer[index].Descreption

    document.getElementById("mybtn").innerHTML="update"

}