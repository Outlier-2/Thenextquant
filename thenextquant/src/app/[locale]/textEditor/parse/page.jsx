import React from 'react';

// 定义contentTypes映射
const contentTypes = {
    h1: { tag: 'h1', fields: [{ name: 'text', type: 'text' }], style: "leading-7 [&:not(:first-child)]:mt-6" },
    h2: { tag: 'h2', fields: [{ name: 'text', type: 'text' }], style: 'heading2' },
    h3: { tag: 'h3', fields: [{ name: 'text', type: 'text' }], style: 'heading3' },
    h4: { tag: 'h4', fields: [{ name: 'text', type: 'text' }], style: 'heading4' },
    p: { tag: 'p', fields: [{ name: 'text', type: 'text' }], style: 'paragraph' },
    blockquote: { tag: 'blockquote', fields: [{ name: 'text', type: 'text' }], style: 'blockquote' },
    inline_code: { tag: 'code', fields: [{ name: 'code', type: 'text' }], style: 'inline-code' },
    lead: { tag: 'p', fields: [{ name: 'text', type: 'text' }], class: 'lead', style: 'lead' },
    large: { tag: 'p', fields: [{ name: 'text', type: 'text' }], class: 'large', style: 'large' },
    small: { tag: 'p', fields: [{ name: 'text', type: 'text' }], class: 'small', style: 'small' },
    muted: { tag: 'p', fields: [{ name: 'text', type: 'text' }], class: 'muted', style: 'muted' },
    image: { tag: 'img', fields: [{ name: 'url', type: 'text' }, { name: 'caption', type: 'text' }], style: 'image' },
    audio: { tag: 'audio', fields: [{ name: 'url', type: 'text' }, { name: 'caption', type: 'text' }], style: 'audio' },
    video: { tag: 'video', fields: [{ name: 'url', type: 'text' }, { name: 'caption', type: 'text' }], style: 'video' }
};

// 渲染器组件
const ContentRenderer = ({ content }) => {
    return content.map((item, index) => {
        const contentType = contentTypes[item.type];
        if (!contentType) {
            return null; // 如果类型未定义，返回null
        }

        const Tag = contentType.tag;
        const props = {};

        // 处理字段
        contentType.fields.forEach(field => {
            if (item[field.name]) {
                props[field.name] = item[field.name];
            }
        });

        // 设置className属性
        props.className = contentType.style || '';

        // 处理img标签的特殊情况
        if (Tag === 'img') {
            return (
                <figure key={index} className={props.className}>
                    <img src={props.url} alt={props.caption} />
                    {props.caption && <figcaption>{props.caption}</figcaption>}
                </figure>
            );
        }

        // 处理audio和video标签的特殊情况
        if (Tag === 'audio' || Tag === 'video') {
            return (
                <figure key={index} className={props.className}>
                    <Tag controls src={props.url}>
                        {props.caption && <figcaption>{props.caption}</figcaption>}
                    </Tag>
                </figure>
            );
        }

        return <Tag key={index} {...props}>{props.text || props.code}</Tag>;
    });
};

// 示例使用
const App = () => {
    const content = [
        { type: 'p', text: 'asfsdf' },
        { type: 'p', text: 'sdfdsfasdfsfsfsdfdsffsffsfdsf' },
        { type: 'h1', text: '这是一个标题' },
        { type: 'image', url: 'http://example.com/image.jpg', caption: '这是一张图片' },
        { type: 'blockquote', text: '这是一段引用' }
    ];

    return (
        <div>
            <ContentRenderer content={content} />
        </div>
    );
};

export default App;
