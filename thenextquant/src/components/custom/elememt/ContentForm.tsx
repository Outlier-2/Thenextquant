// src/ContentForm.tsx
import React, { useState } from 'react';
import { ContentElement } from '@/type/ContentElement';
import {contentTypes} from '@/app/[locale]/textEditor/type'

interface ContentFormProps {
    addContent: (content: ContentElement) => void;
}

const ContentForm: React.FC<ContentFormProps> = ({ addContent }) => {
    const [contentType, setContentType] = useState<string>('p');
    const [contentData, setContentData] = useState<any>({});

    const handleContentTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setContentType(event.target.value);
        setContentData({});
    };

    const handleContentDataChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = event.target as HTMLInputElement;
        const checked = type === 'checkbox' ? (event.target as HTMLInputElement).checked : undefined;
        setContentData({ ...contentData, [name]: checked !== undefined ? checked : value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addContent({ type: contentType, ...contentData });
        setContentData({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Content Type:</label>
                <select value={contentType} onChange={handleContentTypeChange}>
                    {Object.keys(contentTypes).map(type => (
                        <option key={type} value={type}>
                            {type.replace('_', ' ')}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                {contentTypes[contentType].fields.map(field => (
                    <div key={field.name}>
                        <label>{field.name}:</label>
                        {field.type === 'text' && (
                            <input
                                type="text"
                                name={field.name}
                                value={contentData[field.name] || ''}
                                onChange={handleContentDataChange}
                            />
                        )}
                        {field.type === 'textarea' && (
                            <textarea
                                name={field.name}
                                value={contentData[field.name] || ''}
                                onChange={handleContentDataChange}
                            />
                        )}
                        {field.type === 'checkbox' && (
                            <input
                                type="checkbox"
                                name={field.name}
                                checked={contentData[field.name] || false}
                                onChange={handleContentDataChange}
                            />
                        )}
                    </div>
                ))}
            </div>
            <button type="submit">Add Content</button>
        </form>
    );
};

export default ContentForm;
