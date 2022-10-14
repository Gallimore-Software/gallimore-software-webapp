export class WhatWeDoItem
{
    imageUrl: string;
    textContent: string;
    imageDescription: string;
    name: string;

    constructor(name: string, imageUrl: string, imageDescription: string, textContent: string) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.imageDescription = imageDescription;
        this.textContent = textContent;
    }
}