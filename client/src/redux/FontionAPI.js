import { connexionCommence, connexionReussi, connexionEchoue ,deconnexion, registerStart, registerSuccess, registerFailure} from "./utilisateurRedux"
import { supprimerPanier } from "./panierRedux"
import { suppFavori } from "./FavoriteRedux"
import axios from "axios" 
import { publicRequest,userRequest } from "../requestMethods";


export const login = async (dispatch, user) => {
  dispatch(connexionCommence());
  try {
    const res = await userRequest.post(`/auth/login`, user);
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


 export const sendMail = async (mail) => {
  try {
    await publicRequest.post("/newsletter/signup", mail);
  } catch (err) {}
};

 export const inscrire = async (dispatch, user) => {
  dispatch(registerStart());
  try {  
    const res = await publicRequest.post("/auth/inscrire", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

