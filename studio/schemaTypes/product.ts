import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'מוצר/פיגום',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'שם המוצר',
      type: 'string',
      description: 'שם הפיגום המלא',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'manufacturer',
      title: 'יצרן',
      type: 'string',
      description: 'חברת היצרן',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'maxHeight',
      title: 'גובה דריכה',
      type: 'string',
      description: 'גובה דריכה מקסימלי (למשל "6.3 מ")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'workingHeight',
      title: 'גובה עבודה',
      type: 'string',
      description: 'גובה עבודה בידיים (למשל "8.3 מ")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'maxWeight',
      title: 'משקל מותר',
      type: 'string',
      description: 'משקל מקסימלי מותר (למשל "168 ק״ג")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'platformSize',
      title: 'גודל במה',
      type: 'string',
      description: 'מידות במת העבודה (למשל "135X63 ס״מ")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'warranty',
      title: 'אחריות',
      type: 'string',
      description: 'תקופת אחריות (אופציונלי)'
    }),
    defineField({
      name: 'standard',
      title: 'תקן',
      type: 'string',
      description: 'תקן בטיחות (למשל "תקן אירופאי EN1004")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'תמונה',
      type: 'image',
      description: 'תמונת המוצר',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'featured',
      title: 'מומלץ',
      type: 'boolean',
      description: 'האם להציג כמוצר מומלץ',
      initialValue: false
    }),
    defineField({
      name: 'price',
      title: 'מחיר',
      type: 'string',
      description: 'מחיר או "לבירור"',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'order',
      title: 'סדר תצוגה',
      type: 'number',
      description: 'מספר לסדר הופעה',
      validation: Rule => Rule.required().min(1)
    })
  ],
  orderings: [
    {
      title: 'סדר תצוגה',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    },
    {
      title: 'מוצרים מומלצים',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'order', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      manufacturer: 'manufacturer',
      price: 'price',
      featured: 'featured',
      media: 'image'
    },
    prepare(selection) {
      const featuredIcon = selection.featured ? '⭐ ' : ''
      return {
        title: `${featuredIcon}${selection.title}`,
        subtitle: `${selection.manufacturer} | ${selection.price}`,
        media: selection.media
      }
    }
  }
})