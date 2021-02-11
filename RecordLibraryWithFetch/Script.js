document.getElementById("getRecords").addEventListener("click", getRecords);

function getRecords(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Records</h2>';
        data.forEach((user) => {
            if(user.id -1 == 0 || (user.id -1) % 3 == 0) {
                output +=
                '<div class="row">'
            }

            output +=
            `<div class="card col-md-4" style="width: 18rem;">
                <img class="card-img-top" src="./Record.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${user.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`;

            if(user.id >= 1 && user.id % 3 == 0) {
                output +=
                `</div>`
            }
        });
        document.getElementById('output').innerHTML = output;
    })
}