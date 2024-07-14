"use client"
import React, { useState, useRef } from 'react';

const contentTypes = {
    h1: { tag: 'h1', fields: [{ name: 'text', type: 'text' }] },
    h2: { tag: 'h2', fields: [{ name: 'text', type: 'text' }] },
    h3: { tag: 'h3', fields: [{ name: 'text', type: 'text' }] },
    h4: { tag: 'h4', fields: [{ name: 'text', type: 'text' }] },
    p: { tag: 'p', fields: [{ name: 'text', type: 'text' }] },
    blockquote: { tag: 'blockquote', fields: [{ name: 'text', type: 'text' }] },
    inline_code: { tag: 'code', fields: [{ name: 'code', type: 'text' }] },
    lead: { tag: 'p', fields: [{ name: 'text', type: 'text' }], class: 'lead' },
    large: { tag: 'p', fields: [{ name: 'text', type: 'text' }], class: 'large' },
    small: { tag: 'p', fields: [{ name: 'text', type: 'text' }], class: 'small' },
    muted: { tag: 'p', fields: [{ name: 'text', type: 'text' }], class: 'muted' },
    image: { tag: 'img', fields: [{ name: 'url', type: 'text' }, { name: 'caption', type: 'text' }] },
    audio: { tag: 'audio', fields: [{ name: 'url', type: 'text' }, { name: 'caption', type: 'text' }] },
    video: { tag: 'video', fields: [{ name: 'url', type: 'text' }, { name: 'caption', type: 'text' }] }
};

export default function RichTextEditor() {
    const editorRef = useRef();
    const [selectedType, setSelectedType] = useState('p');
    const [contents, setContents] = useState([]);

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const formatText = (tag, className = null) => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        const selectedText = range.extractContents();
        const element = document.createElement(tag);
        if (className) element.className = className;
        element.appendChild(selectedText);
        range.insertNode(element);

        // Move cursor after the inserted element
        range.setStartAfter(element);
        range.setEndAfter(element);
        selection.removeAllRanges();
        selection.addRange(range);

        editorRef.current.focus();
    };

    const handleAddContent = () => {
        const contentHtml = editorRef.current.innerHTML;
        setContents([...contents, { type: selectedType, text: contentHtml }]);
        editorRef.current.innerHTML = ''; // Reset editor content
    };

    const handleGenerateContent = () => {
        alert(JSON.stringify(contents, null, 2));
    };

    return (
        <div>
            <h1>富文本编辑器</h1>
            <div>
                <label htmlFor="content-type-select">选择内容类型：</label>
                <select id="content-type-select" onChange={handleTypeChange} value={selectedType}>
                    {Object.keys(contentTypes).map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
                <button onClick={() => formatText(contentTypes[selectedType].tag, contentTypes[selectedType].class)}>
                    应用样式
                </button>
            </div>

            <div
                id="editor"
                ref={editorRef}
                contentEditable
                style={{ border: '1px solid black', minHeight: '200px', padding: '10px', marginTop: '10px' }}
            ></div>

            <button onClick={handleAddContent}>添加内容</button>
            <button onClick={handleGenerateContent}>生成对象</button>

            <pre>{JSON.stringify(contents, null, 2)}</pre>
        </div>
    );
}
