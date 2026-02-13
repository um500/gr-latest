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
  name: "announcement",
  title: "Top Announcement",
  type: "document",
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
      name: "eventDate",
      title: "Event Date",
      type: "date",
    }),

    defineField({
      name: "city",
      title: "City (English)",
      type: "string",
    }),

    ...LANGUAGES.map((lang) =>
      defineField({
        name: `city_${lang.id}`,
        title: `City (${lang.title})`,
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
      name: "description",
      title: "Description",
      type: "text",
    }),

  ],
});
