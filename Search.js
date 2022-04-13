function search(){
  var searchEngine = document.getElementById("searchengine").value;
  var query = document.getElementById("searchbox").value;
  var url;
  if (searchEngine == "google"){
      url = "https://www.google.com/search?q=" + query;
  }else if (searchEngine == "bing"){
      url = "https://www.bing.com/search?q=" + query;
  }else{
      url = "https://duckduckgo.com/?q=" + query;
  }
  window.open(url);
}

function changeImage(){
  var searchEngine = document.getElementById('searchengine').value;
  var image;
  var link;
  var summary;
  var wikilink;
  if (searchEngine == "google"){
      image = "googlelogo.png";
      link = "https://www.google.com/";
      wikilink = "https://en.wikipedia.org/wiki/Google_Search";
      summary = "Google Search (also known simply as Google), is a search engine provided by Google. Handling more than 3.5 billion searches per day, it has a 92% share of the global search engine market. It is also the most-visited website in the world.";
  }else if (searchEngine == "bing"){
      image = "binglogo.png";
      link = "https://www.bing.com/?toWww=1&redig=0CEF5036D629415C950F52FAAFAD3279";
      wikilink = "https://en.wikipedia.org/wiki/Microsoft_Bing";
      summary = "Microsoft Bing (commonly known as Bing) is a web search engine owned and operated by Microsoft. The service has its origins in Microsoft's previous search engines: MSN Search, Windows Live Search and later Live Search. Bing provides a variety of search services, including web, video, image and map search products. It is developed using ASP.NET.";
  }else{
      image = "duckduckgologo.png";
      wikilink = "https://en.wikipedia.org/wiki/DuckDuckGo";
      link = "https://duckduckgo.com/"
      summary = "DuckDuckGo (DDG) is an internet search engine that emphasizes protecting searchers' privacy and avoiding the filter bubble of personalized search results. DuckDuckGo does not show search results from content farms. It uses various APIs of other websites to show quick results to queries and for traditional links it uses the help of its partners (mainly Bing) and its own crawler."
  }
  document.getElementById("logo").src = image;
  (document.getElementById("searchlink")).setAttribute("href", link)
  document.getElementById("wikilink").setAttribute("href", wikilink);
  document.getElementById("searchsummary").innerHTML = summary;
}

function changeMode(){
    var mode = document.getElementById("modechanger").value;    
    var link = document.getElementById("aesthetic");
    if (mode == "light"){
        link.setAttribute("href", "Light.css");
    }else{
        link.setAttribute("href", "Dark.css");
    }
}