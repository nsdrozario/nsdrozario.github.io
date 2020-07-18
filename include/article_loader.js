let xhr2 = new XMLHttpRequest(); // i dont know what im doing
let xhr3 = new XMLHttpRequest();
let url_param = new URLSearchParams(location.search);

// url parameters
let article_category = url_param.get("category"); // string
let chapter_id = url_param.get("chapter"); // int (1-indexed)
let article_id = url_param.get("article"); // int (1-indexed)

// where to output data
let article_output = document.getElementById("article-text");
let article_title = document.getElementById("article-title");
let article_date = document.getElementById("article-date");
let article_path;

function get_article_text() {

    if (this.readyState == 4 && this.status == 200) {

        let data = this.responseText;
        article_output.innerHTML = data;
    }

}

function get_article_metadata() {

    console.log("sent");

    if (this.readyState == 4 && this.status == 200) {

            let metadata = JSON.parse(this.responseText);
            console.log("done");
            
            let current_article = metadata.articles.theory[chapter_id-1].chapter_articles[article_id-1]; // need to fix this very soon when adding code articles
            article_title.innerHTML = current_article.name;
            document.title = current_article.name;
            article_date.innerHTML = current_article.date;     
            article_path = current_article.file;

            xhr3.onreadystatechange = get_article_text;
            xhr3.open("GET", article_path, true);
            xhr3.send();
    }

}

xhr2.onreadystatechange = get_article_metadata; 
xhr2.open("GET", "json/articles.json", true);
xhr2.send();

