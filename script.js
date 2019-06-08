var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        poster: './images/hary.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'Film o królu sawanny',
        poster: 'https://ssl-gfx.filmweb.pl/po/63/16/776316/7875036.2.jpg'
    },
    {
        id: 3,
        title: 'Władca pierścieni',
        desc: 'film o hobbicie i pierścionku',
        poster: 'https://ssl-gfx.filmweb.pl/po/10/65/1065/6900087.2.jpg'
    },
    {
        id: 4,
        title: 'Taxi',
        desc: 'film o szybkiej taksówce',
        poster: 'https://ssl-gfx.filmweb.pl/po/07/27/727/6900934.2.jpg'
    },
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movies.poster, alt: movies.title}),
        
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)

    );

ReactDOM.render(element, document.getElementById('app'));