// components/Membership/review-data.ts

export interface Review {
  name: string;
  role: string;
  quote: string;
  /** Cloudinary public id. */
  photoId: string;
  /** Cloudinary target ratio for the crop. The card is close to 3:4, so that is the default. */
  ar: string;
  /** Plate colour, passed straight to WavyLabel. */
  color: "red" | "blue" | "orange";
}

/** Reviews on the membership page. */
export const membershipReviews: Review[] = [
  {
    name: "Fadlu",
    role: "AIESEC in Ilorin",
    quote:
      "AIESEC is easily one of the best decisions I have made and I regret not joining earlier. I found a family that I wasn't looking for and I didn't know I needed.",
    photoId: "reviews-fadlu",
    ar: "3:4",
    color: "red",
  },
    {
    name: "Edith Nkemakonam Enebeli",
    role: "AIESEC in Benin",
    quote:
      "I joined AIESEC because I wanted to meet more people and do something outside of Statistics. Now, to me, AIESEC is not just an organisation, it’s community and growth.",
    photoId: "reviews-edith",
    ar: "3:4",
    color: "red",
  },
  {
    name: "Chinazam Ikechukwu",
    role: "AIESEC in Akure",
    quote:
      "AIESEC gave me my first experience of how a well-structured organisation works. It taught me how to collaborate with people from different backgrounds and work towards shared goals.",
    photoId: "reviews-chinazam",
    ar: "3:4",
    color: "blue",
  },
  {
    name: "Chisom",
    role: "AIESEC in Nigeria",
    quote:
      "I joined AIESEC with beginner level skills and left with experiences that helped me land internships, a job, and helped me have a softer transition to the corporate world.",
    photoId: "reviews-chisom",
    ar: "3:4",
    color: "blue",
  },
];

/** Reviews on the home page. Names, roles and quotes below  */
export const homeReviews: Review[] = [
  {
    name: "Michael Shekinah Yeye",
    role: "Global Exchange Participant",
    quote: "If you have the opportunity to go on exchange, take it. Step outside what is familiar. The perspective you gain can shape how you lead, work, build relationships, and create impact.",
    photoId: "reviews-shekinah",
    ar: "3:4",
    color: "orange",
  },
  {
    name: "Ayeni Widad Ifebiyi ",
    role: "Global Exchange Participant",
    quote: "My exchange experience opened my eyes to culture, friendship, resilience, shared humanity, new perspectives, unforgettable memories, and beautiful connections.",
    photoId: "reviews-widad",
    ar: "3:4",
    color: "orange",
  },
  {
    name: "Qosim Olawoyin",
    role: "Global Exchange Participant",
    quote: "Living in Benin Republic taught me that real impact isn't about massive gestures, but doing small things with great love. You leave both the community and yourself permanently transformed.",
    photoId: "reviews-qosim",
    ar: "3:4",
    color: "orange",
  },
];