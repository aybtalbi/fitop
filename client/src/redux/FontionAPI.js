import { connexionCommence, connexionReussi, connexionEchoue ,deconnexion} from "./utilisateurRedux"
import { supprimerPanier } from "./panierRedux"
import { suppFavori } from "./FavoriteRedux"
import axios from "axios" 

export const login = async (dispatch, user) => {
  dispatch(connexionCommence());
  try {
    const res = await axios.post(`http://localhost:8080/api/auth/login`, user);
    dispatch(connexionReussi(res.data));
  } catch (err) {
    dispatch(connexionEchoue());
  }
};

export const logout = async (dispatch) => {
    dispatch(supprimerPanier());
    dispatch(suppFavori());
    dispatch(deconnexion());
 };

export const viderPanier = async (dispatch) => {
    dispatch(supprimerPanier());
 };
