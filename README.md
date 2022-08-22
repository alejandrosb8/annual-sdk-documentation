# ANNUAL SDK DOCUMENTATION

Pagina de documentación para la herramienta ANNUAL SDK.

## ¿Como puedo contrubuir a la documentación?

### Instalación del proyecto

Despues de tener acceso al repositorio, se debe clonar para tenerlo en su entorno local, seguidamente hay que ejecutar `npm install` para descargar las dependencias.

### Scrips para iniciar la pagina

- `npm run dev`: crea un servidor local para poder ver la pagina en un entorno de desarrollo.
- `npm run build`: compila el proyecto y pone los archivos finales en la carpeta /dist.
- `npm run deploy`: sube la pagina a github y la habilita automaticamente.

### ¿Como agregar secciones a la documentación?

Para agregar secciones a la documentacion, se crea un archivo jsx con el nombre de la sección y se agrega en src/sections con la siguiente estructura:

```
import React from 'react';
import { StyledSection, SectionTitle, SectionP} from '../components/SectionComponents';

export const SectionName = () => {
  return (
    <StyledSection>
      <SectionTitle>{'Este es el titulo de la sección'}</SectionTitle>
      <SectionP>
        {'Esto es un parrafo de la sección'}
      </SectionP>
      <SectionSubTitle>{'Esto es un subtitulo'}</SectionSubTitle>
    </StyledSection>
  );
};
```

Luego, la sección se tiene que importar en el archivo src/layouts/MainContent.jsx como en el siguiente ejemplo:

```
<StyledMain sizeNav={props.sizeNav}>
    <StyledTitle>{'Documentación de la herramienta Annual SDK'}</StyledTitle>
    <Installation />
    <StatusCode />
    <SectionName />  <-------
</StyledMain>
```

### Etiquetas para utilizar en las secciones

Advertencia, para construir las seccion se utilizan etiquetas HTML personalizadas, no inserte HTML crudo, a continuacion se detallaran las etiquetas personalizadas funcionales hasta ahora:

- `StyledSection`: Es el contenedor de la sección, obligatoria.
- `SectionTitle`: Es el titulo principal de la sección, obligatoria.
- `SectionP`: Es un parrafo.
- `SectionCode`: Es un bloque de codigo.
- `SectionUl`: Es un contenedor de lista.
- `SectionLi`: Es un elemento de lista, necesita colocarse dentro de un SectionUl.

Tambien se pueden agregar sub-secciones, las etiquetas son:

- `StyledSubSection`: Es el contenedor de la sub-sección, obligatoria.
- `SectionSubTitle`: Es el titulo de la sub-sección, obligatoria.
