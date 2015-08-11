google.load("feeds", "1");
function initialize() {
    var feedurl = "http://www.nytimes.com/services/xml/rss/nyt/pop_top.xml";
    var feed = new google.feeds.Feed(feedurl);
    feed.setNumEntries(10);
    feed.load(function (result){
	if (!result.error){
	    for (var i = 0; i < result.feed.entries.length; i++) {
		var entry = result.feed.entries[i];
		var title = '<h3><a href="' + entry.link + '">' + entry.title + '</a></h3>';
		var conte = '<p>' + entry.contentSnippet + '</p>';
		var Dates = new Date(entry.publishedDate);
		var Dday = Dates.getDate();
		var Dmonth = Dates.getMonth() + 1;
		var Dyear = Dates.getFullYear();
		var Ddates = '<p>' + Dyear +'.'+ Dday +'.'+ Dmonth + '</p>';
		$('#feed').append('<ul>' + title + conte + Ddates + '</ul>');
	    }
	}
    });
}
google.setOnLoadCallback(initialize);
