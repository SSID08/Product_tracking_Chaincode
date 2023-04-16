'use strict';

class Batch {
    constructor() {
        this.id;
        this.is_batch;
        this.parent_id;
        this.owner_Org;
        this.transferTo_Org;
        this.type;
        this.location;
        this.weight;
        this.temperature;
        this.linkedExperiments;
    }

    static from(bufferOrJson) {
        if (Buffer.isBuffer(bufferOrJson)) {
            if (!bufferOrJson.length) {
                return;
            }

            bufferOrJson = JSON.parse(bufferOrJson.toString('utf-8'));
        }
        return Object.assign(new Batch(),bufferOrJson);
    }

    toJson() {
        return JSON.stringify(this);
    }


    toBuffer() {
        return Buffer.from(this.toJson());
    }
}

module.exports = { Batch };
