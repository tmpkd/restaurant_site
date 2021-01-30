let last_title_id = -1;

export class Title {
    constructor(header, type) {
        this.header = header;
        this.type = type;
        this.id = last_title_id + 1;
        last_title_id = this.id;
    }
}
