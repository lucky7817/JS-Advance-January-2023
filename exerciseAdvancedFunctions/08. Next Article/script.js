function getArticleGenerator(articles) {

    return () => {
        while (articles.length) {
            let conteiner = document.getElementById('content');
            let article = document.createElement('article');
            let currentText = articles.shift();
            article.innerText = currentText;
            conteiner.appendChild(article);
            return;
        }
    }
}
