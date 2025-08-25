import img1 from "../assets/Deto30th/Deto1.webp";
import img2 from "../assets/NigerianInspired/Nigerian-Inspired.jpg";
import img3 from "../assets/TWDxChefBenedict/TWDxChefBenedict.jpg";
import img4 from "../assets/menu.jpg";
import deto1 from "../assets/Deto30th/Deto1.webp";
import deto2 from "../assets/Deto30th/Deto2.webp";
import deto3 from "../assets/Deto30th/Deto3.webp";
import deto4 from "../assets/Deto30th/Deto4.webp";
import deto5 from "../assets/Deto30th/Deto5.webp";
import deto6 from "../assets/Deto30th/Deto6.webp";
import deto7 from "../assets/Deto30th/Detos7.webp";
import deto8 from "../assets/Deto30th/Deto8.webp";
import deto9 from "../assets/Deto30th/Detos9.webp";
import deto10 from "../assets/Deto30th/Detos10.webp";
import deto11 from "../assets/Deto30th/deto11.webp";
import deto12 from "../assets/Deto30th/Deto12.jpeg";
import NIB from "../assets/NigerianInspired/NIB.jpg";
import NIB2 from "../assets/NigerianInspired/NIB2.jpg";
import NIB3 from "../assets/NigerianInspired/NIB3.jpg";
import NIB4 from "../assets/NigerianInspired/NIB4.jpg";
import NIB5 from "../assets/NigerianInspired/NIB5.jpg";
import NIB6 from "../assets/NigerianInspired/NIB6.jpg";
import NIB7 from "../assets/NigerianInspired/NIB7.jpg";
import NIB8 from "../assets/NigerianInspired/NIB8.jpg";
import NIB9 from "../assets/NigerianInspired/NIB9.jpg";
import NIB10 from "../assets/NigerianInspired/NIB10.jpg";
import NIB11 from "../assets/NigerianInspired/NIB11.jpg";
import NIB12 from "../assets/NigerianInspired/NIB12.jpg";
import NIB13 from "../assets/NigerianInspired/NIB13.jpg";
import gif1 from "../assets/Deto30th/detoGif.gif";
import Nibgif from "../assets/NigerianInspired/NIBgif.gif";
import Nibgif3 from "../assets/NigerianInspired/NIBgif3.gif";
import TwdXben from "../assets/TWDxChefBenedict/TWDxChefBenedict.mp4";
import TwdXben2 from "../assets/TWDxChefBenedict/twdXben1.gif";

export const events = [
  {
    id: "event-one",
    title: "Deto Black’s 30th",
    coverImage: img1,
    gif: gif1,
    gallery: [
      deto5,
      deto3,
      deto4,
      deto11,
      deto9,
      deto6,
      deto7,
      deto8,
      deto2,
      deto10,
      deto1,
    ],
  },
  {
    id: "event-two",
    title: "Nigerian-Inspired Brunch",
    coverImage: img2,
    gif: Nibgif,
    gallery: [
      img2,
      Nibgif3,
      NIB,
      deto12,
      Nibgif,
      NIB2,
      NIB5,
      NIB6,
      NIB4,
      NIB7,
      NIB8,
      NIB3,
      NIB13,
      NIB9,
      NIB10,
      NIB11,
      NIB12,
    ],
  },

  {
    id: "event-three",
    title: "TWD x Chef Benedict",
    coverImage: img3,
    gif: gif1,
    gallery: [
      TwdXben,
      TwdXben2,
      { type: "video", src: "../assets/TWDxChefBenedict/twdXben.mp4" },
    ],
  },
  {
    id: "event-four",
    title: "More Events Coming Soon...",
    coverImage: img4,
    gif: gif1,
    gallery: [
      "https://via.placeholder.com/800x600/5733FF/FFFFFF?text=Spring+Festival+Photo+1",
      "https://via.placeholder.com/800x600/5733FF/FFFFFF?text=Spring+Festival+Photo+2",
      "https://via.placeholder.com/800x600/5733FF/FFFFFF?text=Spring+Festival+Photo+3",
    ],
  },
];
