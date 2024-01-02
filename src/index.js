import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
function MyApp() {
    const [count, setCount] = useState(0);
    return (
        <>
            <App update={setCount} value={count} />
            <App update={setCount} value={count}/>
            <App value={count} update={setCount} />
        </>
    )
}
const htmlEntryPoint = ReactDOM.createRoot(document.getElementById('root'));
htmlEntryPoint.render(<MyApp />);