# Twilio's Client.js theme for TypeDoc

[TypeDoc](http://typedoc.io/) is a documentation generator for TypeScript projects.

## Usage

```bash
$ npm install typedoc typedoc-twilio-theme --save-dev
$ node_modules/.bin/typedoc --theme node_modules/typedoc-twilio-theme/bin --out doc path/to/ts/dir
```

See TypeDoc documentation (https://typedoc.org/) to learn more about TypeDoc.


## Credit

Adapted from the [default TypeDoc themes](https://github.com/TypeStrong/typedoc-default-themes), which
was authored and Copyright 2015 by [Sebastian Lenz](http://www.sebastian-lenz.de) under the Apache
License 2.0.

Changes are cosmetic, and primarily involve hiding private/protected class members for clean
consumer-facing API documentation.
