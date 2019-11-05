# babel-plugin-tailwind-string

## Introduction:
This is a babel plugin transforms a string into a new string contain tailwind attributes, screen size, tailwind config value path key.

## Usecase:
To be used in combination of css-in-js libraries. eg: styled-components, emotion, linaria.

**Cons:**
- Reuse tailwind variable.
- Rapid prototype, code faster.
- Active matained.

**Input:**

```
// styled-componenets
const StyledComponentsButton = styled.button`
  ${tws`md`} {
    ${twa`mt-20 p-20`}
  }

  ${twa`mt-10 p-10 bg-testColor`}
  color: ${twt`colors.green.900`}
`
// emotion
const emotionButtonClass = cssEmotion`
  ${tws`md`} {
    ${twa`mt-20 p-20`}
  }

  ${twa`mt-10 p-10 bg-testColor `}
  color: ${twt`colors.green.900`}
`

const EmotionButton = emotion.button`
  ${tws`md`} {
    ${twa`mt-20 p-20`}
  }

  ${twa`mt-10 p-10 bg-testColor` };
  color: ${twt`colors.green.900`}
`

// linaria
const linariaButtonClass = cssEmotion`
  ${tws`md`} {
    ${twa`mt-20 p-20`}
  }

  ${twa`mt-10 p-10 bg-testColor `}
  color: ${twt`colors.green.900`}
`
```

**Output:**
```
const StyledComponentsButton = styled.button`
  ${`@media (min-width: 768px)`} {
    ${`margin-top: 5rem;
    padding: 5rem;`}
  }

  ${`margin-top: 2.5rem;
     padding: 2.5rem;
    background-color: yellow;`}
    color: ${`#22543d`}
`; // emotion

const emotionButtonClass = cssEmotion`
    ${`@media (min-width: 768px)`} {
        ${`margin-top: 5rem;
         padding: 5rem;`}
     }

     ${`margin-top: 2.5rem;
     padding: 2.5rem;
     background-color: yellow;`}
    color: ${`#22543d`}
`;
const EmotionButton = emotion.button`
    ${`@media (min-width: 768px)`} {
        ${`margin-top: 5rem;
        padding: 5rem;`}
    }

    ${`margin-top: 2.5rem;
        padding: 2.5rem;
        background-color: yellow;`};
        color: ${`#22543d`}
`; // linaria

const linariaButtonClass = cssEmotion`
    ${`@media (min-width: 768px)`} {
        ${`margin-top: 5rem;
        padding: 5rem;`}
    }

    ${`margin-top: 2.5rem;
    padding: 2.5rem;
    background-color: yellow;`}
    color: ${`#22543d`}
`;

```

## Usages:

```
npm install --dev babel-plugin-tailwind-string
yarn add --dev babel-plugin-tailwind-string
```

Since this is a babel plugin, we just need to add it to the "plugins" section in the babel configuration file to activate it.

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

## Typescript users:
I haven't created a PR to update types for this package in the DefinitedType repository yet. VSCode users will recieve error like: `twa is not defined`, `twa is not a function`...
Currently, there is a workaround for this. Add 'babel-plugin-tailwind-string' to field "compilerOptions.types":
```
{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                     
    "jsx": "react",                     
    "strict": true,      
    

    "types": [
      "babel-plugin-tailwind-string"
    ],                           


    "esModuleInterop": true                   
  }
}
```

## LICENSE
MIT


