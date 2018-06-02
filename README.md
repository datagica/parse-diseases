# Parse Diseases

If a disease, license or copyright is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-diseases

## Usage

Example:

```javascript
await parse('These are symptoms of glossopharyngeal neuralgia.')
```

Output:

```json
[
  {
    "ngram": "glossopharyngeal neuralgia",
    "value": {
      "id": "glossopharyngeal-neuralgia",
      "label": {
        "en": "Glossopharyngeal neuralgia"
      },
      "description": {
        "en": "Glossopharyngeal neuralgia"
      },
      "aliases": {
        "en": [
          "Glossopharyngeal neuralgia"
        ]
      }
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 4,
      "begin": 22,
      "end": 48
    }
  }
]
```

## TODO

https://en.wikipedia.org/wiki/Category:Lists_of_diseases
https://en.wikipedia.org/wiki/Lists_of_diseases

