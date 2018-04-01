"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebJsletTemplate {
    constructor() { }
    getTemplate() {
        let template = `import {HttpJslet, WebJslet, HttpRequest, HttpResponse} from "jec-exchange";
import {HttpHeader} from "jec-commons";

/**
 * <code><% name %></code>: auto-generated jslet.
 */
@WebJslet({
  name: "<% name %>",
  urlPatterns: [<% urlPatterns -fn=sanitizeStringList %>],
  template: "<% template %>"
})
export class <% name %> extends HttpJslet {
  
  /**
   * @inheritDoc
   */
  public doGet(req:HttpRequest, res:HttpResponse, exit:Function):void {
    // TODO Auto-generated method stub
    exit(req, res);
  }
}`;
        return template;
    }
}
exports.WebJsletTemplate = WebJsletTemplate;
