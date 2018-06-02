const parse = require('./index')
const testData = [{
  input: "These are symptoms of glossopharyngeal neuralgia.",
  expected: [{
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
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 4,
      "begin": 22,
      "end": 48
    }
  }]
}, {
  input: "My patient has severe harpaxophobia and always carries a pepper spray",
  expected: [{
    "ngram": "harpaxophobia",
    "value": {
      "id": "harpaxophobia",
      "label": {
        "en": "Harpaxophobia"
      },
      "description": {
        "en": "Harpaxophobia"
      },
      "aliases": {
        "en": [
          "Harpaxophobia"
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 4,
      "begin": 22,
      "end": 35
    }
  }]
}]

test('extract diseases', () => Promise.all(
  testData.map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))