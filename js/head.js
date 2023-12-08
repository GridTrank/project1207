

class Head extends HTMLElement {
    constructor() {
        super()
        let h1=`
        <div class="head_top f_row j_c_b">
            <img src="./Elements/BB homepage_Blissful Brides logo.png" class="logo" />
            <div class="head_right f_row">
                <div class="">GET A QUOTE</div>
            </div>
        </div>
        <div class="nav_list f_row">
            <div class="nav_item">
                <div class="dropdown">
                    <div data-bs-toggle="dropdown">Dropdown button</div>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div class="nav_item">
                <div class="dropdown">
                    <div data-bs-toggle="dropdown">Dropdown button</div>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div class="nav_item">
                <div class="dropdown">
                    <div data-bs-toggle="dropdown">Dropdown button</div>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div class="nav_item">
                <div class="dropdown">
                    <div data-bs-toggle="dropdown">Dropdown button</div>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div class="nav_item">
                <div class="dropdown">
                    <div data-bs-toggle="dropdown">Dropdown button</div>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div class="nav_item">
                <div class="dropdown">
                    <div data-bs-toggle="dropdown">Dropdown button</div>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
        `
        $('#head').append(h1)
    }

  
}

window.customElements.define("page-head", Head)