import { codePrettier } from '../helpers/prettier.js';

export const scriptDiv = (script) => {
    const div = document.createElement('div');
    const code = document.createElement('code');
  
    code.innerText = script ? codePrettier(script) : 'No script';
  
    //append code to div
    div.appendChild(code);
  
    Object.assign(div.style, {
      border: '1px solid gray',
      //darkstyle
      backgroundColor: '#333',
      color: 'white',
      margin: '20px',
      textAlign: 'left',
      padding: '20px',
      // overflow: 'auto',
      width: '800px',
      // height: '800px'
    });
    code.style.color = 'white';
    code.style.textAlign = 'left';
  
    app.appendChild(div);
  
    return div;
  };
  
  export const scriptDiv2 = (script) => {
    //create elements
    const app = document.querySelector('#app');
    const div = document.createElement('div');
    const code = document.createElement('code');
  
    //set code content
    code.innerText = script ? codePrettier(script) : 'No script';
  
    //append code to div
    div.appendChild(code);
  
    Object.assign(div.style, {
      border: '1px solid gray',
      //darkstyle
      backgroundColor: '#333',
      color: 'white',
      margin: '20px',
      textAlign: 'left',
      padding: '20px',
      // overflow: 'auto',
      width: '800px',
      // height: '800px'
    });
  
    code.style.color = 'white';
    code.style.textAlign = 'left';
    app.appendChild(div);
  
    // Execute the script using the Function constructor
    if (script) {
      try {
        const func = new Function(script);
        func();
      } catch (e) {
        console.error(e);
      }
    }
  
    return div;
  };
  