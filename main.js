//a = 1 || 0
//b = 0 || 1
//c = 0 || 0

//alert(a)
//alert(b)
//alert(c)
//let x = prompt("Время работы магазина")
//if (x < 10 || x > 18){
//    alert("Магазин закрыт")
//}
//else{
//    alert("Магазин открыт")
//}

//let q = 1 && 0
   // w = 1 && 1
   // e = 0 && 1
   // r = 0 && 0
//alert(q)
//alert(w)
//alert(e)
//alert(r)

//alert(1 && 0)
//alert(1 && 5)
//alert(null && 5)
//alert(1 && "fuck")
//alert(1 && 2 && "suck")

//let x = !1
//alert(x)

//alert(!!null)
//alert(alert(1) || 2 && alert(3))

//alert(null || 2 && 3 || 4)

let x = prompt("Вы кто?")
if (x == "админ" || x == "Админ"){
    let y = prompt("Ваш пароль")
    if (y == "gladyshev"){
        alert("Приветствую вас!")
        console.log(y)
    }
    else if (!(x == "gladyshev")){
        alert("Неверный пароль")
    }
}
else if (!(x == "админ" || x == "Админ")){
    alert("Вы отменили действие")
}
else{
    alert("До свидания!")
}