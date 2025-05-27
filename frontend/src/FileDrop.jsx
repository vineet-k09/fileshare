import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileDrop = () => {
    const [files, setFiles] = useState([]);

    const fetchFiles = async () => {
        const res = await axios.get('/files');
        setFiles(res.data);
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    const handleDrop = async (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        const formData = new FormData();
        formData.append('file', file);

        await axios.post('/upload', formData);
        fetchFiles();
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            style={{ border: '2px dashed #aaa', padding: '50px', borderRadius: '8px' }}
        >
            <p>🚀 Drag & Drop your file here</p>
            <h3>📁 Files Available:</h3>
            <ul>
                {files.map((file, i) => (
                    <li key={i}>
                        <a href={`/download/${file}`} target="_blank" rel="noopener noreferrer">{file}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileDrop;
