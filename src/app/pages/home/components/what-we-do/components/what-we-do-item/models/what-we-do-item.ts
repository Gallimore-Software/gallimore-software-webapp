export class WhatWeDoItem
{
    imageUrl: string;
    textContent: string;
    imageDescription: string;
    name: string;

    constructor(name, imageUrl, imageDescription, textContent) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.imageDescription = imageDescription;
        this.textContent = textContent;
    }
}