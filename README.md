# babel-plugin-tailwind-string

## Introduction:
This is a babel plugin transforms a string into a new string contain tailwind attributes, screen size, tailwind config value path key.

## Usages:

```
npm install --dev babel-plugin-tailwind-string
yarn add --dev babel-plugin-tailwind-string
```

Since this is a babel plugin, we just need to add it to the "plugins" section in the babel configuration file to activiate it. Remember to place this on the top of the section incase of using other plugins that transpile the string into css. eg: linaria... etc

```
{
  "plugins": [
    "babel-plugin-tailwind-string"
  ]
}
```

## Features:
### twa: transform css string using tailwind @apply directive:

**Input:**
```
const StyledComponentsButton = styled.button`
  ${twa`mt-10`}
`
```

**Output:**
```
const StyledComponentsButton = styled.button`
    margin-top: 1.25rem
`
```

### tws: transform css string using tailwind @screen directive

**Input:**
```
const StyledComponentsButton = styled.button`
  ${tws`md`} {
    ${twa`mt-10`}
  }
`
```

**Output:**
```
const StyledComponentsButton = styled.button`
    @media (min-width: 640px) {
        margin-top: 1.25rem   
    }
`
```

### tws: transform css string using tailwind theme function

**Input:**
```
const StyledComponentsButton = styled.button`
  ${tws`md`} {
    ${twa`mt-10`}
    color: ${twt`colors.green.900`}
  }
`
```

**Output:**
```
const StyledComponentsButton = styled.button`
    @media (min-width: 640px) {
        margin-top: 1.25rem;
        color: green;
    }
`
```

## LICENSE
MIT



