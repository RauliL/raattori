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

## CLI

Raattori also comes with an optional [CLI](https://en.wikipedia.org/wiki/Command-line_interface)
which means it can also be used from command line. To do this, first install
the package globally with:

```bash
$ yarn global add raattori
```

And then use the command `raattori` like this:

```bash
$ raattori --dialect turku "Minä olen komentoriviohjelma."
Mää olen simmottos sit vaa komentoriviohjelma.
```
