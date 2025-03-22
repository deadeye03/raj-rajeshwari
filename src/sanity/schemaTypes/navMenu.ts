import { defineField, defineType } from 'sanity'

export const navMenuType = defineType({
    name: 'navbar',
    title: 'Navbar Content',
    type: 'document',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'kurti',
            title: 'Kurti',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'lehangas',
            title: 'Lehangas',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'sarees',
            title: 'Sarees',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'mensWear',
            title: 'Mens Wear',
            type: 'array',
            of: [{ type: 'string' }]
        }),

    ]

})