const whatsappMessage = `Hello Mahajana Printers, I'd like to request a quote:


*Item:*


*Size:*


*Quantity:*


*Printed Colours:* 


*Name & Phone Number:*


*Email:*
`;

const emailMessage = `Hello Mahajana Printers, I'd like to request a quote:

Item: (e.g. Invoice Book, Poster, Leaflets, Boxes, Calendars, Label, Tags)


Size: (A/B size or dimensions)


Quantity:


Printed Colours: (e.g. 01 / 02 / 03 / 04)


Name & Phone Number:



`;

export const whatsappQuoteLink = `https://wa.me/94771324882?text=${encodeURIComponent(whatsappMessage)}`;

export const mailtoQuoteLink = `mailto:mahajanaprinters.lk@gmail.com?subject=${encodeURIComponent(
  "Quote Request"
)}&body=${encodeURIComponent(emailMessage)}`;

export const gmailQuoteLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  "mahajanaprinters.lk@gmail.com"
)}&su=${encodeURIComponent("Quote Request")}&body=${encodeURIComponent(emailMessage)}`;

export const gmailAppQuoteLink = `googlegmail:///co?to=${encodeURIComponent(
  "mahajanaprinters.lk@gmail.com"
)}&subject=${encodeURIComponent("Quote Request")}&body=${encodeURIComponent(emailMessage)}`;
