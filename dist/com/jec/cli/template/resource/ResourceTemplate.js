"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResourceTemplate {
    constructor() { }
    getTemplate() {
        let template = `import {ResourcePath, GET, Exit} from "jec-jars";

/**
 * <code><% name %></code>: auto-generated resource.
 */
@WebJslet({
  path: "<% path %>",
  produces: "<% produces %>"
})
export class <% name %> {
  
  @GET()
  public doGet(@Exit exit:Function):void {
    // TODO Auto-generated method stub
    const data:any = null;
    const error:Error = null;
    exit(data, error);
  }
}`;
        return template;
    }
}
exports.ResourceTemplate = ResourceTemplate;
