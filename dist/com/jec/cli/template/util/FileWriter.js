"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateBuilder_1 = require("./TemplateBuilder");
const fs = require("fs");
class FileWriter {
    constructor() { }
    write(generatorClass, config, callback) {
        const builder = new TemplateBuilder_1.TemplateBuilder();
        const template = builder.build(generatorClass, config);
        const name = config.name;
        fs.writeFile(`${name}.ts`, template, (err) => {
            callback(err);
        });
    }
}
exports.FileWriter = FileWriter;
