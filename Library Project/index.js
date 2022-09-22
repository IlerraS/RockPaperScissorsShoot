'use strict';
//Class code
class Book
{
    constructor(author, title, pageNum, beenRead)
    {
        this.author = author;
        this.title = title;
        this.pageNum = pageNum;
        this.beenRead = beenRead;
    }
    
    addBookToLibrary(arr)
    {
        arr.push(this);
    }

    hasBeenRead()
    {
        if(this.beenRead)
        {
            return this.beenRead = false;
        }
        if (!this.beenRead)
        {
            return this.beenRead = true;
        }
    }

    removeBook(arr)
    {
        const indexInArr = arr.indexOf(this);
        if (indexInArr > -1)
        {
            arr.splice(indexInArr, 1);
        }
    }
}

//GLOBALS
//HTML Elemets
const submitbtn = document.getElementById('submit-btn');

//Within Script
const myLibrary = [];

