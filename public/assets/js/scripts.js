/* Scroll to Form */
function scrollToForm() {
    var a = document.getElementById('registerForm');
    if (!a) {
        return false;
    }
    var f = a.getBoundingClientRect(),
        h = window.scrollY + f.top - 200,
        btn = document.getElementById('scrollToForm');
    window.addEventListener("scroll", (event) => {
        if (this.scrollY > h) {
            btn.classList.add('hide');
        } else {
            btn.classList.remove('hide');
        }
    });
}
scrollToForm();

// Navigation humberger
function activeMenu() {
    var x = document.getElementById('site-navigation');
    if (!x.classList.contains('active')) {
        x.classList.add('active');
    } else {
        x.classList.remove('active');
    }
}

function hideMenu() {
    var x = document.getElementById('site-navigation');
    x.classList.remove('active');
}

// Search action
function  showSearch() {
	var x = document.getElementById('search-form'),
        bg = document.getElementById('bg_dark_search');
	if (!x.classList.contains('active')) {
        x.classList.add('active');
        bg.style.display = "flex";
        document.getElementById('search-field').focus();
    } else {
        x.classList.remove('active');
        bg.style.display = "none";
        document.getElementById('search-field').blur();
    }
}

function  hideSearch() {
    var x = document.getElementById('search-form'),
        bg = document.getElementById('bg_dark_search');
    x.classList.remove('active');
    bg.style.display = "none";
    document.getElementById('search-field').blur();
}

// Menu mobile
if (document.body.clientWidth <= 1024) {
    var nav = document.querySelectorAll('#site-navigation .menu-item-has-children');
    for (var i = 0; i < nav.length; i++) {
        var el = document.createElement('i');
        el.className = 'hidden-lg toggle-li clkico-plus';
        nav[i].appendChild(el); 
        el.onclick = function(e){
            this.classList.toggle('active');
            toggleNext(this);
        };     
    }
}

// Toggle next element
function toggleNext(a){
    var x = a.parentElement;
    x.classList.toggle('active');
}

// Tab script
function showTab(cur) {
    var id = cur.getAttribute('tab-id');

    // Get all elements with class='tabcontent' and hide them
    var curcontent = document.querySelectorAll('[content-tab-id=' + id + ']')[0],
        tabcontent = getAllSibling(curcontent);
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active');
    }

    curcontent.classList.add('active');

    var tablinks = getAllSibling(cur);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }

    cur.classList.add('active');
}

function getAllSibling(e) {
    var result = [],
        node = e.parentNode.firstChild;

    while ( node ) {
        if ( node !== e && node.nodeType === Node.ELEMENT_NODE ) 
          result.push( node );
        node = node.nextElementSibling || node.nextSibling;
    }
    return result;
}