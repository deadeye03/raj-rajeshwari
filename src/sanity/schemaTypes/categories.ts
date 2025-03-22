import { defineField, defineType } from 'sanity'

import { MdCategory } from "react-icons/md";
export const categoriesType = defineType({
    name: 'categories',
    title: 'Categories',
    type: 'document',
    icon: MdCategory,
    fields: [
        defineField({
            title: 'Category Name',
            name: 'categoryName',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            title: 'Category Set',
            name: 'categorySet',
            type: 'string',
            options: {
                list: [
                    { title: 'Designer Lehenga', value: 'designer-lehenga' },
                    { title: 'Mens Kurta', value: 'mens-kurta' },
                    { title: 'ReadyMade Collection', value: 'readymade-collection' },
                    { title: 'Navratri Lehenga', value: 'navratri-lehenga' },
                    { title: 'Designer Slik Sarees', value: 'designer-slik-sarees' },
                    { title: 'Pakistani Suits', value: 'pakistani-suits' },
                    { title: 'Sharara Collection', value: 'sharara-collection' },
                    { title: 'Kurti', value: 'kurti' }
                ]
            },
            validation: (Rule) => Rule.required().error('Please select a category type'),
        }),
        defineField({
            name: 'image',
            title: 'Category image',
            type: 'image'
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            initialValue: true
        }),
        defineField({
            name: 'isVisible',
            title: 'Is Visible',
            type: 'boolean',
            initialValue: true
        })
    ],
    preview: {
        select: {
            title: 'categoryName',
            subtitle: 'categorySet',
            media: 'image',
        },
    },
})