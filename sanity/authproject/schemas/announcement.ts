import { defineType, defineField } from "sanity";

const LANGUAGES = [
  { id: "hi", title: "Hindi" },
  { id: "ar", title: "Arabic" },
  { id: "ru", title: "Russian" },
];

export default defineType({
  name: "announcement",
  title: "Top Announcement",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "translations", title: "Translations" },
  ],
  fields: [
    defineField({
      name: "supportedLanguages",
      title: "Supported Languages",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: LANGUAGES.map((l) => ({ title: l.title, value: l.id })),
      },
      description: "Select which languages this content supports. English is always included.",
      group: "content",
    }),

    defineField({
      name: "title",
      title: "Title (English)",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),

    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "date",
      group: "content",
    }),

    defineField({
      name: "city",
      title: "City (English)",
      type: "string",
      group: "content",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: "content",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "content",
    }),

    ...LANGUAGES.flatMap((lang) => [
      defineField({
        name: `title_${lang.id}`,
        title: `Title (${lang.title})`,
        type: "string",
        group: "translations",
        hidden: ({ document }) =>
          !((document?.supportedLanguages as string[]) || []).includes(lang.id),
      }),
      defineField({
        name: `city_${lang.id}`,
        title: `City (${lang.title})`,
        type: "string",
        group: "translations",
        hidden: ({ document }) =>
          !((document?.supportedLanguages as string[]) || []).includes(lang.id),
      }),
    ]),
  ],
});
