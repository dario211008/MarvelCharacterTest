export class MarvelCharactersResponse {
    code: number;
    status: string;
    etag: string;
    data: Data;

    constructor() {
        this.code = 0;
        this.status = '';
        this.etag = '';
        this.data = new Data();
    }

}

export class Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<Result>;

    constructor() {
        this.offset = 0;
        this.limit = 0;
        this.total = 0;
        this.count = 0;
        this.results = new Array<Result>();
    }
}

export class Result {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Comic;
    series: Serie;
    stories: Story;
    events: Event;

    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.modified = '';
        this.resourceURI = '';
        this.thumbnail = new Thumbnail();
        this.comics = new Comic();
        this.series = new Serie();
        this.stories = new Story();
        this.events = new Event();
    }

}

export class Thumbnail {
    path: string;
    extension: string;

    constructor() {
        this.path = '';
        this.extension = '';
    }
}

export class CommonObject {
    available: number;
    collectionURI: string;
    returned: number;
    items: Array<Item>;

    constructor() {
        this.available = 0;
        this.returned = 0;
        this.collectionURI = '';
        this.items = Array<Item>();
    }
}
export class Comic extends CommonObject { }
export class Serie extends CommonObject { }
export class Story extends CommonObject { }
export class Event extends CommonObject { }

export class Item {
    resourceURI: string;
    name: string;

    constructor() {
        this.resourceURI = '';
        this.name = '';
    }
}
