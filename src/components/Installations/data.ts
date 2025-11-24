// --- Place these imports at the top of your React component file ---
import PsychedelicsAnonymousImage from "../../img/installations/anonymous.webp"
import BosqueGraciasImage from "../../img/installations/bosque-tower.webp"
import MicahAlhadeffImage from "../../img/installations/crystal-cortex.webp"
import StomImage from "../../img/installations/elevation.webp"
import HapeImage from "../../img/installations/hape.webp"
import SalawakiImage from "../../img/installations/isthisreal.webp"
import aKIDcalledBEASTImage from "../../img/installations/kid.webp"
import MusicaW3Image from "../../img/installations/musicaw3.webp"
import NewtroArtsImage from "../../img/installations/newtro.webp"
import PepeGawdImage from "../../img/installations/parkour.webp"
import AlanHowickImage from "../../img/installations/pennies.webp"
import BIIMOImage from "../../img/installations/phygital-gate.webp"
import PsychofuturistImage from "../../img/installations/psyhce.webp"
import RadTVImage from "../../img/installations/rad.webp"
// --------------------------------------------------------------------

const artists = [
  {
    id: 4,
    name: "Hape",
    artworkTitle: "HAPE",
    description:
      "Hape is a global digital fashion IP innovating in Web3 by merging fashion, culture, and technology to create unique experiences. Partnered with brands like Diesel and Jägermeister, Hape continues to bridge digital and physical worlds. Returning to Decentraland this time, Hape brings its signature digital lifestyle with an immersive showcase of fashion and music. From the DJ booth and panel to coin scavenger hunt, every activation celebrates creativity, collaboration, and community spirit, featuring exclusive Wearables, hidden rewards, and the bold energy that defines Hape.",
    image: HapeImage,
    link: "https://www.instagram.com/hapesocial",
    studio: "Nikki Fuego",
    coordinates: {
      lat: -71,
      lng: -59,
    },
  },
  {
    id: 5,
    name: "Psychedelics Anonymous",
    artworkTitle: "Psychedelics Anonymous",
    description:
      "Psychedelics Anonymous is a Web3 brand dedicated to destigmatizing psychedelic culture and promoting self-betterment. Their community of over 150K followers engages in regular discourse, AI classes, and town halls. Visit their Decentraland Music Festival Party Pad to experience immersive DJ and visual art gatherings. It is also designed as a giant parkour challenge, with an exclusive Wearable drop if you can get to the top.",
    image: PsychedelicsAnonymousImage,
    link: "https://x.com/psychedelic_nft",
    studio: "Cansy",
    coordinates: {
      lat: -54,
      lng: -59,
    },
  },
  {
    id: 6,
    name: "Rad.Live",
    artworkTitle: "Rad TV",
    description:
      "Rad TV’s Live Feed is a three-day, open-genre music video showcase built for creators that want to connect with other artists and their fans! From December 3rd–5th, artists from around the world will stream their creations from Rad TV into Decentraland, turning Rad TV’s Party Pad into a personal stage for discovery, connection, and live creative energy.",
    image: RadTVImage,
    link: "instagram.com/radnftv",
    studio: "DappCraft",
    coordinates: {
      lat: -71,
      lng: -62,
    },
  },
  {
    id: 7,
    name: "MusicaW3",
    artworkTitle: "MusicaW3",
    description:
      "MúsicaW3 is a community of independent Latin American artists aiming to generate free, high-quality content and education for artists seeking to develop their careers in Web3. Join their Party Pad for DJ Sets to live MúsicaW3 sessions and activations, all highlighting the creativity and diversity of Latin and global talent.",
    image: MusicaW3Image,
    link: "https://www.instagram.com/musica_w3/",
    studio: "Imagine to Create",
    coordinates: {
      lat: -54,
      lng: -62,
    },
  },
  {
    id: 8,
    name: "aKIDcalledBEAST",
    artworkTitle: "aKIDcalledBEAST",
    description:
      "Expect 5 hours of DJ performances from aKIDcalledBEAST community members who have all played in Decentraland. Hosted by aKIDcalledMAKE and @sinfulmeatstick, the lineup includes @iamfity, @NateGuppy, @crypt0M1antour, @DJvAPED, and @jambert91. aKIDcalledBEAST is a digital collectible at the intersection of art, culture, fashion, and music. Launched in 2020, this 10k NFT collection and its 3D companion collectible are constantly evolving into metaverse-ready avatars and real-world physical products.",
    image: aKIDcalledBEASTImage,
    link: "https://www.instagram.com/akidcalledbeast",
    studio: "OVA",
    coordinates: {
      lat: -71,
      lng: -65,
    },
  },
  {
    id: 9,
    name: "Newtro Arts",
    artworkTitle: "Newtro Arts",
    description:
      "Get ready to experience the vibrant energy of Newtro Arts, a powerhouse collective of Latin American on-chain artists and culture builders. Since 2021, this multidisciplinary community—featuring visual artists, musicians, coders, DJs, and more—has been shaking up the scene. Newtro Arts will present a series of audiovisual activations created by artists from the collective, featuring DJ sets, acoustic sessions, analog synth visuals, and more. Each performance blends sound, motion, and digital art into immersive experiences that showcase the creative diversity of the community. ",
    image: NewtroArtsImage,
    link: "https://www.instagram.com/newtroarts",
    studio: "Carlos Mu",
    coordinates: {
      lat: -54,
      lng: -65,
    },
  },
  {
    id: 12,
    name: "Alan Howick",
    artworkTitle: "Pennies in Purgatory",
    description:
      "Inspired by the stream of history, Pennies In Purgatory is a multi-platform art project and interactive journey for Decentraland Music Festival. Exploring the beauty emerging from the interaction between copper and humanity, the experience begins as a stark, jet-black monolith. Once inside, visitors are guided through dark, narrow corridors lit by colorful, psychedelic pennies, creating a feeling of drifting through space as they follow a restricted path complemented by subtle audio and text fragments. The journey culminates as the space opens into a gallery for reflection and exploration, full of larger coin pieces and quiet electronica, before finally releasing onto the rooftop, echoing the experience of being swept along by, and ultimately emerging from, the flow of time.",
    image: AlanHowickImage,
    link: "https://www.instagram.com/penniesinpurgatory",
    studio: "PepeGawd",
    coordinates: {
      lat: -71,
      lng: -68,
    },
  },
  {
    id: 13,
    name: "BosqueGracias ",
    artworkTitle: "The Bosque Tower",
    description:
      "BosqueGracias is an artistic community from Patagonia exploring the intersection of nature, art, and tech through immersive web3 experiences and IRL art residencies. For over ten years, they have integrated traditional crafts (like textiles and natural dyes) with digital tools and blockchain technology, emphasizing sustainability and the repurposing of obsolete tech in their collaborative processes. Their venue, the Bosque Tower, will host live meditations and DJ sessions, bringing cross-disciplinary dialogue between the forest and the digital world. Featured artists include NikoAlerce, Glitchrama, and Rocío Mio, who share insights from their Patagonian residencies.",
    image: BosqueGraciasImage,
    link: "https://www.instagram.com/bosquegracias",
    studio: "The Coding Cave",
    coordinates: {
      lat: -54,
      lng: -68,
    },
  },
  {
    id: 10,
    name: "Salawaki",
    artworkTitle: "Chat, Is This Real?",
    description:
      '"Chat, Is This Real?" takes its name from a phrase and meme streamers often use, serving as a poetic nod to the feeling of being inside a live stream: the ecstasy of floating in attention, the adoration of fans, and the blurred closeness between streamer and audience. This project explores the shared intensity, both surreal and real, that defines digital fandom today. Float on platforms as if carried by the stream itself, add a rain of emojis and find the Wearable at the heart. ',
    image: SalawakiImage,
    link: "https://www.instagram.com/salawakii/",
    studio: "Rizk",
    coordinates: {
      lat: -67,
      lng: -59,
    },
  },
  {
    id: 11,
    name: "Psychofuturist",
    artworkTitle: "Psyche-Stream",
    description:
      "Psyche-Stream is a place for music and emotions. Express your emotion about the music around you by pushing the emoji buttons, and see them transformed into the piece. Your feelings build the experience itself.",
    image: PsychofuturistImage,
    link: "https://x.com/psychofuturist",
    studio: "Vegas City",
    coordinates: {
      lat: -58,
      lng: -59,
    },
  },
  {
    id: 14,
    name: "Phygital Gate",
    artworkTitle: "Phygital Gate",
    description:
      'BIIMO, born in Tbilisi, Georgia, is a street artist working between digital and physical realms and founder of the digital street art movement "AR Cities", spanning five countries and 30+ artists. His work Phygital Gate is a sculptural installation where XR-wearing figures, reflective architecture, interactive sound and transforming emoji-like spheres explore the threshold between material and virtual space, inviting viewers to reflect on perception, presence, and how empathy and attention shape shared digital realities.',
    image: BIIMOImage,
    link: "https://www.instagram.com/biimo_official",
    studio: "Jeunissemble",
    coordinates: {
      lat: -71,
      lng: -71,
    },
  },
  {
    id: 15,
    name: "Crystal Cortex",
    artworkTitle: "Crystal Cortex",
    description:
      "Explore Crystal Cortex, an interactive sculpture garden and soundscape that explores the theme of rebirth and regeneration through the transformation of glitch. Artist Micah Alhadeff uses 3D programming and glitch processing to explore the digital body and the limits of fantasy. His work was featured in Sotheby’s “Glitch: Beyond Binary” auction, where he sold the first ever GLB auctioned by Sotheby’s.\n\nIn Crystal Cortex you’ll be drawn into Micah’s world, where glitch has the power to transform our surroundings both sonically and visually. You’ll experience how glitch processing techniques can “peel back the 4th wall of the computer in hopes of creating new ways of experiencing the digital worlds we inhabit”. First exhibited at DCLMF 2023. ",
    image: MicahAlhadeffImage,
    link: "https://www.instagram.com/micah_alhadeff/",
    studio: "-",
    coordinates: {
      lat: -54,
      lng: -71,
    },
  },
  {
    id: 16,
    name: "Space Elevation Parkour",
    artworkTitle: "Space Elevation Parkour",
    description:
      "Prepare to ascend into orbit with this thrilling vertical parkour! Starting at the Space Elevator Launch Facility, journey through Mission Control, navigating maze-like rooms and challenges. Hop into the Passenger Capsule and ascend to the Midway Station, where more obstacles await before you board a final capsule to reach the pinnacle—the Space Station itself. The view at the top is breathtaking, with clouds below and stars stretching into the distance! Featuring timed airlocks, moving platforms, and jump puzzles, Space Elevation is a near-future experience, expertly designed to keep you on your toes.",
    image: StomImage,
    link: "https://x.com/stom66",
    studio: "-",
    coordinates: {
      lat: -68,
      lng: -65,
    },
  },
  {
    id: 17,
    name: "Crash Site Parkour",
    artworkTitle: "Crash Site Parkour",
    description:
      "Venture through the wreckage of a crashed alien spacecraft, complete with tentacles that still entangle the hull! Climb through the mysterious interior and scale the ship’s tilted exterior, facing animated challenges that add to the intensity. This derelict ship once explored the metaverse—now, it’s your turn to conquer its chaotic remains. With detailed animations and moving parts, Crash Site invites you to brave a haunting yet exhilarating climb up to its highest point.",
    image: PepeGawdImage,
    link: "https://x.com/PepeGawd",
    studio: "-",
    coordinates: {
      lat: -58,
      lng: -65,
    },
  },
]

export { artists }
