$.ajax({
    url: 'https://fakestoreapi.com/products/',
    success: results => {
        const productResults = results;
        let cards = ''
        productResults.forEach(p => {
            cards += `<div class="col-md-5 my-3">
            <div class="card">
                <div class="card-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${p.image}" class="card-img-top" width="300px" alt="">
                                
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h4>${p.title}</h4>
                                    </li>
                                    <li class="list-group-item"><strong>Harga:</strong> $${p.price}</li>
                                    <li class="list-group-item"><strong>Kategori:</strong> ${p.category}</li>
                                </ul>
                                <a class="btn btn-primary" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" role="button">BUY NOW</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>`
        });
        $('.products-container').html(cards);


    }

})







$('.btn-jewelry').on('click', function () {
    $.ajax({
        url: 'https://fakestoreapi.com/products/category/jewelery',
        success: data => {
            const dataCategories = data;
            console.log(data)
            let cards = ''
            dataCategories.forEach(data => {
                cards += `<div class="col-md-5 my-3">
            <div class="card">
                <div class="card-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${data.image}" class="card-img-top" width="300px" alt="">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h4>${data.title}</h4>
                                    </li>
                                    <li class="list-group-item"><strong>Harga:</strong> $${data.price}</li>
                                    <li class="list-group-item"><strong>Kategori:</strong> ${data.category}</li>
                                </ul>
                                <a class="btn btn-primary" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" role="button">BUY NOW</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>`
            })
            $('.products-container').html(cards)
        }
    })
})

$('.btn-mens-cloth').on('click', function () {
    $.ajax({
        url: 'https://fakestoreapi.com/products/category/men%27s%20clothing',
        success: data => {
            const dataCategories = data;
            console.log(data)
            let cards = ''
            dataCategories.forEach(data => {
                cards += `<div class="col-md-5 my-3">
                <div class="card">
                <div class="card-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${data.image}" class="card-img-top" width="300px" alt="">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h4>${data.title}</h4>
                                    </li>
                                    <li class="list-group-item"><strong>Harga:</strong> $${data.price}</li>
                                    <li class="list-group-item"><strong>Kategori:</strong> ${data.category}</li>
                                </ul>
                                <a class="btn btn-primary" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" role="button">BUY NOW</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>`
            })
            $('.products-container').html(cards)
        },

        erorr: (e) => {
            console.log(e.responseText)
        }
    })
})

$('.btn-women-cloth').on('click', function () {
    $.ajax({
        url: 'https://fakestoreapi.com/products/category/women%27s%20clothing',
        success: data => {
            const dataCategories = data;
            console.log(data)
            let cards = ''
            dataCategories.forEach(data => {
                cards += `<div class="col-md-5 my-3">
                <div class="card">
                <div class="card-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${data.image}" class="card-img-top" width="300px" alt="">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h4>${data.title}</h4>
                                    </li>
                                    <li class="list-group-item"><strong>Harga:</strong> $${data.price}</li>
                                    <li class="list-group-item"><strong>Kategori:</strong> ${data.category}</li>
                                </ul>
                                <a class="btn btn-primary" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" role="button">BUY NOW</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>`
            })
            $('.products-container').html(cards)
        },

        erorr: (e) => {
            console.log(e.responseText)
        }
    })
})

$('.btn-electronics').on('click', function () {
    $.ajax({
        url: 'https://fakestoreapi.com/products/category/electronics',
        success: data => {
            const dataCategories = data;
            console.log(data)
            let cards = ''
            dataCategories.forEach(data => {
                cards += `<div class="col-md-5 my-3">
                <div class="card">
                <div class="card-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${data.image}" class="card-img-top" width="300px" alt="">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h4>${data.title}</h4>
                                    </li>
                                    <li class="list-group-item"><strong>Harga:</strong> $${data.price}</li>
                                    <li class="list-group-item"><strong>Kategori:</strong> ${data.category}</li>
                                </ul>
                                <a class="btn btn-primary" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" role="button">BUY NOW</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>`
            })
            $('.products-container').html(cards)
        },

        erorr: (e) => {
            console.log(e.responseText)
        }
    })
})

$('.btn-url').on('click', function () {
    console.log('yes')
    window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
})