const searches = []

// search with a button
function search() {
    let search_query = document.getElementById("search-box").value;
    let url = "https://www.google.com/search?q="

    // search 
    if (search_query.includes("http")) {
        window.open(search_query);
    }

    else if (search_query.includes(":/")) {
        window.open(search_query);
    }

    // display music player
    else if (search_query == "music") {
        let musicBox = document.getElementById("for-music")
        musicBox.style.display = "block"
        musicBox.style.zIndex = "10"
    }

    // display history
    else if (search_query == "history") {
        console.log(searches)

        let historyBox = document.getElementById("for-history")
        historyBox.style.display = "block"
        historyBox.style.zIndex = "10"


        let text = ""
        // function myFunction(item, index) {
        //     text += index + ": " + item + "<br>";
        // }
        function myFunction(item) {
            text += item + "<br>";
        }
        searches.forEach(myFunction)

        let searchHistory = document.getElementById("search-history")
        searchHistory.innerHTML = text

    }

    else {
        window.open(url + search_query);
    }

    // add to array
    searches.push(search_query)

    // display
    console.log(searches);
}
