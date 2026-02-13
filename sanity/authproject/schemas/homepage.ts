import { defineType, defineField } from "sanity";

const LANGUAGES = [
  { id: "hi", title: "Hindi" },
  { id: "ar", title: "Arabic" },
  { id: "ru", title: "Russian" },
];

export default defineType({
  name: "homepage",
  title: "Homepage",
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
      name: "heroSlides",
      title: "Hero Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "subtitle",
              title: "Subtitle",
              type: "string",
            },
            {
              name: "image",
              title: "Background Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "active",
              title: "Active Slide",
              type: "boolean",
              initialValue: true,
            },
            {
              name: "linkedProperty",
              title: "Linked Property",
              type: "reference",
              to: [{ type: "property" }],
            },
            ...LANGUAGES.flatMap((lang) => [
              {
                name: `title_${lang.id}`,
                title: `Title (${lang.title})`,
                type: "string",
              },
              {
                name: `subtitle_${lang.id}`,
                title: `Subtitle (${lang.title})`,
                type: "string",
              },
            ]),
          ],
        },
      ],
      group: "content",
    }),

    defineField({
      name: "heroCTA",
      title: "Hero CTA Text",
      type: "string",
      initialValue: "Explore Properties",
      group: "content",
    }),

    ...LANGUAGES.flatMap((lang) => [
      defineField({
        name: `heroCTA_${lang.id}`,
        title: `Hero CTA Text (${lang.title})`,
        type: "string",
        group: "translations",
        hidden: ({ document }) =>
          !((document?.supportedLanguages as string[]) || []).includes(lang.id),
      }),
    ]),
  ],
});
