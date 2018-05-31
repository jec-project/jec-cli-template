//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {JecTemplate} from "../JecTemplate";

/**
 * The template used to create JARS resource files.
 */
export class ResourceTemplate implements JecTemplate {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>ResourceTemplate</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public getTemplate():string {
    let template:string = 
`import {ResourcePath, RootPathRefs, GET, Exit} from "jec-jars";

/**
 * <code><% name %></code>: auto-generated resource.
 */
@ResourcePath("<% path %>")
@RootPathRefs([<% rootPathRefs -fn=sanitizeStringList %>])

FIX(<% fix %>)

export class <% name %> {
  
  @GET()
  public sampleEndPoint(@Exit exit:Function):void {
    // TODO Auto-generated method stub
    exit("<% path %> resource end point called");
  }
}`;
    return template;
  }
}