export interface Project {
    id: string;
    title: string;
    url: string;
    cover: string;
    author: string[];
}

export const projects: Project[] = [
    {
        id: "1",
        title: "E-commerce",
        url: "https://ecommerceflutterproject1.netlify.app/#/login",
        author: ["Ritheasor H. Sreng"],
        cover: "https://res.cloudinary.com/dafudehxr/image/upload/f_auto,q_auto/s0pqwxompf2kpzjuyw2r",
    },

    ]

export const morePlaylists = [
  ...projects.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];

export const sidebarPlaylists = [
  ...projects.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...projects,
  ...morePlaylists,
  ...sidebarPlaylists,
];
