import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partner',
  title: 'שותף',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'שם החברה',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'לוגו',
      type: 'image',
      description: 'מומלץ 200x200 פיקסלים',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'description',
      title: 'תיאור',
      type: 'text',
      description: 'תיאור קצר של הפעילות',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'order',
      title: 'סדר תצוגה',
      type: 'number',
      description: 'מספר לקביעת סדר הופעה',
      validation: Rule => Rule.required().min(1)
    })
  ],
  orderings: [
    {
      title: 'סדר תצוגה',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      order: 'order'
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `סדר: ${selection.order}`,
        media: selection.media
      }
    }
  }
})