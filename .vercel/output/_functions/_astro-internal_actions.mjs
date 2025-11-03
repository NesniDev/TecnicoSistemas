import './chunks/_astro_actions_CZ3DgA25.mjs';
import { GoogleAuthProvider, signInWithCredential, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { f as firebase } from './chunks/config_kox2btI2.mjs';
import { a as defineAction } from './chunks/index_Pmqz-b-S.mjs';
import { a as anyType, o as objectType, b as booleanType, s as stringType, A as AstroUserError, n as numberType } from './chunks/astro/server_DAp9YVW7.mjs';
import { c as courses } from './chunks/courses_C6Ea-vG9.mjs';
import { createClient } from '@supabase/supabase-js';
import { A as ActionError } from './chunks/astro-designed-error-pages_DYULlum5.mjs';

const loginWithGoogle = defineAction({
  accept: "json",
  input: anyType(),
  handler: async (credentials) => {
    const credential = GoogleAuthProvider.credentialFromResult(credentials);
    if (!credential) {
      throw new Error("El inicio de google fallo");
    }
    await signInWithCredential(firebase.auth, credential);
    return { success: true };
  }
});

const loginUser = defineAction({
  accept: "form",
  input: objectType({
    email: stringType().email(),
    password: stringType().min(6),
    remember_me: booleanType().optional()
  }),
  handler: async ({ email, password, remember_me }, context) => {
    console.log(remember_me);
    if (remember_me) {
      context.cookies.set("email", email, {
        expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365),
        path: "/"
      });
    } else {
      context.cookies.delete("email", {
        path: "/"
      });
    }
    try {
      const userCredential = await signInWithEmailAndPassword(firebase.auth, email, password);
      const user = userCredential.user;
      return {
        success: true,
        uid: user.uid,
        email: user.email
      };
    } catch (error) {
      const firebaseError = error;
      console.log(error);
      if (firebaseError.code === "auth/invalid-credential") {
        throw new Error("Credenciales Incorrectas");
      }
      if (firebaseError.code === "auth/user-not-found") {
        throw new Error("Usuario no encontrado");
      }
      if (firebaseError.code === "auth/email-already-in-use") {
        throw new Error("El usuario ya existe");
      }
      throw new Error("Error al iniciar sesión");
    }
  }
});

const logout = defineAction({
  accept: "json",
  handler: async (_, { cookies }) => {
    return await signOut(firebase.auth);
  }
});

const registerUser = defineAction({
  accept: "form",
  input: objectType({
    name: stringType().min(3),
    email: stringType().email(),
    password: stringType().min(6)
    // remember_me: z.boolean().optional()
  }),
  handler: async ({ name, email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );
      if (!firebase.auth.currentUser) {
        throw new AstroUserError("No hay usuario");
      }
      updateProfile(firebase.auth.currentUser, { displayName: name });
      await sendEmailVerification(firebase.auth.currentUser, {
        url: `${undefined                           }/loginEstudiante`
      });
      const user = userCredential.user;
      return {
        success: true,
        uid: user.uid,
        email: user.email,
        name
      };
    } catch (error) {
      const firebaseError = error;
      if (firebaseError.code === "auth/email-already-in-use") {
        throw new AstroUserError("El usuario ya existe");
      }
      throw new AstroUserError("Error al registrar el usuario");
    }
  }
});

const getCourseByPage = defineAction({
  accept: "json",
  input: objectType({
    page: numberType().optional().default(1),
    limit: numberType().optional().default(4),
    search: stringType().optional()
  }),
  handler: async ({ page, limit, search }) => {
    let filteredCourses = courses;
    if (search) {
      const normalizeText = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      const searchTerm = normalizeText(search);
      filteredCourses = courses.filter(
        (course) => normalizeText(course.title).includes(searchTerm)
      );
    }
    page = page <= 0 ? 1 : page;
    const totalPage = Math.ceil(filteredCourses.length / limit);
    if (page > totalPage && totalPage > 0) {
      page = totalPage;
    }
    const coursesByPage = filteredCourses.slice(
      (page - 1) * limit,
      page * limit
    );
    return {
      courses: coursesByPage,
      totalPage
    };
  }
});

const resources = [
  {
    type: "pdf",
    title: "Guía Completa de Redes",
    description: "Documento detallado sobre conceptos básicos y avanzados de redes de computadoras.",
    image: "/images/redes.jpg",
    url: "/recursos/guia-redes.pdf"
  },
  {
    type: "pdf",
    title: "Manual de Seguridad Informática",
    description: "Guía completa sobre seguridad informática para principiantes y expertos.",
    image: "/images/seguridad-info.jpg",
    url: "/recursos/manual-seguridad.pdf"
  },
  {
    type: "pdf",
    title: "Introducción a la Programación",
    description: "Documento introductorio para aprender los fundamentos de la programación.",
    image: "/images/programacion.jpg",
    url: "/recursos/intro-programacion.pdf"
  },
  {
    type: "excel",
    title: "Control de Asistencia",
    description: "Plantilla para registrar y controlar la asistencia de empleados o estudiantes.",
    image: "/images/asistencia.jpg",
    url: "/recursos/control-asistencia.xlsx"
  },
  {
    type: "excel",
    title: "Presupuesto Familiar",
    description: "Plantilla para gestionar y controlar el presupuesto familiar mensual.",
    image: "/images/presupuesto.jpg",
    url: "/recursos/presupuesto-familiar.xlsx"
  },
  {
    type: "word",
    title: "Plantilla de Carta Formal",
    description: "Formato profesional para cartas formales en Word.",
    image: "/images/carta-formal.jpg",
    url: "/recursos/plantilla-carta-formal.docx"
  },
  {
    type: "word",
    title: "Modelo de Contrato",
    description: "Plantilla de contrato de servicios profesionales en formato Word.",
    image: "/images/contrato.jpg",
    url: "/recursos/modelo-contrato.docx"
  },
  {
    type: "web",
    title: "Cursos Online Gratuitos",
    description: "Lista de plataformas con cursos en línea gratuitos de programación.",
    image: "/images/cursos-online.jpg",
    url: "https://ejemplo.com/cursos-gratis"
  },
  {
    type: "web",
    title: "Herramientas para Desarrolladores",
    description: "Colección de herramientas útiles para desarrolladores web y móviles.",
    image: "/images/herramientas-dev.jpg",
    url: "https://ejemplo.com/herramientas-dev"
  },
  {
    type: "libro",
    title: "Patrones de Diseño",
    description: "Libro digital sobre patrones de diseño de software.",
    image: "/images/patrones-diseno.jpg",
    url: "/recursos/patrones-diseno.pdf"
  },
  {
    type: "libro",
    title: "Aprende JavaScript",
    description: "Guía completa para aprender JavaScript desde cero.",
    image: "/images/javascript.jpg",
    url: "/recursos/aprende-javascript.pdf"
  },
  {
    type: "access",
    title: "Sistema de Biblioteca",
    description: "Base de datos para gestión de préstamos de biblioteca en Access.",
    image: "/images/biblioteca.jpg",
    url: "/recursos/sistema-biblioteca.accdb"
  },
  {
    type: "access",
    title: "Control de Ventas",
    description: "Sistema de gestión de ventas en Access para pequeñas empresas.",
    image: "/images/ventas.jpg",
    url: "/recursos/control-ventas.accdb"
  },
  {
    type: "pdf",
    title: "Guía de HTML5 y CSS3",
    description: "Manual completo sobre desarrollo web con HTML5 y CSS3.",
    image: "/images/html-css.jpg",
    url: "/recursos/guia-html5-css3.pdf"
  },
  {
    type: "excel",
    title: "Calendario Académico",
    description: "Plantilla de calendario académico para instituciones educativas.",
    image: "/images/calendario.jpg",
    url: "/recursos/calendario-academico.xlsx"
  },
  {
    type: "word",
    title: "Plantilla de Tesis",
    description: "Formato profesional para trabajos de grado y tesis en Word.",
    image: "/images/tesis.jpg",
    url: "/recursos/plantilla-tesis.docx"
  },
  {
    type: "web",
    title: "Recursos para Diseñadores",
    description: "Colección de recursos gratuitos para diseñadores gráficos.",
    image: "/images/diseno-grafico.jpg",
    url: "https://ejemplo.com/recursos-diseno"
  },
  {
    type: "excel",
    title: "Plantilla de Inventario",
    description: "Plantilla de Excel para llevar el control de inventario de equipos tecnológicos.",
    image: "/images/excel.jpg",
    url: "/recursos/plantilla-inventario.xlsx"
  },
  {
    type: "word",
    title: "Manual de Usuario",
    description: "Plantilla profesional para crear manuales de usuario de software.",
    image: "/images/word.jpg",
    url: "/recursos/plantilla-manual.docx"
  },
  {
    type: "web",
    title: "Curso de Programación Web",
    description: "Recopilación de recursos en línea para aprender desarrollo web desde cero.",
    image: "/images/web.jpg",
    url: "https://ejemplo.com/curso-web"
  },
  {
    type: "libro",
    title: "Código Limpio",
    description: 'Versión digital del libro "Código Limpio" de Robert C. Martin.',
    image: "/images/codigo-limpio.jpg",
    url: "/recursos/codigo-limpio.pdf"
  },
  {
    type: "access",
    title: "Base de Datos Clientes",
    description: "Plantilla de base de datos en Access para gestión de clientes.",
    image: "/images/access.jpg",
    url: "/recursos/plantilla-clientes.accdb"
  },
  {
    type: "pdf",
    title: "Guía de Seguridad Informática",
    description: "Manual completo sobre buenas prácticas de seguridad en sistemas.",
    image: "/images/seguridad.jpg",
    url: "/recursos/guia-seguridad.pdf"
  },
  {
    type: "excel",
    title: "Control de Gastos",
    description: "Plantilla para llevar el control de gastos personales o de proyectos.",
    image: "/images/gastos.jpg",
    url: "/recursos/control-gastos.xlsx"
  },
  {
    type: "web",
    title: "Tutoriales de Programación",
    description: "Lista de los mejores sitios web con tutoriales gratuitos de programación.",
    image: "/images/tutoriales.jpg",
    url: "https://ejemplo.com/tutoriales"
  },
  {
    type: "pdf",
    title: "Manual de Redes Avanzadas",
    description: "Guía avanzada sobre configuración de redes empresariales.",
    image: "/images/redes-avanzadas.jpg",
    url: "/recursos/redes-avanzadas.pdf"
  },
  {
    type: "libro",
    title: "El Programador Pragmático",
    description: "Versión digital del clásico libro de desarrollo de software.",
    image: "/images/programador-pragmatico.jpg",
    url: "/recursos/programador-pragmatico.pdf"
  },
  {
    type: "word",
    title: "Plantilla de Informe Técnico",
    description: "Formato profesional para informes técnicos en Word.",
    image: "/images/informe.jpg",
    url: "/recursos/plantilla-informe.docx"
  },
  {
    type: "access",
    title: "Sistema de Inventario",
    description: "Base de datos completa para gestión de inventario en Access.",
    image: "/images/inventario.jpg",
    url: "/recursos/sistema-inventario.accdb"
  },
  {
    type: "web",
    title: "Recursos para Desarrolladores",
    description: "Colección de herramientas y recursos en línea para desarrolladores.",
    image: "/images/recursos-dev.jpg",
    url: "https://ejemplo.com/recursos-dev"
  },
  {
    type: "excel",
    title: "Planificador de Proyectos",
    description: "Plantilla para la gestión y seguimiento de proyectos en Excel.",
    image: "/images/proyectos.jpg",
    url: "/recursos/planificador-proyectos.xlsx"
  }
];

const getResourceByPage = defineAction({
  accept: "json",
  input: objectType({
    page: numberType().optional().default(1),
    limitResources: numberType().optional().default(9),
    search: stringType().optional()
  }),
  handler: async ({ page, limitResources, search }) => {
    let resourcesFiltered = resources;
    if (search) {
      const normalizeText = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      const searchTerm = normalizeText(search);
      resourcesFiltered = resources.filter(
        (resource) => normalizeText(resource.title).includes(searchTerm)
      );
    }
    const totalPages = Math.ceil(resourcesFiltered.length / limitResources);
    if (page > totalPages && totalPages > 0) {
      page = totalPages;
    }
    const resourcesByPage = resourcesFiltered.slice((page - 1) * limitResources, page * limitResources);
    return {
      resourcesByPage,
      totalPages
    };
  }
});

const supabaseUrl = "https://hyrebezjlqgfxigrqbvn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cmViZXpqbHFnZnhpZ3JxYnZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4NjU4MTMsImV4cCI6MjA3NzQ0MTgxM30.hct2xGbiOMizwr0v8yjxsqN2AxofdgS507AJE0v0shI";
const supabase = createClient(supabaseUrl, supabaseKey);

const ERROR_CODE_ALREADY_EXISTS = "23505";
const saveForm = async (name, email, message) => {
  const { data, error } = await supabase.from("Form").insert({
    name,
    email,
    message
  });
  if (error?.code === ERROR_CODE_ALREADY_EXISTS) {
    return {
      duplicate: true,
      success: false,
      message: "El correo electronico ya existe"
    };
  }
  if (error) {
    console.log(error);
    return {
      duplicate: false,
      success: false,
      message: "Hubo un error al enviar el formulario"
    };
  }
  return {
    duplicate: false,
    success: true,
    error: null
  };
};

const getForm = defineAction({
  accept: "json",
  input: objectType({
    name: stringType(),
    email: stringType().email(),
    message: stringType().optional().default("")
  }),
  handler: async ({ name, email, message }) => {
    const { success, error, duplicate } = await saveForm(name, email, message);
    if (!success) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: error ?? "Hubo un error al guardar el formulario"
      });
    }
    if (duplicate) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "El correo electronico ya existe"
      });
    }
    return {
      success: true,
      message: "Formulario enviado correctamente"
    };
  }
});

const server = {
  //action
  //login
  loginUser,
  //logout
  logout,
  //auth
  registerUser,
  //google
  loginWithGoogle,
  //courses
  getCourseByPage,
  //recurses
  getResourceByPage,
  //form
  getForm
};

export { server };
