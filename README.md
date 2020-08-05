# raattori

Converts formal Finnish into various dialects. Rewrite of something called
[Turkuraattori](https://netello.fi/turkuraattori) originally developed by
[Netello Systems](https://netello.fi).

[Online demo](https://rauli.dev/raattori/)

## Supported dialects

- turku
- manse
- oulu

## Installation

```bash
$ yarn add raattori
```

## Usage

The library exposes single function which takes the input string and dialect
name as arguments.

```javascript
import raattori from 'raattori';

console.log(raattori(
  'Hän siunasi ne sanoen: »Olkaa hedelmälliset ja lisääntykää ja täyttäkää meren vedet, ja linnut lisääntykööt maan päällä.»',
  'turku'
));
```

Should output something like this into the console:

```
Hän siunasi ne sanoen: »Olkaa herelmälliset ja lisääntykää ja täyttäkää meren vedet, ja linnut lisääntykööt maan pääl.»
```

If dialect is omitted, `turku` dialect is chosen by default.
