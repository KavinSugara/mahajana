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

export const gmailQuoteLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  "mahajanaprinters.lk@gmail.com"
)}&su=${encodeURIComponent("Quote Request")}&body=${encodeURIComponent(quoteMessage)}`;

// Gmail's iOS app custom URL scheme — Android already handles the
// mail.google.com web link above by opening the Gmail app directly,
// but iOS needs this separate scheme to launch the app instead of Safari.
export const gmailAppQuoteLink = `googlegmail:///co?to=${encodeURIComponent(
  "mahajanaprinters.lk@gmail.com"
)}&subject=${encodeURIComponent("Quote Request")}&body=${encodeURIComponent(quoteMessage)}`;
