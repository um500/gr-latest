import { defineType, defineField } from "sanity";

const LANGUAGES = [
  { id: "hi", title: "Hindi" },
  { id: "es", title: "Spanish" },
  { id: "fr", title: "French" },
  { id: "de", title: "German" },
  { id: "zh", title: "Chinese" },
  { id: "ar", title: "Arabic" },
  { id: "pt", title: "Portuguese" },
  { id: "ru", title: "Russian" },
  { id: "ja", title: "Japanese" },
];

export default defineType({
  name: "developer",
  title: "Developers",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Developer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "logo",
      title: "Developer Logo",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
      description: "Large image for developer hero section",
    }),

    defineField({
      name: "shortDescription",
      title: "Short Description (English)",
      type: "text",
      rows: 3,
      description: "This short text will appear on developer cards",
      validation: (Rule) => Rule.required().max(200),
    }),

    ...LANGUAGES.map((lang) =>
      defineField({
        name: `shortDescription_${lang.id}`,
        title: `Short Description (${lang.title})`,
        type: "text",
        rows: 3,
      })
    ),

    defineField({
      name: "about",
      title: "About Developer (English)",
      type: "text",
      rows: 5,
    }),

    ...LANGUAGES.map((lang) =>
      defineField({
        name: `about_${lang.id}`,
        title: `About Developer (${lang.title})`,
        type: "text",
        rows: 5,
      })
    ),

    defineField({
      name: "stats",
      title: "Developer Stats",
      type: "object",
      fields: [
        {
          name: "experience",
          title: "Years Experience",
          type: "string",
          description: "e.g. 40+",
        },
        {
          name: "projects",
          title: "Projects Delivered",
          type: "string",
          description: "e.g. 120+",
        },
        {
          name: "homes",
          title: "Homes Sold",
          type: "string",
          description: "e.g. 50K+",
        },
        {
          name: "locations",
          title: "Prime Locations",
          type: "string",
          description: "e.g. Dubai",
        },
      ],
    }),

    defineField({
      name: "featured",
      title: "Featured Developer",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
