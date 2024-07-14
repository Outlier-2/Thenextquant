export const contentTypes: { [key: string]: { fields: { name: string, type: string }[] } } = {
    h1: { fields: [{ name: 'text', type: 'text' }] },
    h2: { fields: [{ name: 'text', type: 'text' }] },
    h3: { fields: [{ name: 'text', type: 'text' }] },
    h4: { fields: [{ name: 'text', type: 'text' }] },
    p: { fields: [{ name: 'text', type: 'text' }] },
    blockquote: { fields: [{ name: 'text', type: 'text' }] },
    table: {
        fields: [
            { name: 'headers', type: 'text' },
            { name: 'rows', type: 'textarea' }
        ]
    },
    list: {
        fields: [
            { name: 'ordered', type: 'checkbox' },
            { name: 'items', type: 'textarea' }
        ]
    },
    inline_code: { fields: [{ name: 'code', type: 'text' }] },
    lead: { fields: [{ name: 'text', type: 'text' }] },
    large: { fields: [{ name: 'text', type: 'text' }] },
    small: { fields: [{ name: 'text', type: 'text' }] },
    muted: { fields: [{ name: 'text', type: 'text' }] },
    image: {
        fields: [
            { name: 'url', type: 'text' },
            { name: 'caption', type: 'text' }
        ]
    },
    audio: {
        fields: [
            { name: 'url', type: 'text' },
            { name: 'caption', type: 'text' }
        ]
    },
    video: {
        fields: [
            { name: 'url', type: 'text' },
            { name: 'caption', type: 'text' }
        ]
    }
};
