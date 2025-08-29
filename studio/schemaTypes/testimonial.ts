import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'המלצה',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'שם הלקוח',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'company',
      title: 'חברה/תפקיד',
      type: 'string',
      description: 'מקום עבודה או תיאור',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'text',
      title: 'טקסט ההמלצה',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'דירוג',
      type: 'number',
      description: '1-5 כוכבים',
      validation: Rule => Rule.required().min(1).max(5),
      options: {
        list: [
          {title: '⭐ 1 כוכב', value: 1},
          {title: '⭐⭐ 2 כוכבים', value: 2},
          {title: '⭐⭐⭐ 3 כוכבים', value: 3},
          {title: '⭐⭐⭐⭐ 4 כוכבים', value: 4},
          {title: '⭐⭐⭐⭐⭐ 5 כוכבים', value: 5}
        ]
      }
    }),
    defineField({
      name: 'active',
      title: 'פעיל',
      type: 'boolean',
      description: 'האם להציג באתר',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      rating: 'rating',
      active: 'active'
    },
    prepare(selection) {
      const stars = '⭐'.repeat(selection.rating || 0)
      const status = selection.active ? '✅' : '❌'
      return {
        title: selection.title,
        subtitle: `${selection.subtitle} | ${stars} | ${status}`
      }
    }
  }
})