let header = document.getElementsByTagName("header")[0].innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div class="container position-relative">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> 
          <a href="omoss.html"><img src="img/logo.jpeg" id="logo" alt="logo" class="img-fluid shadow-lg main-img position-absolute top-50 start-0 translate-middle d-none d-lg-block" style="width: 50px; border-radius: 100px"></a>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav row">
              <li class="nav-item col-6 col-lg-auto flex-fill">
                <a class="nav-link" href="index.html"><i class="fa-solid fa-home text"></i> Hem </a>
              </li>
              <li class="nav-item col-6 col-lg-auto flex-fill">
                <a class="nav-link" href="meny.html"><i class="fa-solid fa-book-bookmark"></i> Meny </a>
              </li>
              <li class="nav-item col-6 col-lg-auto flex-fill">
                <a class="nav-link" href="boka.html"><i class="fa-solid fa-table"></i> Boka Bord </a>
              </li>
              <li class="nav-item col-6 col-lg-auto flex-fill">
                <a class="nav-link" href="omoss.html"><i class="fa-brands fa-readme"></i> Om Oss </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`

let footer = document.getElementsByTagName("footer")[0].innerHTML = `<div class="container" style="width: 100%;"><div class="row justify-content-center"><div class="col-12 text-center p-4" style="border: 2px solid green; border-radius: 15px; margin: 10px;">
            <p class="text-center mb-0">© 2024 Restaurang Tingeling. Alla rättigheter förbehållna.</p>
            <p class="text-center mb-0">Kontakta oss: info@tingeling.se | Telefon: 0771-123456</p>
        </div></div></div>`