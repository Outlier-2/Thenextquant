"use client"
import React, { useState } from 'react';
import { Article } from '@/type/Article';
import { ContentElement } from '@/type/ContentElement';
import ContentForm from '../../../components/custom/elememt/ContentForm';
import { ContentEditorForm } from '../../../components/custom/elememt/ContentEditorForm';

const App: React.FC = () => {
    const [article, setArticle] = useState<Article>({
        type: 'article',
        content: []
    });

    const addContent = (content: ContentElement) => {
        setArticle(prevArticle => ({
            ...prevArticle,
            content: [...prevArticle.content, content]
        }));
    };

    const removeContent = (index: number) => {
        setArticle(prevArticle => ({
            ...prevArticle,
            content: prevArticle.content.filter((_, i) => i !== index)
        }));
    };

    const generateJSON = () => {
        console.log(JSON.stringify(article, null, 2));
        // You can replace this console.log with any other action you want to perform with the generated JSON.
    };

    return (
        <div>
            <h1>JSON Content Editor</h1>
            <ContentForm addContent={addContent} />
            <div>
                <h2>Content Buffer</h2>
                <ul>
                    {article.content.map((content, index) => (
                        <li key={index}>
                            {content.type}: {JSON.stringify(content)}
                            <button onClick={() => removeContent(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={generateJSON}>Generate JSON</button>
            <div>
                <h2>Generated JSON</h2>
                <pre>{JSON.stringify(article, null, 2)}</pre>
            </div>
        </div>
    );
};

export default App;
