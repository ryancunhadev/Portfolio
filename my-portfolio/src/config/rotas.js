const usernameGithub = "ryancunhadev"

const redes = [
    { label: "Twitter / X", url: "https://x.com/ryancunhadev", icon: "https://img.icons8.com/ios-filled/50/FFFFFF/twitterx--v1.png" },
    { label: "GitHub", url: `https://github.com/${usernameGithub}`, icon: "https://img.icons8.com/ios-filled/50/FFFFFF/github.png" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ryancunhadev", icon: "https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" },
]

const rotasMenu = [
    { nome: "Início", path: "/", description: "Portfólio de Ryan Cunha, Desenvolvedor Full Stack." },
    { nome: "Projetos", path: "/projetos", description: "Confira os projetos desenvolvidos por Ryan Cunha." },
    { nome: "Sobre", path: "/sobre", description: "Conheça Ryan Cunha, sua trajetória e experiência como Desenvolvedor Full Stack." },
    { nome: "Curriculos / CV", path: "/curriculos", description: "Confira o currículo de Ryan Cunha." },
]

const ignorarRepo = [
    usernameGithub,
    "Portfolio"
] || []

export { rotasMenu, ignorarRepo, usernameGithub, redes }