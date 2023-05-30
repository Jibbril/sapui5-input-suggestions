sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/inputsuggestions/test/integration/FirstJourney',
		'ns/inputsuggestions/test/integration/pages/BooksList',
		'ns/inputsuggestions/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/inputsuggestions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);