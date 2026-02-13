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
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "title",
      title: "Title (English)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    ...LANGUAGES.map((lang) =>
      defineField({
        name: `title_${lang.id}`,
        title: `Title (${lang.title})`,
        type: "string",
      })
    ),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle (English)",
      type: "string",
    }),

    ...LANGUAGES.map((lang) =>
      defineField({
        name: `subtitle_${lang.id}`,
        title: `Subtitle (${lang.title})`,
        type: "string",
      })
    ),

    defineField({
      name: "excerpt",
      title: "Short Description (English)",
      type: "text",
      rows: 3,
    }),

    ...LANGUAGES.map((lang) =>
      defineField({
        name: `excerpt_${lang.id}`,
        title: `Short Description (${lang.title})`,
        type: "text",
        rows: 3,
      })
    ),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "content",
      title: "Blog Content (English)",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    }),

    ...LANGUAGES.map((lang) =>
      defineField({
        name: `content_${lang.id}`,
        title: `Blog Content (${lang.title})`,
        type: "array",
        of: [
          { type: "block" },
          { type: "image", options: { hotspot: true } },
        ],
      })
    ),
  ],
});
