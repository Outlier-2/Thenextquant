
import React, { useState } from 'react';
import { ContentElement } from '@/type/ContentElement';
import {contentTypes} from '@/app/[locale]/textEditor/type'
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

interface ContentFormProps {
    addContent: (content: ContentElement) => void;
}

interface ContentFormProps {
    addContent: (content: ContentElement) => void;
}

const ContentForm: React.FC<ContentFormProps> = ({ addContent }) => {
    const [contentType, setContentType] = useState<string>('p');
    const [contentData, setContentData] = useState<any>({});

    const handleContentTypeChange = (type: string) => {
        setContentType(type);
        setContentData({});
    };

    const handleContentDataChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = event.target;
        const checked = event.target instanceof HTMLInputElement ? event.target.checked : undefined;
        setContentData({ ...contentData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addContent({ type: contentType, ...contentData });
        setContentData({});
    };

    return (
        <div>
            <div>
                <ToggleGroup type="multiple" key="contentType">
                {Object.keys(contentTypes).map(type => (
                    <button key={type} onClick={() => handleContentTypeChange(type)}>
                        <ToggleGroupItem value={type} aria-label="Toggle bold">
                        {type.replace('_', ' ')}
                        </ToggleGroupItem>
                    </button>
                ))}
                </ToggleGroup>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    {contentTypes[contentType].fields.map(field => (
                        <ToggleGroup type="multiple" key={field.name}>
                            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                                <label>{field.name}:</label>
                            </ToggleGroupItem>

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
                        </ToggleGroup >
                    ))}
                </div>
                <button type="submit">Add Content</button>
            </form>
        </div>
    );
};

export default ContentForm;


