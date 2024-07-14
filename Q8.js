class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : undefined;
    }

    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
        }
    }
}

const example = new HashMap();
example.put('name', 'XYZ');
console.log(example.get('name'));
example.remove('name');
console.log(example.get('name'));
