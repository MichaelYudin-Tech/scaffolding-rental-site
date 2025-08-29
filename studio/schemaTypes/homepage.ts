import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'עמוד הבית',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'כותרת ראשית',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'תת כותרת',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroImage',
      title: 'תמונת רקע',
      type: 'image',
      description: 'מומלץ 1200x600 פיקסלים',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'whyUsTitle',
      title: 'כותרת "למה אנחנו"',
      type: 'string',
      initialValue: 'למה אנחנו?'
    }),
    defineField({
      name: 'whyUsItems',
      title: 'פריטי "למה אנחנו"',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'title',
            title: 'כותרת',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'description',
            title: 'תיאור',
            type: 'text',
            validation: Rule => Rule.required()
          })
        ]
      }],
      validation: Rule => Rule.max(4).error('ניתן להוסיף עד 4 פריטים')
    }),
    defineField({
      name: 'targetAudienceTitle',
      title: 'כותרת קהל יעד',
      type: 'string',
      initialValue: 'למי זה מתאים?'
    }),
    defineField({
      name: 'targetAudience',
      title: 'קהל יעד',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'title',
            title: 'כותרת',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'description',
            title: 'תיאור',
            type: 'text',
            validation: Rule => Rule.required()
          })
        ]
      }],
      validation: Rule => Rule.max(3).error('ניתן להוסיף עד 3 סוגי לקוחות')
    }),
    defineField({
      name: 'partnersTitle',
      title: 'כותרת שותפים',
      type: 'string',
      initialValue: 'חברות ומוסדות שעובדים איתנו'
    }),
    defineField({
      name: 'testimonialsTitle',
      title: 'כותרת המליצות',
      type: 'string',
      initialValue: 'מה אומרים עלינו'
    })
  ],
  preview: {
    select: {
      title: 'heroTitle'
    },
    prepare(selection) {
      return {
        title: selection.title || 'עמוד הבית'
      }
    }
  }
})