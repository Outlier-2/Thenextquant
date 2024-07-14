'use client'
import React, { useState } from 'react';
import CustomTextArea from '../../../components/custom/elememt/ContentEditorForm';
import { ContentElement } from '@/type/ContentElement';

interface ContentFormProps {
    addContent: (content: ContentElement) => void;
}

const ContentForm: React.FC<ContentFormProps> = ({ addContent }) => {
    const [contentData, setContentData] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addContent({ type: 'article', text: contentData });
        setContentData('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CustomTextArea value={contentData} onChange={setContentData} />
                <button type="submit">Add Content</button>
            </form>
        </div>
    );
};

export default ContentForm;
