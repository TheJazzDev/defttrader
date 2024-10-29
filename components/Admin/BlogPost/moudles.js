let toolbarOptions = [
  [{ header: [2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ align: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ direction: 'rtl' }],
  [
    {
      color: [
        '#0000FF',
        '#FF0000',
        '#FFFF00',
        '#FF6600',
        '#00FF00',
        '#6600FF',
        '#000000',
        '#FFFFFF',
      ],
    },
    { background: [] },
  ],
  ['link', 'image'],
  ['clean'],
];

export const contentModules = {
  toolbar: {
    container: toolbarOptions,
  },
};
