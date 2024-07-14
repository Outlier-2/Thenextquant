// src/CustomTextArea.tsx
import React, { useRef } from 'react';

interface CustomTextAreaProps {
    value: string;
    onChange: (value: string) => void;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({ value, onChange }) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const getSelectedText = () => {
        if (!textAreaRef.current) return { text: '', start: 0, end: 0 };
        const textArea = textAreaRef.current;
        return {
            text: textArea.value.substring(textArea.selectionStart, textArea.selectionEnd),
            start: textArea.selectionStart,
            end: textArea.selectionEnd
        };
    };

    const wrapSelectedText = (tag: string) => {
        if (!textAreaRef.current) return;
        const textArea = textAreaRef.current;
        const { text, start, end } = getSelectedText();
        if (!text) return;
        const wrappedText = `<${tag}>${text}</${tag}>`;
        const newValue = value.substring(0, start) + wrappedText + value.substring(end);
        onChange(newValue);
    };

    return (
        <div>
            <textarea ref={textAreaRef} value={value} onChange={(e) => onChange(e.target.value)} />
            <div>
                <button type="button" onClick={() => wrapSelectedText('h1')}>H1</button>
                <button type="button" onClick={() => wrapSelectedText('h2')}>H2</button>
                <button type="button" onClick={() => wrapSelectedText('h3')}>H3</button>
                <button type="button" onClick={() => wrapSelectedText('h4')}>H4</button>
                <button type="button" onClick={() => wrapSelectedText('p')}>P</button>
                <button type="button" onClick={() => wrapSelectedText('blockquote')}>Blockquote</button>
                <button type="button" onClick={() => wrapSelectedText('inline_code')}>Inline Code</button>
                <button type="button" onClick={() => wrapSelectedText('lead')}>Lead</button>
                <button type="button" onClick={() => wrapSelectedText('large')}>Large</button>
                <button type="button" onClick={() => wrapSelectedText('small')}>Small</button>
                <button type="button" onClick={() => wrapSelectedText('muted')}>Muted</button>
            </div>
        </div>
    );
};

export default CustomTextArea;
