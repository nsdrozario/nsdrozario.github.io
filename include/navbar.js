let xmlhttpreq = new XMLHttpRequest();

function get_contents() {

    let nav_insert = document.getElementById("navbar-insert");

    if (this.readyState == 4 && this.status == 200) {

        nav_insert.innerHTML = this.responseText;

    }

}

xmlhttpreq.onreadystatechange = get_contents;

xmlhttpreq.open("GET", "include/nav.html", true);
xmlhttpreq.send();