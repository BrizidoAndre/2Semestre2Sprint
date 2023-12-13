import axios from "axios";

// Event Resource Route
export const eventsResource = '/Evento';

// Next Events Route
export const nextEventResource = '/Evento/ListarProximos';

// Type Events Route
export const eventsTypeResource = '/TipoEvento';

// Presence Events Route
export const presenceEventResource = "/PresencaEvento";

// Comments Events Route
export const commentEventResource = "/ComentarioEvento";

// Instituicao Route
export const instituicaoResource = '/Instituicao'

export const loginResource = "/Login"

const apiPort = '7284';
const localApiUri = `https://localhost:${apiPort}/api`;

const externalApiUri = "https://eventwebapi-andre.azurewebsites.net/api"
// const externalApiUri  = null;

const api = axios.create({
    baseURL: externalApiUri
});

export default api;