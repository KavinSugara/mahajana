export const quoteMessage = `Hello Mahajana Printers, I'd like to request a quote:

*Item:* (e.g. Invoice Book, Poster, Leaflets, Boxes, Calendars, Label, Tags)


*Size:* (A/B size or dimensions)


*Quantity:*


*Printed Colours:* (e.g. 01 / 02 / 03 / 04)


*Name & Phone Number:*


*Email:*
`;

export const whatsappQuoteLink = `https://wa.me/94771324882?text=${encodeURIComponent(quoteMessage)}`;

export const mailtoQuoteLink = `mailto:mahajanaprinters.lk@gmail.com?subject=${encodeURIComponent(
  "Quote Request"
)}&body=${encodeURIComponent(quoteMessage)}`;
