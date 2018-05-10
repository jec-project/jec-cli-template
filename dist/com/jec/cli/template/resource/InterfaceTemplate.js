"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InterfaceTemplate {
    constructor() { }
    getTemplate() {
        let template = `import {Interface} from "jec-commons";

/**
 * <code><% name %></code>: auto-generated interface.
 */
export interface <% name %> {
  // TODO Auto-generated interface stub
}

/*
 * <% name %> interface declaration.
 */
export const <% name %>:Interface = Interface("<% pkg %>.<% name %>");
`;
        return template;
    }
}
exports.InterfaceTemplate = InterfaceTemplate;
