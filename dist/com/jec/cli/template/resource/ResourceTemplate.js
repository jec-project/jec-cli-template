"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResourceTemplate {
    constructor() { }
    getTemplate() {
        let template = `import {ResourcePath, RootPathRefs, GET, Exit} from "jec-jars";

/**
 * <code><% name %></code>: auto-generated resource.
 */
@ResourcePath("<% path %>")
@RootPathRefs([<% rootPathRefs -fn=sanitizeStringList %>])

FIX(<% fix %>)

export class <% name %> {
  
  GET()
  public sampleEndPoint(@Exit exit:Function):void {
    // TODO Auto-generated method stub
    exit("<% path %> resource end point called");
  }
}`;
        return template;
    }
}
exports.ResourceTemplate = ResourceTemplate;
