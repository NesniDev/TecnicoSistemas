const currentYear = new Date().getFullYear()
const nextYear = currentYear + 1

export const events = [
    {
        title: 'Grados de fin de año',
        description: 'Graduación de fin de año de los estudiantes de IFE COLOMBIA',
        date: `22 de Nov de ${currentYear}`,
        date_end: `15/12/${currentYear}`,
        time: '10:00 AM - 04:00 PM | Aula Julio Florez'
    },
    // {
    //     title: 'Fecha limites de Matriculas',
    //     description: 'Fecha limites de matriculas para los estudiantes de IFE COLOMBIA',
    //     date: `22 de Ene de ${currentYear}`,
    //     date_end: `22/01/${currentYear}`,
    //     time: '8:00 AM - 04:00 PM | Instituto IFE Colombia'
    // },
    {
        title: 'Evaluaciones de cursos',
        description: 'Fecha limites de las evaluaciones de los cursos de IFE COLOMBIA',
        date: `22 de Ene de ${currentYear}`,
        date_end: `22/01/${currentYear}`,
        time: '8:00 AM - 04:00 PM | Instituto IFE Colombia'
    },
    {
        title: 'Anuncios',
        description: 'Anuncios de cursos que estarán disponibles en IFE Colombia',
        date: `10 de Ene de ${nextYear}`,
        date_end: `10/01/${nextYear}`,
        time: '8:30 AM - 04:00 PM | Instituto IFE Colombia'
    }
]