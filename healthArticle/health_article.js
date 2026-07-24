// ==========================================
// 1. Cargar Artículos de Salud
// ==========================================
var xhrHealth = new XMLHttpRequest();
var urlHealth = './health_article.json';

xhrHealth.open('GET', urlHealth, true);
xhrHealth.responseType = 'json';

xhrHealth.onload = function () {
    var articles = xhrHealth.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function (article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Formas de Lograrlo:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function (way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Beneficios:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function (benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
}
xhrHealth.send();


// ==========================================
// 2. Cargar Artículos de Noticias
// ==========================================
var xhrNews = new XMLHttpRequest();
var urlNews = './news_article.json';

xhrNews.open('GET', urlNews, true);
xhrNews.responseType = 'json';

xhrNews.onload = function () {
    var newsArticles = xhrNews.response.news_articles;
    var newsDiv = document.getElementById('news');

    newsArticles.forEach(function (news) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('news-article');

        var headline = document.createElement('h2');
        headline.textContent = news.headline;

        var summary = document.createElement('p');
        summary.textContent = news.summary;

        var metaData = document.createElement('p');
        var formattedDate = new Date(news.publish_date).toLocaleDateString('es-ES', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
        metaData.innerHTML = `<strong>Autor:</strong> ${news.author} | <strong>Fecha:</strong> ${formattedDate} | <strong>Categoría:</strong> ${news.category}`;

        var tagsHeader = document.createElement('h4');
        tagsHeader.textContent = 'Etiquetas:';

        var tagsList = document.createElement('ul');

        news.tags.forEach(function (tag) {
            var listItem = document.createElement('li');
            listItem.textContent = `#${tag}`;
            tagsList.appendChild(listItem);
        });

        articleDiv.appendChild(headline);
        articleDiv.appendChild(summary);
        articleDiv.appendChild(metaData);
        articleDiv.appendChild(tagsHeader);
        articleDiv.appendChild(tagsList);

        newsDiv.appendChild(articleDiv);
    });
}
xhrNews.send(); a