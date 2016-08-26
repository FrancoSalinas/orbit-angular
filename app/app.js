var app = angular.module('francoSalinasMendoza', [
    'ui.bootstrap',
    'ngSanitize',
    'pascalprecht.translate'
]);

app.config(['$translateProvider', function($translateProvider) {

  $translateProvider
  .useStaticFilesLoader({
    prefix: '/objects/',
    suffix: '.json'
  })
  .useSanitizeValueStrategy('sanitizeParameters')
  .preferredLanguage('es');
}]);

app.controller('MainCtrl', [
    '$sce',
    function($sce){
        this.name = "Franco Javier Salinas Mendoza";
        this.tagline = "Ingeniero en Computación";
        this.addresses = [
            {
                icon : "fa fa-envelope",
                show : "franco.salinas.mendoza@gmail.com",
                link : "mailto: franco.salinas.mendoza@gmail.com"
            },
            {
                icon : "fa fa-phone",
                show : "+549381 670 5080",
                link : "tel: +5493816705080"
            },
            {
                icon : "fa fa-linkedin",
                show : "linkedin.com/in/francosalinasmendoza",
                link : "https://www.linkedin.com/in/francosalinasmendoza"
            },
        ];
        this.curriculum_list = [
            {
                name : "English",
                link : "resume/cvfsalinasmendoza-en.pdf"
            },
            {
                name : "Español",
                link : "resume/cvfsalinasmendoza-es.pdf"
            }
        ];
        this.degrees = [
            {
                name : "Ingeniería en Computación",
                where : "Universidad Nacional de Tucumán",
                when : "2010 - 2016"
            }
        ];
        this.language_list = [
            {
                name : "Español",
                level : "Nativo"
            },            
            {
                name : "Inglés",
                level : "Avanzado"
            },
            {
                name : "Francés",
                level : "Básico"
            }
        ];
        this.interest_list = [
            "Guitarra",
            "Natación",
            "Cine",
            "Cocina"
        ];
        this.about_me = "Soy un ingeniero en computación entusiasta del " +
                        "desarrollo, radicado en Tucumán, Argentina. A " +
                        "pesar de haber participado en proyectos de " +
                        "hardware, el software es el área en la que mejor " +
                        "me desenvuelvo. Me interesan las aplicaciones " +
                        "web, la robótica y la inteligencia artificial. " +
                        "El  desarrollo de videojuegos fue lo que me " +
                        "atrajo inicialmente a esta profesión y es una de " +
                        "las actividades a las que dedico mi tiempo " +
                        "libre. Me gustan la música, el cine, la natación " +
                        "y suelo ser asador designado. ";
        this.experience_list = [
            {
                position : "Desarrollador",
                when : "2015 - Presente",
                where : "DIGICOM, Tucumán",
                description : $sce.trustAsHtml (
                    "Responsable del diseño y desarrollo de una nueva " +
                    "generación de " +
                    "<a href='https://es.wikipedia.org/wiki/Unidad_Terminal_Remota'>" +
                    "RTUs</a> programadas en Python, y de su software " +
                    "de configuración."
                )
            },
            {
                position : "Ayudante Estudiantil",
                when : "2014 - 2016",
                where : "Facultad de Ciencias Exactas y Tecnología, UNT",
                description : $sce.trustAsHtml (
                    "Ayudante en las cátedras de Diseño Lógico I, y " +
                    "Sistemas con Microprocesadores y Microcontroladores. " +
                    "Responsable de grupos de hasta 12 estudiantes " +
                    "simultáneamente."
                )
            },
            {
                position : "Líder de Equipo de Desarrollo",
                when : "2013 - 2015",
                where : "Grupo de Robótica, FACET UNT",
                description : $sce.trustAsHtml (
                    "Promotor y líder de equipo en el desarrollo de un " +
                    "<a href='https://www.youtube.com/watch?v=J6u_ZPMQlAQ'> " +
                    "robot móvil autónomo terrestre para resolución de " +
                    "laberintos</a>. Diseñador y desarrollador de " +
                    "firmware y de estrategiasde inteligencia artificial. " +
                    "Capacitador de nuevos integrantes. Diseñador de " +
                    "futuras versiones de hardware."
                )
            },
            {
                position : "Colaborador del Proyecto CIAA",
                when : "2014 - Presente",
                where : "Pasantía, FACET UNT / Independiente",
                description : $sce.trustAsHtml (
                    "Co-diseñador de la arquitectura de un bootloader " +
                    "para la <a href='http://proyecto-ciaa.com.ar/'> " +
                    "CIAA</a>. Diseñador del protocolo de actualización. " +
                    "Capacitador de nuevos pasantes. Diseñador y " +
                    "desarrollador de un <a href='#µFuzzy'>módulo de " + 
                    "lógica difusa</a>."
                )                
            }
        ];
        this.project_list = [
            {
                name : "µFuzzy",
                link : "https://bitbucket.org/fsalinasmendoza/fuzzy/overview",
                description : $sce.trustAsHtml (
                    "Una librería de lógica difusa desarrollada en C, " +
                    "altamente eficiente pensada para embebidos de bajo " +
                    "costo independientemente de su arquitectura. Esta " +
                    "librería se formó parte de mi <a href=" +
                    "'ufuzzy/Trabajo%20de%20Graduacion.pdf'>trabajo de " +
                    "graduación</a> y próximamente será incorporada al " +
                    "proyecto " +
                    "<a href='http://www.proyecto-ciaa.com.ar/devwiki/doku.php?id=desarrollo:firmware:ufuzzy'>" +
                    "CIAA</a>."
                )
            },
            {
                name : "sandwich",
                link : "#",
                description : $sce.trustAsHtml (
                    "Juego casual en desarrollo para móviles, en el que " +
                    "me desempeño como diseñador, programador y artista " +
                    "gráfico. <a href='sandwich/'>Prototipo web</a> " +
                    "disponible."
                )
            }
        ];
        this.skill_list = [
            {
                name : "C & Ceedling",
                level : 97
            },
            {
                name : "Python",
                level : 92
            },
            {
                name : "MySQL sqlite",
                level : 85
            },
            {
                name : "C++ Haxe Java PHP",
                level : 82
            },
            {
                name : "Angular & Node",
                level : 60
            }
        ];
    }
]);
