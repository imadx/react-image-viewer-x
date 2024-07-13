# React Image Viewer X

A simple Image viewer for React utilizing Canvas to preview the images with minimal configuration.

## Installing

```bash
npm i react-image-viewer-x
```
## Usage

```jsx
import React from 'react';
import ImageViewer from 'react-image-viewer-x';

const App = () => {
  <div
    style={{
      width: 800,
      height: 450,
    }}
  >
    <ImageViewer src={'https://picsum.photos/id/15/1200/800'} alt={"Sample Image"} />
  </div>
};
``` 


## Screenshots

![Preview Image](./screenshot.png)
