import { rotasMenu, ignorarRepo, usernameGithub, redes } from "./rotas.js";
import BannerPessoal from "./banners/Pessoal";
import BannerGitHub from "./banners/BannerGitHub.jsx";

const BANNERS = [
    BannerPessoal,
    BannerGitHub
];

const email = "ryancunhha@outlook.com"

export { rotasMenu, redes, email, ignorarRepo, BANNERS, usernameGithub }