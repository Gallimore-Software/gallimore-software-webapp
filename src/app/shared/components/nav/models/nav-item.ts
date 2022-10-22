export class NavItem {
    path: string;
    name: string;

    constructor(path: string) {
        this.path = path;
        this.name = path.toUpperCase();
    }
}