import { defineType, defineField } from "sanity";

const LANGUAGES = [
  { id: "hi", title: "Hindi" },
  { id: "ar", title: "Arabic" },
  { id: "ru", title: "Russian" },
];

export default defineType({
  name: "property",
  title: "Property",
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
      description:
        "Select which languages this content supports. English is always included.",
      group: "content",
    }),

    defineField({
      name: "title",
      title: "Property Title",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "developer",
      title: "Developer",
      type: "reference",
      to: [{ type: "developer" }],
      validation: (Rule) => Rule.required(),
      group: "content",
    }),

    defineField({
      name: "location",
      title: "Community",
      type: "reference",
      to: [{ type: "community" }],
      validation: (Rule) => Rule.required(),
      group: "content",
    }),

    defineField({
      name: "images",
      title: "Property Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      group: "content",
    }),

    defineField({
      name: "brochure",
      title: "Brochure PDF",
      type: "file",
      options: {
        accept: ".pdf",
      },
      description: "Upload property brochure PDF here",
      group: "content",
    }),

    defineField({
      name: "units",
      title: "Available Units",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "beds",
              title: "Bedrooms",
              type: "string",
            },
            {
              name: "size",
              title: "Size (Sq Ft)",
              type: "string",
            },
            {
              name: "price",
              title: "Starting Price",
              type: "string",
            },
          ],
        },
      ],
      group: "content",
    }),

    defineField({
      name: "handover",
      title: "Handover Date",
      type: "string",
      description: "Example: September 2029",
      group: "content",
    }),

    // ✅ FIXED FIELD NAME
    defineField({
      name: "showOnHomePage",
      title: "Show on Home Page",
      type: "boolean",
      initialValue: false,
      description:
        "Check this if you want to display this property on the Home page.",
      group: "content",
    }),

    ...LANGUAGES.flatMap((lang) => [
      defineField({
        name: `title_${lang.id}`,
        title: `Property Title (${lang.title})`,
        type: "string",
        group: "translations",
        hidden: ({ document }) =>
          !((document?.supportedLanguages as string[]) || []).includes(
            lang.id
          ),
      }),
    ]),
  ],
});
