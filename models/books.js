'use strict';



export class book{

    constructor(work_id,author,book_name,review){
        this.work_id=work_id;
        this.author=author;
        this.book_name=book_name;
        this.review=review;

    }

    get id(){
        return this.work_id;
    }
    get auth(){
        return this.author;
    }

    get name(){
        return this.book_name;
    }

    get rev(){
        return this.review;
    }

    set id(id){
        this._work_id=id;
    }

    set auth(auth){
        this._author=auth;
    }

    set name(name){
        this._book_name=name;
    }

    set rev(rev){
        this._review = rev;
    }

 

    

   



}