export default function () {
  return {
    toolBarData: {
      selectedLang: 'en',
      selectedTab: 't_0',
      companyName: 'Las Tres Americas Income Tax Services',
      en: {
        tabs: [
          {
            id: 't_0',
            referenceElement: 'id_home',
            label: 'Home'
          },
          {
            id: 't_1',
            referenceElement: 'id_services',
            label: 'Services'
          },
          {
            id: 't_2',
            referenceElement: 'id_about_us',
            label: 'About Us'
          },
          {
            id: 't_3',
            referenceElement: 'id_team',
            label: 'Team'
          },
          {
            id: 't_4',
            referenceElement: 'id_reviews',
            label: 'Reviews'
          }
        ],
        appointment: 'Schedule an Appointment',
        login: 'Sign In'
      },
      es: {
        tabs: [
          {
            id: 't_0',
            referenceElement: 'id_home',
            label: 'Inicio'
          },
          {
            id: 't_1',
            referenceElement: 'id_services',
            label: 'Servicios'
          },
          {
            id: 't_2',
            referenceElement: 'id_about_us',
            label: 'Sobre Nosotros'
          },
          {
            id: 't_3',
            referenceElement: 'id_team',
            label: 'Equipo'
          },
          {
            id: 't_4',
            referenceElement: 'id_testimonial',
            label: 'Recomendaciónes'
          }
        ],
        appointment: 'Haga una Cita',
        login: 'Iniciar sesión'
      },
      languages: ['en', 'es']
    }
  }
}
