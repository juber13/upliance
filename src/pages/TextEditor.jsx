/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = () => {
    const [content, setContent] = useState('');

    const config = {
        readonly: false,
        toolbar: true,
        toolbarButtonSize: 'medium',
        toolbarAdaptive: false,
        showCharsCounter: true,
        showWordsCounter: true,
        showXPathInStatusbar: false,
        buttons: 'bold,italic,underline,|,ul,ol,|',
        height: '400px', // Set the desired height
        resizer: false,
        showResize: false,

    };

    const handleContentChange = (newContent) => {
        setContent(newContent);
    };

    // Data Persistence
    useEffect(() => {
        // Load user data from localStorage or a server
        const savedContent = localStorage.getItem('userData');
        if (savedContent) {
            setContent(savedContent);
        }
    }, []);


    return (

        <div className='w-[60%] m-auto '>
           <h3 className='mb-4 text-2xl text-violet-300 font-semibold'>Editor</h3>
            <JoditEditor
                value={content}
                config={config}
                onBlur={handleContentChange}
            />
        </div>
    );
}

export default TextEditor