/*============================================================
  Avoid `console` errors in browsers that lack a console.
  ==============================================================*/
  (function() {
    var method;
    var noop = function () {};
    var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*===================================
  mobile nav
  =====================================*/
 // var menuLeft = document.getElementById( 'cbp-spmenu' ),
//     body = document.body;
//
// showLeft.onclick = function() {
//   classie.toggle( this, 'active' );
//   classie.toggle( menuLeft, 'cbp-spmenu-open' );
// };
// showLeftClose.onclick = function() {
//   classie.toggle( this, 'active' );
//   classie.toggle( menuLeft, 'cbp-spmenu-open' );
// };

/*============================================
  mobile nav  ver 2 - borderMenu.js v1.0.0
  ==============================================*/
/**
 * borderMenu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

 function initMobileMenu() {
    var menuLeft = document.getElementById( 'cbp-spmenu' ),
    menu = document.getElementById( 'bt-menu' ),
    trigger = menu.querySelector( 'a.bt-menu-trigger' ),
      // triggerPlay only for demo 6
      // triggerPlay = document.querySelector( 'a.bt-menu-trigger-out' ),
      // event type (if mobile use touch events)
      eventtype = 'click',
      resetMenu = function() {
        classie.remove( menu, 'bt-menu-open' );
        classie.add( menu, 'bt-menu-close' );
    },
    closeClickFn = function( ev ) {
        resetMenu();
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        // overlay.removeEventListener( eventtype, closeClickFn );
    };

    // var overlay = document.createElement('div');
    // overlay.className = 'bt-overlay';
    // menu.appendChild( overlay );

    trigger.addEventListener( eventtype, function( ev ) {
      ev.stopPropagation();
      ev.preventDefault();

      if( classie.has( menu, 'bt-menu-open' ) ) {
        resetMenu();
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
    }
    else {
        classie.remove( menu, 'bt-menu-close' );
        classie.add( menu, 'bt-menu-open' );
        // overlay.addEventListener( eventtype, closeClickFn );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );

    }
});

    // if( triggerPlay ) {
    //   triggerPlay.addEventListener( eventtype, function( ev ) {
    //     ev.stopPropagation();
    //     ev.preventDefault();
    //
    //     classie.remove( menu, 'bt-menu-close' );
    //     classie.add( menu, 'bt-menu-open' );
    //     // overlay.addEventListener( eventtype, closeClickFn );
    //   });
    // }

}
;/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );
;// init js

/*
 * main menu
 */
initMobileMenu();

//# sourceMappingURL=base.js.map