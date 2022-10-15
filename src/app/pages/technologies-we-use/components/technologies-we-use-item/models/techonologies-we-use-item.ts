export class TechnologiesWeUseItem
{
    imageUrl: string;
    imageDescription: string;
    name: string;

    constructor(name: string, imageUrl: string, imageDescription: string) {
        this.imageUrl = imageUrl;
        this.imageDescription = imageDescription;
        this.name = name;
    }
}