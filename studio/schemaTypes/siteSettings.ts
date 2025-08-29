import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'הגדרות אתר',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'טלפון',
      type: 'string',
      description: 'מספר טלפון להצגה (עם מקפים)',
      validation: Rule => Rule.required().regex(/^0\d{2}-\d{7}$/, {
        name: 'phone',
        invert: false
      }).error('פורמט נדרש: 0XX-XXXXXXX')
    }),
    defineField({
      name: 'whatsapp',
      title: 'וואטסאפ',
      type: 'string',
      description: 'מספר לוואטסאפ (ללא מקפים, עם קידומת 972)',
      validation: Rule => Rule.required().regex(/^972\d{9}$/, {
        name: 'whatsapp',
        invert: false
      }).error('פורמט נדרש: 972XXXXXXXXX')
    })
  ],
  preview: {
    select: {
      phone: 'phone',
      whatsapp: 'whatsapp'
    },
    prepare(selection) {
      return {
        title: 'הגדרות אתר',
        subtitle: `טלפון: ${selection.phone} | וואטסאפ: ${selection.whatsapp}`
      }
    }
  }
})