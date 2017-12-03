 'use strict';

 module.exports = {
     search: search
 };

 function search(req, res, next) {
     res.json({
         movies: [
             { title: "The Lord of the Rings - The Fellowship of the Ring", year: 2001 },
             { title: "The Lord of the Rings - The Two Towers", year: 2002 },
             { title: "The Lord of the Rings - The Return of the King", year: 2003 }
         ]
     });
 }