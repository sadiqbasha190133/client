// import axios from "axios";
// import { setAlert } from "./alert";
// import {
//   REGISTER_SUCCESS,
//   REGISTER_FAIL,
//   STUDENT_LOADED,

//   FACULTY_LOADED,
//   AUTH_ERROR,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   LOGOUT,
//   CLEAR_PROFILE,
// } from "./types";
// import setAuthToken from "../utils/setAuthToken";

// // Load User
// export const loadStudent = () => async (dispatch) => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }
//   try {
//     const res = await axios.get(`/api/student/current`);

//     console.log("inside load");
//     console.log(res.data);

//     dispatch({
//       type: STUDENT_LOADED,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: AUTH_ERROR,
//     });
//   }
// };

 
// // Load User
// export const loadFaculty = () => async (dispatch) => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }

//   try {
//     const res = await axios.get(`/api/faculty/current`);

//     // console.log("inside load");
//     // console.log(res.data);

//     dispatch({
//       type: FACULTY_LOADED,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: AUTH_ERROR,
//     });
//   }
// };

// // Register student
// export const studentRegister =
//   ({ email, password, roll, name, dept, year }) =>
//   async (dispatch) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const body = JSON.stringify({ email, password, roll, name, dept, year });

//     try {
//       const res = await axios.post(`/api/student/register`, body, config);

//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data,
//       });

//       dispatch(loadStudent());
//     } catch (err) {
//       const errors = err.response.errors;

//       if (errors) {
//         errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
//       }

//       dispatch({
//         type: REGISTER_FAIL,
//       });
//     }
//   };

// // Register faculty
// export const facultyRegister =
//   ({ email, password, name, dept }) =>
//   async (dispatch) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const body = JSON.stringify({ email, password, name, dept });

//     try {
//       const res = await axios.post(`/api/faculty/register`, body, config);

//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data,
//       });

//       dispatch(loadFaculty());
//     } catch (err) {
//       const errors = err.response.data.errors;

//       if (errors) {
//         errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
//       }

//       dispatch({
//         type: REGISTER_FAIL,
//       });
//     }
//   };

// // Login student
// export const loginStudent = (email, password) => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const body = JSON.stringify({ email, password });

//   try {
//     const res = await axios.post(`/api/student/login`, body, config);

//     console.log("inside login");
//     console.log(res.token);

//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data,
//     });

//     dispatch(loadStudent());
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
//     }

//     dispatch({
//       type: LOGIN_FAIL,
//     });
//   }
// };

// // Login faculty
// export const loginFaculty = (email, password) => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const body = JSON.stringify({ email, password });

//   try {
//     const res = await axios.post(`/api/faculty/login`, body, config);

//     console.log("inside login");
//     console.log(res);
//     console.log(res.data.token);

//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data,
//     });

//     dispatch(loadFaculty());
//   } catch (err) {
//     console.log(err.response);
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
//     }

//     dispatch({
//       type: LOGIN_FAIL,
//     });
//   }
// };

   

// // Logout / Clear Profile
// export const logout = () => (dispatch) => {
//   dispatch({ type: CLEAR_PROFILE });
//   dispatch({ type: LOGOUT });
// };




import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  STUDENT_LOADED,
  FACULTY_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

const BASE_URL = "https://attendance-hvr0.onrender.com";

// Load Student
export const loadStudent = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(`${BASE_URL}/api/student/current`);

    console.log("inside load");
    console.log(res.data);

    dispatch({
      type: STUDENT_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Load Faculty
export const loadFaculty = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${BASE_URL}/api/faculty/current`);

    dispatch({
      type: FACULTY_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register Student
export const studentRegister =
  ({ email, password, roll, name, dept, year }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password, roll, name, dept, year });

    try {
      const res = await axios.post(`${BASE_URL}/api/student/register`, body, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(loadStudent());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

// Register Faculty
export const facultyRegister =
  ({ email, password, name, dept }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password, name, dept });

    try {
      const res = await axios.post(`${BASE_URL}/api/faculty/register`, body, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(loadFaculty());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

// Login Student
export const loginStudent = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${BASE_URL}/api/student/login`, body, config);

    console.log("inside login");
    console.log(res.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadStudent());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Login Faculty
export const loginFaculty = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${BASE_URL}/api/faculty/login`, body, config);

    console.log("inside login");
    console.log(res);
    console.log(res.data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadFaculty());
  } catch (err) {
    console.log(err.response);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
