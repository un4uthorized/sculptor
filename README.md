# Sculptor 

Sculptor is a powerful React library designed to help developers build useful high order components with ease. With Sculptor, developers can create complex components that can be reused across their projects, saving time and effort in the development process.


## Installation

Sculptor is available as an [npm package]

```bash

npm install --save sculptor-react

```

Sculptor is a work in progress. 



### Todo

- [ ] Add Currency other money types
- [ ] Add Date Formatters
- [ ] Boundary Checkers



### Examples

#### withCurrency

```tsx

import React from 'react';
import { withCurrency } from 'sculptor';

const MyComponent = (props) => {
  <input {...props}/>
}

export default withCurrency(MyComponent);

```

Consider to open an issue if you have any questions or suggestions.

## License

[MIT](https://choosealicense.com/licenses/mit/)

 


