import renderToDOM from '../utils/renderToDom';
import logo from '../assets/large_logo.jpg';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark  mb-5">
    <div class="container-fluid">
        <image id="home" src=${logo}>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="createEntry">
                Create Entry <span class="sr-only">(current)</span>
              </a>
            </li>
                   
           <!-- <li class="d-flex">
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search"
              aria-label="Search"
            />
            </li> 
            -->
          </ul>
          <span class="navbar-text">
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
