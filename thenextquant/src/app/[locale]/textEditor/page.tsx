// ContentForm.tsx
"use client"
import React, { useState } from 'react';
import CustomTextArea from '../../../components/custom/elememt/ContentEditorForm';
import { ContentElement } from '@/type/ContentElement';

interface ContentFormProps {
    addContent: (content: ContentElement) => void;
}

const ContentForm: React.FC<ContentFormProps> = ({ addContent }) => {
    const [contentData, setContentData] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addContent({ type: 'article', text: contentData });
        console.log("contentData:", contentData);
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


// App.tsx (或你的父组件文件)

interface AppState {
    contentElements: ContentElement[];
}

class App extends React.Component<{}, AppState> {
    state: AppState = {
        contentElements: [],
    };

    addContent = (content: ContentElement) => {
        this.setState(prevState => ({
            contentElements: [...prevState.contentElements, content],
        }));
    };

    render() {
        const { contentElements } = this.state;

        return (
            <div className="App">
                <h1>Content Editor</h1>
                <ContentForm addContent={this.addContent} />
                <h2>Content List</h2>
                {contentElements.map((content, index) => (
                    <div key={index} className="content-item">
                        <h3>{content.type}</h3>
                        <p>{content.text}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
