# CloseCSS
A CSS preprocessor for when you've.....almost got it

## Install

```
npm install -g closecss
```

## How-to

CloseCSS runs through a CLI to compile your `.close` file into an outputted `.css` file.

If you ever get stuck you can use `closecss -h`.

### Simple

Will output your `.close` file automatically into a `dest/` directory.

```
`closecss **/*.close`
```

### Advanced

Will output `css` file to specific directory of your choosing.

```
closecss **/*.close --output your/target/dir
```

### Properties Currently Supported

- `color`
- `background-color`
- `border`
- `border-radius`
- `width`
- `height`
- `margin`
- `padding`
- `font-size`
- `font-weight`

### Usable Values

The following below are the values usable inside the `somewhat('')` wrapper for your css values.

If times get hard and you really want to just get **close enough** some properties take in a `whatever` value in its `somewhat('')` wrapper so you can just ***fuck it and move on***.

##### Color and Background-Color
| Values        |
|---------------|
| redish        |
| blueish       |
| yellowish     |
| greenish      |
| orangeish     |
| purpleish     |
| greyish       |
| whiteish      |
| blackish      |
| whatever      |

##### Border Radius and Borders
|`border-radius`  | `border`  |
|-----------------|-----------|
| roundish        | thinish   |
| curvish         | thickish  |
| squarish        |           |


##### Width & Height
| Common Values | Width Only | Height Only |
|---------------|------------|-------------|
| smallish      | thinish    | shortish    |
| mediumish     | largish    | tallish     |
| whatever      |            |             |

##### Margin & Padding
| `margin`  | `padding`|
|-----------|----------|
| closeish  | closeish |
| farish    | farish   |
| fatish    | fatish   |
| tallish   | tallish  |
| centerish |          |

##### Font Weight & Font Size
|`font-weight`  | `font-size` |
|---------------|-------------|
| normalish     | smallish    |
| boldish       | mediumish   |
| lightish      | biggish     |
| mediumish     | whatever    |
| heavyish      |             |