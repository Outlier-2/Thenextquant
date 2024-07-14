import React from 'react';

// 定义contentTypes映射
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

// 渲染器组件
const ContentRenderer = ({ content }) => {
    return content.map((item, index) => {
        const contentType = contentTypes[item.type];
        if (!contentType) {
            return null; // 如果类型未定义，返回null
        }

        const Tag = contentType.tag;
        const props = {
            className: undefined
        };

        // 处理字段
        contentType.fields.forEach(field => {
            if (item[field.name]) {
                props[field.name] = item[field.name];
            }
        });

        // 处理可选的class属性
        if (contentType.class) {
            props.className = contentType.class;
        }

        // 处理img、audio和video标签的特殊情况
        if (Tag === 'img' || Tag === 'audio' || Tag === 'video') {
            return (
                <Tag key={index} {...props}>
                    {props.caption && <figcaption>{props.caption}</figcaption>}
                </Tag>
            );
        }

        return <Tag key={index} {...props}>{props.text || props.code}</Tag>;
    });
};

// 示例使用
const App = () => {
    const content = [
        { type: 'p', text: '<p>asfsdf</p>' },
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
