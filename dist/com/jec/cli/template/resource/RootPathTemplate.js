"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RootPathTemplate {
    constructor() { }
    getTemplate() {
        let template = `import {RootPath} from "jec-jars";

/**
 * <code><% name %></code>: auto-generated root path.
 */
@RootPath({
  path: "/<% path %>",
  ref: "<% ref %>",
  version: {
    prefix: "<% prefix %>",
    major: <% major %>,
    minor: <% minor %>
  }
})
export class <% name %> {}`;
        return template;
    }
}
exports.RootPathTemplate = RootPathTemplate;
