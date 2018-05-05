# JEC CLI TEMPLATE Project

JEC CLI TEMPLATE is a [JavaScript Enterprise Container][jec-url] project focused on the creation of JEC components from templates to improve JEC productivity.

[![][jec-logo]][jec-url]

## Requirements

JEC CLI TEMPLATE needs the following system parameters in order to work correctly:

- Node 6+
- npm 3+
- TypeScript 2+

## Installation

Set up the JEC CLI TEMPLATE module with:

```bash
$ npm install jec-cli-template --save
```

## Using Components

All JEC CLI TEMPLATE components have to be imported with the ES6 syntax:

```javascript
import { TemplateBuilder, BootstrapTemplateGenerator } from "jec-cli-template";

const builder:TemplateBuilder = new TemplateBuilder();
const props:any = { name: "MyBootstrapComponent" };
const template:string = builder.build(BootstrapTemplateGenerator, props);

console.log(template);
```

For a complete list of available components, please refer to the [API Reference](#api-reference) documentation.

## Running Tests

To execute all unit tests, use:

```bash
$ grunt test
```

## Documentation

### Wiki

Complete documentation and tutorials are available on the JRC wiki at [http://jecproject.org/wiki](http://jecproject.org/wiki).

### API Reference

The API Reference documentation is not included into the JEC CLI TEMPLATE node module. To build the API reference documentation, use:

```bash
$ grunt doc
```

Documentation will be generated in the `docs/api-reference` repository.
The online version of the  API reference documentation will be available soon at the JEC Website.

The documentation generator is [TypeDoc](http://typedoc.org/)

## Update Release Notes

**Current stable release:** [1.0.0](CHANGELOG.md#jec-cli-template-1.0.0)
 
For a complete listing of release notes for all JEC CLI TEMPLATE update releases, see the [CHANGELOG](CHANGELOG.md) file. 

## License
This JEC CLI TEMPLATE Project is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

```
Copyright 2016-2018 Pascal ECHEMANN.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[jec-url]: http://jecproject.org
[jec-logo]: https://raw.githubusercontent.com/jec-project/JEC/master/assets/jec-logos/jec-logo.png