let header = document.getElementsByTagName("header")[0].innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav row">
              <li class="nav-item col-6 col-lg-auto flex-fill">
                <a class="nav-link" href="index.html"><i class="fa-solid fa-home text"></i> Hem </a>
              </li>
              <li class="nav-item col-6 col-lg-auto flex-fill">
                <a class="nav-link" href="meny.html"><i class="fa-solid fa-book-bookmark"></i> Menu </a>
              </li>
              <li class="nav-item col-6 col-lg-auto flex-fill">
                <a class="nav-link" href="omoss.html"><i class="fa-brands fa-readme"></i> Om Oss </a>
              </li>
              <li class="nav-item col-6 col-lg-auto flex-fill">
                <a class="nav-link" href="boka.html"><i class="fa-solid fa-table"></i> Boka Bord </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`