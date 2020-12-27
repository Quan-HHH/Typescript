"use strict";
var Header = /** @class */ (function () {
    function Header() {
    }
    Header.prototype.constractor = function () {
        var elem = document.createElement('div');
        console.log(elem);
        elem.innerHTML = 'This is header';
        document.body.appendChild(elem);
    };
    return Header;
}());
var Content = /** @class */ (function () {
    function Content() {
    }
    Content.prototype.constractor = function () {
        var elem = document.createElement('div');
        elem.innerHTML = 'This is header';
        document.body.appendChild(elem);
    };
    return Content;
}());
var Footer = /** @class */ (function () {
    function Footer() {
    }
    Footer.prototype.constractor = function () {
        var elem = document.createElement('div');
        elem.innerHTML = 'This is header';
        document.body.appendChild(elem);
    };
    return Footer;
}());
var Page = /** @class */ (function () {
    function Page() {
        new Header();
        new Content();
        new Footer();
    }
    return Page;
}());
