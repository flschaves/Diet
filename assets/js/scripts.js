(function(){
    'use strict';

    /* Shuffle array function */        
    function shuffleArray( array ) {
        for ( var i = array.length - 1; i > 0; i-- ) {
            var j = Math.floor( Math.random() * ( i + 1 ) );
            var temp = array[ i ];
            array[ i ] = array[ j ];
            array[ j ] = temp;
        }
        return array;
    }

    /* Creates an array with possible meals */
    var meals = [
        'Bife bem magro, com feijão e salada',
        'Alface, azeitona, pepino, ovo de codorna temperado',
        'Banana ou maçã picada com mel',
        'Suco verde'
    ];

    var days        = document.querySelectorAll( '[data-js="day"]' ), // Get all days that I want to make a diet
        dinners     = document.querySelector( '[data-js="dinners"]' ), // Get element to insert meals
        docFragment = document.createDocumentFragment(); // Creates a document fragment

    /* While not has enough meals to days, repeat it */
    while ( meals.length < days.length ) {
        meals.push( meals[ Math.floor( Math.random() * meals.length ) ] );
    }

    /* Shuffle meals to populate table */
    meals = shuffleArray( meals );

    /* Populate document fragment */
    for ( var i = 0; i < days.length; i++ ) {
        var td = document.createElement( 'td' );
        td.textContent = meals[ i ];
        docFragment.appendChild( td );
    }

    /* Append document fragment to DOM */
    dinners.appendChild( docFragment );
}());