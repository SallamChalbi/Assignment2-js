var quote = document.getElementById('quote')
var author = document.getElementById('author')
var btn = document.getElementById('btn')

var arrayOfQuotes = [
    {author: 'Oscar Wilde', 
     quote: 'To live is the rarest thing in the world. Most people exist, that is all.'
    },
    {author: 'Emily Dickinson', 
     quote: 'That it will never come again is what makes life so sweet.'
    },
    {author: 'George Eliot', 
     quote: 'It is never too late to be what you might have been.'
    },
    {author: 'Haruki Murakami', 
     quote: 'Pain is inevitable. Suffering is optional.'
    },
    {author: 'William Shakespeare', 
     quote: 'All the world\'s a stage, and all the men and women merely players.'
    },
    {author: 'Elbert Hubbard', 
     quote: 'Do not take life too seriously. You will not get out alive.'
    },
    {author: 'Plato', 
     quote: 'Be kind, for everyone you meet is fighting a hard battle.'
    },
    {author: 'Sylvia Plath', 
     quote: 'Let me live, love, and say it well in good sentences'
    },
    {author: 'Ralph Waldo Emerson', 
     quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'
    },
    {author: 'C.S. Lewis', 
     quote: 'Don\'t let your happiness depend on something you may lose.'
    },
];

var copy = arrayOfQuotes.slice()

function getRandom(min, max) {
    var x = max - min + 1
    var y = Math.random() * x
    var result = Math.floor(y) + min

    return result
}

btn.onclick = function(){  
    if(!copy.length)
        copy = arrayOfQuotes.slice()
        
    var random = getRandom(0, copy.length - 1)

    quote.innerHTML = `\"${copy[random].quote}\"`;
    author.innerHTML = `--${copy[random].author}`;

    copy.splice(random, 1)
}
