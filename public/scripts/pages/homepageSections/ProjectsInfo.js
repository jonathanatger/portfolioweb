import BlogImage from "../../../content/CaptureOB.png";
import ArtImage from "../../../content/BTG.jpg";
import RevitImage from "../../../content/CaptureOB.png";

export const projects = [
  {
    key: "blog",
    srcImage: BlogImage,
    title: "blog thing",
    description:
      "This piece is a great example of code, AI and network used together to create an emotinal artpiece.",
    webpage: "https://outputbuilding.wordpress.com/",
    github: "https://outputbuilding.wordpress.com/",
    twitter: "https://outputbuilding.wordpress.com/",

    otherImages: [BlogImage, BlogImage, BlogImage],
  },
  {
    key: "revit",
    srcImage: RevitImage,
    title: "Revit Plugins",
    description: "Great plugins a good fun for a bored architect",
  },
  {
    key: "dynamo",
    srcImage: RevitImage,
    title: "Dynamo open source work",
    description:
      "This piece is a great example of code, AI and network used together to create an emotinal artpiece.",
  },
  {
    key: "art",
    srcImage: ArtImage,
    title: "A great art piece",
    description:
      "This piece is a great example of code, AI and network used together to create an emotinal artpiece.",
  },
];
