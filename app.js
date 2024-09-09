// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then((data) => {
//     // console.log(data[0].title);
//     let tableData = ''
//     data.map((x)=>{
//         tableData += `<tr>
//         <td>${x.id}</td>
//         <td>${x.title}</td>
//         <td>${x.price}</td>
//         <td>${x.category}</td>
//         <td><img src = "${x.image}"></td>`
//     })
//     document.getElementById("tbody").innerHTML = tableData
// })


ab = document.getElementById("tbody");


function updateDOM(data) {
    let tableData = '';
    data.map((x)=>{
        tableData += `<tr>
        <td>${x.id}</td>
        <td>${x.title}</td>
        <td>${x.price}</td>
        <td>${x.category}</td>
        <td><img src = "${x.image}"></td>`
        ab.innerHTML = tableData
    })
}

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then((data) => updateDOM(data))

